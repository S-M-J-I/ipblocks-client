<?php
require '../vendor/autoload.php';

// Using hello world contract

use Web3\Contract;

$contractAddress = "";
$abi = '';
$contract = new Contract('http://0.0.0.0:8545', $abi);
// 


$contract->at($contractAddress)->call("getWord", function ($err, $result) {
    if ($err !== null) {
        echo 'Error: ' . $err->getMessage();
        return;
    }
    echo 'Word from contract: ' . $result[0] . PHP_EOL;
});
