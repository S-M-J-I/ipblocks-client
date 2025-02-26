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
  $ipId = $data['ipId'];
  $ipTitle = $data['ipTitle'];
  $ipType = $data['ipType'];
  $initialFilingDate = time();
  $publicationDate = time();
  $originalExpirationDate = time() + (2 * 365 * 24 * 60 * 60);
  $inventors = $data['inventors'];
  $inventors = json_decode($inventors, true);

  $fromAddress = $inventors[0];

  // echo json_encode(["result" => $fromAddress]);
  // return;

  $contract->at($contractAddress)->call(
    'publishIP',
    $ipId,
    $ipTitle,
    $ipType,
    $initialFilingDate,
    $publicationDate,
    $originalExpirationDate,
    $inventors,
    function ($err, $result) {
      if ($err !== null) {
        echo json_encode(["result" => 'Error ' . $err->getMessage()]);
        return;
      }
    }
  );
  echo json_encode(["result" => "Success"]);
  return;
} else {
  echo json_encode(["result" => "No data received"]);
  return;
}
