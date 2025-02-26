<?php

require "../vendor/autoload.php";

use PHPSupabase\Service;

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . "..");
$dotenv->load();

$db_url = $_ENV['DB_URL'];
$api_key = $_ENV['API_KEY'];
$service = new Service($api_key, $db_url) or die("Failed to initialize DB connection");
