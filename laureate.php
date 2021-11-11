<?php
header('Content-Type: application/json');
$id = intval($_GET['id']);
$mng = new MongoDB\Driver\Manager("mongodb://localhost:27017");

$filter = ["id" => "$id"];
$options = ["projection" => ['_id' => 0]];
$query = new MongoDB\Driver\Query($filter, $options); 
$rows = $mng->executeQuery("nobel.laureates", $query);
$laureate = current($rows->toArray());

echo json_encode($laureate, JSON_PRETTY_PRINT);
?>