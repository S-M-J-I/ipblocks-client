<?php 
$pageTitle = "Admin Dashboard";
include 'header.php';

session_start();

if (!isset($_SESSION['username']) || $_SESSION['role'] != 'admin') {
    header("Location: login.php");
    exit();
}
?>
    <h1 class="text-2xl font-semibold mb-4">Welcome, Admin!</h1>
    <p class="text-gray-700">This is the admin dashboard.</p>
    <a href="logout.php" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Logout</a>
<?php include 'footer.php'; ?>
