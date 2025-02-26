<?php
include "etherium.php";

use Web3\Contract;

$data = json_decode(file_get_contents('php://input'), true);


$conn_str = 'http://sol-container:8545/';


$abi = '';
$contractAddress = '';
$contract = new Contract($conn_str, $abi);

if (!$contract) {
  echo json_encode(["result" => "Failed to get contract"]);
  return;
}

if ($data) {
  $ipId = $data['searchTerm'];


  $contract->at($contractAddress)->call(
    'getIpById',
    $ipId,
    function ($err, $result) {
      if ($err !== null) {
        echo json_encode(["result" => 'Error ' . $err->getMessage(), "status" => 500]);
        return;
      }

      echo json_encode(["result" => $result, "status" => 200]);
      return;
    }
  );
} else {
  echo json_encode(["result" => "No data received", "status" => 500]);
  return;
}
