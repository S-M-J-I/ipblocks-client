<?php
$ipId;
if (isset($_GET['ipId'])) {
    $ipId = $_GET['ipId'];
} else {
    header('Location: ./marketplace.php');
    die();
}
$pageTitle = "Bid for IP";
include_once "header.php";
?>

<div class="bg-white p-8 rounded-xl shadow-lg w-96 card-container">
    <?php include "./components/balancebar.php" ?>
    <?php include "./components/accountsdropdown.php" ?>

    <br />
    <hr />

    <div class="bg-white p-0 mt-5 flex">
        <div class="flex flex-wrap justify-between items-start">
            <div class="w-full sm:w-1/2">
                <h2 class="text-2xl font-bold" id="ipDetails">IP <?php echo $ipId ?></h2>
                <p class="text-gray-600 w-full">Owned by <span class="text-blue-500 font-semibold" id="ownedBy">445908</span></p>
                <p class="text-gray-500 mt-2">4.7K views • 38 favorites</p>

                <div class="mt-4 p-1 bg-gray-200 rounded-lg">
                    <p class="text-gray-600 ml-3">Bid ends in:</p>
                    <p class="text-red-500 text-xl font-bold ml-3">00:40:42</p>
                </div>
            </div>
            <div class="w-full sm:w-1/2 pl-4">
                <div class="">
                    <p class="text-xl font-semibold">Current Bid</p>
                    <p class="text-3xl font-bold text-blue-600" id="ipPrice">12.6432 ETH</p>
                    <p class="text-gray-600" id="baseBidHolder">$25,575.67</p>
                </div>

                <div class="flex mt-4">
                    <input type="number" placeholder="Enter bid" class="p-4 border border-gray-300 rounded-l-md focus:outline-none">
                    <button class="bg-blue-600 text-white px-5 py-3 font-semibold rounded-r-md hover:bg-blue-700">Bid</button>
                </div>
            </div>
        </div>
    </div>

    <!-- <form class="mt-6" id="auctionForm" onsubmit="return auctionIP(event)">
        <label class="block text-gray-700 font-medium mb-1" for="ipId">IP ID:</label>
        <input type="text" id="ipId" name="ipId" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>

        <label for="basePrice" class="block text-gray-700 font-medium mt-3 mb-1">Starting Bid Price (min 0.01 ETH):</label>
        <input type="text" id="basePrice" name="basePrice" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>

        <button type="submit" class="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Publish
        </button>
    </form> -->
    <?php include "./components/transactioninfocard.php" ?>
    <div id="toast-container" class="fixed top-5 right-5 space-y-2 z-50"></div>
</div>
<?php include "footer.php" ?>
<?php echo "<script>getDetailsById(" . $ipId . ")</script>" ?>

</html>