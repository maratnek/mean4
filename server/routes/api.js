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
        if (err) {console.log(err);return err;}
        closure(result._id);
    });
  });
}
getId('NewStock', (objid)=>{console.log(objid)});

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

// GOODS COLLECTION
router.get('/stock-goods', (req, res) => {
  console.log(req.query.name);
  if (req.query.name.length)
  {
    query = {stockName: req.query.name};
    connection((db) => {
        let CATALOG = db.collection('catalog');
        db.collection('goods')
            .aggregate([
              {$match:query}
              ,{$lookup:{
                from: "catalog",
                localField: "_id",
                foreignField: "_id",
                as: "catalog"
              }}
              ,{$unwind:"$catalog"}
              ,{$project: {
                id: "$_id",
                count: "$count",
                name: "$catalog.name",
                storePlace: "$catalog.storePlace",
                measure: "$catalog.measure",
              }}
            ])
            // .map(iter => iter.catalog = iter.catalog[0])
            .toArray()
            .then((goods) => {
              console.log(goods);
              response.data = goods;
              res.json(response);
              // let dt = [];
              // let myPromise = new Promise((resolve,reject)=>{
              //   goods.map(it => {
              //     it.dataTable.map((d, index) => {
              //       d.publishedDate = it.publishedDate;
              //       // let catalog = {};
              //       id = d._id;
              //       if (id && id.length > 0)
              //       {
              //         query = {_id: ObjectID(id)};
              //         colCatalog.find(query).toArray().then(cat => {
              //           console.log('Catalog',cat);
              //           let catalog = Object.assign({}, cat[0]);
              //           for (let prop in catalog)
              //             d[prop] = catalog[prop];
              //           dt.push(d);
              //           if (it.dataTable.length == index + 1)
              //             resolve(dt);
              //         });
              //       }
              //     });
              //   });
              // });
              // myPromise.then((data)=>{
              //   console.log('Data stock',data);
              //   response.data = data;
              //   res.json(response);
              // }).catch(err=>console.log('Error Promise stock'));
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
            STATIST_GOODS.insert({stockName: req.body.stockName, publicDate: new Date(),
              count: catalog.count, price: catalog.price, action: "INCOME"})
              .then(result2 => {
                console.log('SUCCESS INSERT STATIC GOODS');
                if (req.body.data.length == index + 1)
                  resolve('true');
              })
              .catch(err => console.log('ERROR INSERT STATIC GOODS', err));
            })
            .catch(err => console.log('ERROR INSERT UPDATE GOODS', err));

          });
      }))// new Promise
      .then(success=>{
          if (success)
            res.sendStatus(200);
          else {
            sendError(501);
          }
      })
    }

  })
});

router.post('/expense-goods', (req,res) => {
  connection((db)=>{
      console.log('Expense', req.body);
      if (!req.body.stockName.length)
        res.sendStatus(500);
      connection((db) => {
        let colGoods = db.collection('goods');
        req.body.dataTable.forEach(catalog => {
          console.log('catalog ', catalog);
          let query = { stockName: req.body.stockName, "dataTable._id": catalog._id } ;
          console.log(query);
          colGoods.find(query).toArray()
          .then( data => {
            console.log("%j",data);
            // colGoods.update(query, { $inc: { score: 1 } });
          } )
          .catch( (err) => console.log('ERROR ', err) )
        });


        // query = {stockName: req.query.body.stockName, dataTable: {count: 0} };
        // colGoods.remove(query,(err, r) => {
        //   if (err)
        //     console.log('ERROR ' + r.result.n);
        //   else
        //     console.log('SUCCESS ' + r.result.n);
        // }
      });

  });
});

// Library goods -- catalog
router.get('/catalogs', (req,res) => {
  connection((db)=>{
        db.collection('catalog').find().toArray().then((data)=>{
          console.log(data);
          response.data = data;
          res.json(response);
        })
        .catch( err => sendError(err,res) );
  });
});

router.get('/catalog', (req,res) => {
  console.log(req.query.id);
  if (!req.query.id || !req.query.id.length)
    sendError(err,res);
  query = {_id: ObjectID(req.query.id)};
  connection((db)=>{
        db.collection('catalog').find(query).toArray().then((data)=>{
          console.log(data);
          if (data.length == 1)
            response.data = data[0];
          else {
            console.log('Error: more than one object (catalog by id)');
          }
          res.json(response);
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
      .update({_id:ObjectID(id)}, {$set:req.body})
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
      console.log('delete', req.query.name);
      if (!req.query.name.length)
        res.sendStatus(500);
      query = {name: req.query.name};
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
        db.collection('product').find().toArray().then((data)=>{
          console.log('find product %j', data);
          res.sendStatus(200);
        })
      }
    });

  })
});

router.get('/products', (req,res) => {
  connection((db)=>{
        db.collection('product').find().toArray().then((data)=>{
          console.log(data);
          response.data = data;
          res.json(response);
        })
        .catch( err => sendError(err,res) );
  });
});

module.exports = router;
