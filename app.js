const express = require('express');
const app = express()
app.listen(27017, () => console.log('Server running on port 27017!'))

const MongoClient = require('mongodb').MongoClient
var url = "mongodb://lordtheo:lordtheo@139.59.177.90:27017";

app.get('connect/:emei', (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("CONNECTED");
        dbo.collection("CREATED").findOne({
            IMEI: req.params.emei//req.params.name
        }, 
        function(err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
        });
    });
});

// app.get('/:connect', (req, res) => {
//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//        // console.log(url.parse(req.url,true).query);
//         var dbo = db.db("CONNECTED");
//         var query = { IMEI: "0123456789123456" };
//         dbo.collection("CREATED").find({query}).toArray(function(err, result) {
//         if (err) throw err;
//         res.json(result);
//         db.close();
//         });
//     });
// });

app.get('data/:boutique', (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("CONNECTED");
        dbo.collection("DATA").find({}).toArray(function(err, result) {
          if (err) throw err;
          res.json(result);
          //console.log(result);
          db.close();
        });
    });
});

