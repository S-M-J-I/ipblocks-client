<?php
$pageTitle = "Add Wallet";
include_once "header.php"
?>

<div class="bg-white p-8 rounded-xl shadow-lg w-96 card-container">
    <?php include "./components/balancebar.php" ?>
    <?php include "./components/accountsdropdown.php" ?>

    <form id="addWalletForm" class="mt-6">
        <label class="block text-gray-700 font-medium mb-1" for="walletAddress">Wallet Address:</label>
        <input type="text" id="walletAddress" name="walletAddress" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">

        <button type="submit" class="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Connect Wallet
        </button>
    </form>
</div>

<div id="toast-container" class="fixed top-5 right-5 space-y-2 z-50"></div>
<?php include "footer.php" ?>

</html>