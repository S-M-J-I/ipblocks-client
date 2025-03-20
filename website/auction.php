<?php
$pageTitle = "Auction IP";
include_once "header.php"
?>

<div class="bg-white p-8 rounded-xl shadow-lg w-96 card-container">
    <?php include "./components/balancebar.php" ?>
    <?php include "./components/accountsdropdown.php" ?>

    <form class="mt-6" id="auctionForm" onsubmit="return auctionIP(event)">
        <label class="block text-gray-700 font-medium mb-1" for="ipId">IP ID:</label>
        <input type="text" id="ipId" name="ipId" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>

        <label for="basePrice" class="block text-gray-700 font-medium mt-3 mb-1">Starting Bid Price (min 0.01 ETH):</label>
        <input type="text" id="basePrice" name="basePrice" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>

        <button type="submit" class="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Publish
        </button>
    </form>
    <?php include "./components/transactioninfocard.php" ?>
    <div id="toast-container" class="fixed top-5 right-5 space-y-2 z-50"></div>
</div>
<?php include "footer.php" ?>

</html>