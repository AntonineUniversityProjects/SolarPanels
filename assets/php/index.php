<?php

require 'vendor/autoload.php'; // include Composer's autoloader

// connect to the MongoDB server
$mongoClient = new MongoDB\Client("mongodb+srv://roygebrayel:313@solarpanels-login.oiy6gcx.mongodb.net/?retryWrites=true&w=majority");

// select the database
$mongoDB = $mongoClient->solarpanels;

// select the collection
$collection = $mongoDB->users;
// insert a new document
$document = array("name" => "John", "age" => 30);
$collection->insertOne($document);

var_dump($collection->getInsertedId);


?>