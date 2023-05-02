<?php
require_once "vendor/autoload.php";
$client = new MongoDB\Driver\Manager('');
$db = $client->test;
$collection = $db->users;
$result = $collection->find();
foreach ($result as $document) {
    var_dump($document);
}
