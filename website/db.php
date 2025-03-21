<?php

require "../vendor/autoload.php";
include './functions/crypt.php';

use PHPSupabase\Service;
use Supabase\Util\EnvSetup;
use Supabase\CreateClient;
use Supabase\Postgrest\PostgrestClient;

$keys = EnvSetup::env(__DIR__ . "/..");
$reference_id = $keys['REFERENCE_ID'];
$api_key = $keys['API_KEY'];
$opts = [];
$client = new PostgrestClient($reference_id, $api_key, $opts) or die("Failed to get DB");
if ($client) {
    echo "DB is up!";
    $client->from('users')->insert(['id' => 1, 'username' => 'jimmy', 'password' => 'bulk'])->select()->execute();
    // $output = $response;
    // print_r($output);
}
