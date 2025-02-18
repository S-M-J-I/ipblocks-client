<?php

require "../vendor/autoload.php";

use Supabase\CreateClient;

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . "..");
$dotenv->load();

$db_url = $_ENV['DB_URL'];
$api_key = $_ENV['API_KEY'];
$client = new CreateClient($db_url, $api_key) or die("Failed to initialize DB connection");
