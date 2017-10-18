const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const mongoPath = 'mongodb://kentavr:novie1904@ds133004.mlab.com:33004/stock_db';
// let mongoPath = 'mongodb://localhost:27017/mean';
// Connect
const connection = (closure) => {
    return MongoClient.connect(mongoPath, (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

const getId = (stockName, closure)=>{
  connection(db => {
    db.collection('stock').findOne({name:stockName}, (err, result)=>{
        if (err) {console.log('Get Stock By Name Error ',err);}
        else closure(result._id);
    });
  });
}
// getId('NewStock', (objid)=>{console.log(objid)});

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};



// create stock configuration
router.post('/stock-config', (req,res) => {
  connection((db)=>{
    console.log('post stock config');
      console.log(req.body.name);
      console.log(req.body.price);
      res.sendStatus(200);
  });
});

// create new stock
router.get('/create', (req,res) => {
  connection((db)=>{
      console.log(req.query.name);
      if (!req.query.name.length)
        return;
      query = {name: req.query.name};

      db.collection('stock').find(query).toArray(
        (err, result) => {
          if(result.length!=0) {
            res.sendStatus(500);
          } else {
            db.collection('stock')
            .insert({name: req.query.name})
            .then(()=>{
              db.collection('stock').find().toArray().then((stock)=>{
                console.log(stock);
                response.data = stock;
                res.json(response);
                // res.sendStatus(200);
              })
              .catch( err => sendError(err,res) );
            })
            .catch( (err) => sendError(err, res) );
          }
        }
      );

  });
});

// Get stocks
router.get('/stocks', (req,res) => {
  connection((db)=>{
        db.collection('stock').find().toArray().then((stock)=>{
          console.log(stock);
          response.data = stock.map(stock => stock.name);
          res.json(response);
        })
        .catch( err => sendError(err,res) );
  });
});
// Get stock by name
router.get('/stock', (req,res)=>{
  if (req.query.name && req.query.name.length)
  {
    getId(req.query.name, (id)=>{
      response.data = true;
      res.json(response);
    })
  }
  else
  {
    response.data = false;
    res.json(response);
  }
});

// GOODS COLLECTION
router.get('/stock-goods', (req, res) => {
  console.log(req.query.name);
  if (req.query.name.length)
  {
    connection((db) => {
      db.collection('goods')
      .aggregate([
        {$match:{stockName: req.query.name}}
        ,{$lookup:{
          from: "catalog",
          localField: "_id",
          foreignField: "_id",
          as: "catalog"
        }}
        ,{$lookup:{
          from: "statist-goods",
          localField: "_id",
          foreignField: "catalogId",
          as: "statist"
        }}
        ,{$unwind:"$catalog"}
        // ,{$unwind:"$statist"}
        // ,{$group:{
        //   _id: "$statist.publicDate",
          // count: "$count",
          // name: "$catalog.name"
        // }}
        ,{$match:{"statist.del": false}}
        ,{$project: {
          id: "$_id",
          count: "$count",
          name: "$catalog.name",
          storePlace: "$catalog.storePlace",
          measure: "$catalog.measure",
          stat_count: "$statist.count",
          stat_price: "$statist.price",
          stat_inc: {$eq: ["$statist.action","INCOME"]},
          stat_date: "$statist.publicDate",
          stat: "$statist",
          sum: {$sum: "$statist.count"},
          // sum_price: {$sum: "$statist.price"},
          // sum_p_m: {$sum: {$multiply:["$statist.count", "statist.price"]}},
          price: { $divide: [{
            $reduce: {
              input: "$statist",
              initialValue: "",
              in: { $sum:["$$value", {$multiply:["$$this.balance","$$this.price"]}]}
            }
          }, "$count"]},
          // sum_balance_price: "$sum_p_r",
          // finalPrice: {
          //   $let: {
          //     vars: {
          //       a:{$multiply:["$statist.count", "statist.price"]}
          //     },
          //     in:{}
          //   }
          // }
        }}
        ,{$sort:{stat_date:-1}}
      ])
      .toArray()
      .then( goods => {
        console.log(goods);
        response.data = goods;
        res.json(response);
      })
      .catch((err) => {
        sendError(err, res);
      });
    });
  }
});

router.post('/income-goods', (req,res) => {
  connection((db)=> {
    console.log('income-goods', req.body)
    if (req.body.stockName && req.body.stockName.length){
      let GOODS = db.collection('goods');
      let STATIST_GOODS = db.collection('statist-goods');
      (new Promise((resolve, reject)=>{
        req.body.data.forEach( (catalog, index) => {
          console.log(catalog);
          GOODS.update(
            {_id:ObjectID(catalog._id),stockName:req.body.stockName},
            {
              $inc:{count:catalog.count},
              $setOnInsert:{stockName:req.body.stockName}
            },
            {upsert: true}
          )
          .then(result1 => {
            console.log('SUCCESS INSERT UPDATE GOODS');
            if (catalog.count > 0) {
              STATIST_GOODS.insert({stockName: req.body.stockName, catalogId: ObjectID(catalog._id), publicDate: new Date(),
                count: catalog.count, price: catalog.price, balance: catalog.count, action: "INCOME", del:false})
                .then(result2 => {
                  console.log('SUCCESS INSERT STATIC GOODS');
                  if (req.body.data.length == index + 1)
                    resolve('true');
                })
                .catch(err => console.log('ERROR INSERT STATIC GOODS', err));
              }
            })
            .catch(err => console.log('ERROR INSERT UPDATE GOODS', err));

          });
      }))// new Promise
      .then(success=>{
          if (success)
            res.sendStatus(200);
          else {
            sendError(err, res);
          }
      })
    }
  })
});

router.post('/expense-goods', (req,res) => {
  connection((db)=>{
      console.log('Expense', req.body);
      if (req.body.stockName && req.body.stockName.length){
        let GOODS = db.collection('goods');
        let STATIST_GOODS = db.collection('statist-goods');
        try{ (new Promise((resolve2, reject2)=>{
          for (let index = 0; index < req.body.data.length; index++) {
            let catalog = req.body.data[index];
            GOODS.findOne( {_id:ObjectID(catalog._id),stockName:req.body.stockName})
            .then(result => {
              console.log('FIND', result.count, catalog.count);
              if (result.count < catalog.count) {
                response.message = 'ERROR COUNT = ' + catalog.count + ' LESS THAN ' + result.count;
                console.log(response.message);
                reject2(new Error('Dont FIND'));
              }
              if (req.body.data.length == index + 1){
                resolve2(true);
              }
            })
            .catch(err => console.log('EXPENSE ERROR FIND ', catalog));
          }

          }))
          .then( success => {
            if (success) {
              (new Promise((resolve, reject)=>{
                req.body.data.forEach( (catalog, index) => {
                  GOODS.update(
                    {_id:ObjectID(catalog._id),stockName:req.body.stockName},
                    {
                      $inc:{count:-catalog.count},
                    },
                    {upsert: false}
                  )
                  .then(result1 => {
                    console.log('SUCCESS EXPENSE GOODS');
                    if (catalog.count > 0) {
                      STATIST_GOODS.find(
                        {catalogId: ObjectID(catalog._id), action: "INCOME", del:false, stockName:req.body.stockName},
                        {sort: {date: 1}}
                      ).toArray()
                      .then(data => {
                        console.log(data);
                        let count = catalog.count;
                        let priceBalance = 0;
                        data.forEach((income, index2) => {
                          if (count != 0){
                            let balance = income.balance - count;
                            if (balance <= 0){
                              STATIST_GOODS.update({_id: income._id},
                                {$set:{del:true, balance: 0}},
                                {upsert:false}
                              ).catch(err => console.log('ERROR ', income._id, err));
                              count -= income.balance;
                              priceBalance += income.balance*income.price;

                            } else {
                              STATIST_GOODS.update({_id: income._id},
                                {$set:{balance: balance}},
                                {upsert:false}
                              ).catch(err => console.log('ERROR ', income._id, err));
                              priceBalance += count*income.price;
                              count = 0;
                            }
                          }
                          if (data.length == index2 + 1 || count == 0){// EXPENSE INSERT
                            STATIST_GOODS.insert({stockName: req.body.stockName, catalogId: ObjectID(catalog._id), publicDate: new Date(),
                              count: catalog.count, action: "EXPENSE"})
                              .then(result2 => {
                                console.log('SUCCESS INSERT STATIC GOODS');
                                if (req.body.data.length == index + 1){
                                  console.log('PROMISE RETURN YET . NEEDS REMOVE count = 0');
                                  GOODS.remove({stockName: req.body.stockName, count: 0},(err, r) => {
                                    if (err)
                                    console.log('ERROR DELETE COUNT = 0' + r.result.n);
                                    else
                                    console.log('SUCCESS DELETE COUNT = 0' + r.result.n);
                                  });
                                  resolve(true);
                                }
                            })
                            .catch(err => console.log('ERROR INSERT STATIC GOODS', err));
                          }
                        });

                      })
                      .catch(err => console.log('ERROR FIND OBJECT'));
                      }
                    })
                    .catch(err => console.log('ERROR EXPENSE GOODS', err));
                  })
                }))// new Promise
                .then(success=>{
                    if (success)
                      res.sendStatus(200);
                    else {
                      sendError(err, res);
                    }
                })
              } else {
                sendError(response, res)
              }
          })
          .catch(err => console.log('FIND PROMISE ERROR ', err));
          }
          catch(err){
              console.log(err);
          };

      }

  });
});

// Library goods -- catalog
router.get('/catalogs', (req,res) => {
  connection((db)=>{
    query = {stockName: req.query.stockName};
    db.collection('catalog').find(query).toArray().then((data)=>{
      console.log(data);
      response.data = data;
      res.json(response);
    })
    .catch( err => sendError(err,res) );
  });
});

router.get('/catalog', (req,res) => {
  console.log(req.query);
  if (!req.query.id || !req.query.id.length)
    sendError(err,res);
  query = {_id: ObjectID(req.query.id), stockName: req.query.stockName};
  connection((db)=>{
    db.collection('catalog').find(query).toArray().then((data)=>{
      console.log(data);
      if (data.length == 1)
      response.data = data[0];
      else {
        console.log('Error: more than one object (catalog by id)');
      }
      res.json(response)  ;
    })
    .catch( err => sendError(err,res) );
  });
});


router.post('/add-catalog',(req,res) => {
  connection((db)=>{
    console.log('post catalog');
    console.log(req.body);
    if (req.body.edit){
      console.log('edit catalog');
      let id = req.body._id;
      delete req.body._id;
      delete req.body.edit;
      db.collection('catalog')
      .update({_id:ObjectID(id), stockName: req.body.stockName}, {$set:req.body})
      .then(()=>{
        db.collection('catalog').find().toArray().then((data)=>{
          console.log(data);
          res.sendStatus(200);
        })
        .catch( err => sendError(err,res) );
      })
    } //edit
    else
    {
      delete req.body.edit;
      console.log('insert catalog');
      db.collection('catalog')
      .insert(req.body)
      .then(()=>{
        db.collection('catalog').find().toArray().then((data)=>{
          console.log(data);
          res.sendStatus(200);
        })
        .catch( err => sendError(err,res) );
      })
    }//insert
  });
});

router.get('/delete-catalog', (req,res) => {
  connection((db)=>{
    console.log('delete', req.query);
    if (!req.query.name.length)
    res.sendStatus(500);
    query = {name: req.query.name, stockName:req.query.stockName};
    console.log(query);
    db.collection('catalog').remove(query,(err, r) => {
      if (err) console.log('error ' + r.result.n);
      else {
        if(r.result.n!=1) {
          console.log('error' + r.result.n);
          res.sendStatus(500);
        } else {
          console.log('success ' + r.result.n);
          res.sendStatus(200);
        }
      }
    });

  });
});

// Product API
router.post('/create-product',(req,res) => {
  connection((db)=> {
    console.log('create-product', req.body)
    console.log('create-product', req.body.dataTable)
    if (!req.body.name.length)
      res.sendStatus(500);
    db.collection('product').insert(req.body, (err, r) => {
      if (err)
          sendError(err, res);
      else {
        db.collection('product').find({stockName:req.body.stockName}).toArray().then((data)=>{
          console.log('find product %j', data);
          res.sendStatus(200);
        })
      }
    });

  })
});

router.get('/products', (req,res) => {
  connection((db)=>{
    query = {stockName:req.query.stockName};
    console.log(query);
    db.collection('product').find(query).toArray().then((data)=>{
      console.log(data);
      response.data = data;
      res.json(response);
    })
    .catch( err => sendError(err,res) );
  });
});

module.exports = router;
