const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/mean', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

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

// Get goods
router.get('/goods', (req, res) => {
    connection((db) => {
        db.collection('goods')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
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

router.post('/add-catalog',(req,res) => {
  connection((db)=>{
    console.log('post catalog');
    console.log(req.body);
    if (req.body.edit){
      console.log('edit catalog');
      let id = req.body._id;
      delete req.body._id;
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
