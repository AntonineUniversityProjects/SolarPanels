const MongoClient = require('mongodb').MongoClient;
const keys = require('./config/keys');
const app = require('.app');
const client = new MongoClient(keys.mongodb.dbauth, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    if (err) {
        console.log("Error connecting to database:", err);
        return;
    }

    console.log("Database connected!");
});


const collection = client.db("solarpanels-login").collection("users");

const document = { name: app.name, email: app.email };



// Insert the document into the collection



collection.insertOne(document, function (err, res) {
    if (err) {
        console.log("Error inserting document:", err);
        return;
    }

    console.log("Document inserted successfully");


    client.close();
    


});
