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

// create new stock
router.get('/create', (req,res) => {
  connection((db)=>{
      console.log('create');
      db.collection('stock')
      .insert({name: 'stock name new'})
      .then(()=>{
        // res.json('success');
        db.collection('stock').find().toArray().then((stock)=>{
          console.log(stock);
          response.data = stock;
          res.json(response);
        })
        .catch( err => sendError(err,res) );
      })
      .catch( (err) => sendError(err, res) );
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

module.exports = router;
