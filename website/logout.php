<?php 
$pageTitle = "Logout";
include 'header.php';

session_start();
session_destroy();
header("Location: index.php");
exit();

include 'footer.php'; 
?>
