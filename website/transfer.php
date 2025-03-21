<?php $pageTitle = "Transfer IP";
include "header.php";
?>
<div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 class="text-2xl font-semibold text-gray-700 text-center mb-6">Transfer IP</h2>
    <?php include "./components/balancebar.php" ?>
    <?php include "./components/accountsdropdown.php" ?>

    <form id="transferForm" class="space-y-4">
        <div>
            <label for="ipId" class="block text-gray-700 text-sm font-bold">IP ID:</label>
            <input required type="text" id="ipIdTransfer" name="ipId" class="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">
        </div>

        <div class="flex items-center justify-between bg-white p-1">
            <h4 class="text-md font-semibold text-gray-700">IP Price</h4>
            <div class="flex items-center space-x-2">
                <h4 class="text-md font-semibold text-blue-600" id="ipPrice">0.00 ETH</h4>
            </div>
        </div>

        <div id="tranferAddrSection" class="hidden">
            <label for="newOwner" class="block text-gray-700 text-sm font-bold">Transfer To:</label>
            <input required type="text" id="newOwner" name="newOwner" class="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">
        </div>

        <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Transfer IP
        </button>
    </form>
    <?php include "./components/transactioninfocard.php" ?>

    <div id="toast-container" class="fixed top-5 right-5 space-y-2 z-50"></div>
</div>
<?php include "footer.php" ?>

<!-- // TODO: for transferIP function, we need to call it in reverse. i.e. implement front-end logic in such a way that the buyer calls the contract, not the seller. -->
<!-- // TODO: maybe keep a button on the buyers side to accept the IP? then trigger the payment -->