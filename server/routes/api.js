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
// add new catalog
router.post('/add-catalog', (req,res) => {
  connection((db)=>{
    console.log('post add catalog');
      console.log(req.body);
      console.log(req.body);
      res.sendStatus(200);
  });
});

// Get catalogs
router.get('/catalogs', (req,res) => {
  connection((db)=>{
        db.collection('catalog').find().toArray().then((elem)=>{
          console.log(elem);
          response.data = elem;
          res.json(response);
        })
        .catch( err => sendError(err,res) );
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
router.get('catalog',(req, res)=>{
  cosole.log(req.query);
  connection((db) => {
      db.collection('catalog')
          .find()
          .toArray()
          .then((catalog) => {
              response.data = catalog;
              res.json(response);
          })
          .catch((err) => {
              sendError(err, res);
          });
  });
});

router.post('catalog',(req, res)=>{
  cosole.log(req.query);
});

module.exports = router;
