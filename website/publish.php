<?php
$pageTitle = "Publish";
include_once "header.php"
?>

<div class="bg-white p-8 rounded-xl shadow-lg w-96 card-container">
    <h2 class="text-lg font-semibold text-gray-700 mb-4">Select Account</h2>
    <select id="accountDropdown" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="" disabled selected>Loading accounts...</option>
    </select>
    <p class="text-sm text-gray-500 mt-2">Selected: <span id="accountAddress" class="font-semibold text-gray-700"></span></p>


    <form class="mt-6" id="ipForm" onsubmit="return publishIP(event)">
        <label class="block text-gray-700 font-medium mb-1" for="ipId">IP ID:</label>
        <input type="text" id="ipId" name="ipId" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">

        <label for="ipTitle" class="block text-gray-700 font-medium mt-3 mb-1">IP Title:</label>
        <input type="text" id="ipTitle" name="ipTitle" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">

        <label for="ipType" class="block text-gray-700 font-medium mt-3 mb-1">IP Type:</label>
        <select id="ipType" name="ipType" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="0">Patent</option>
            <option value="1">Trademark</option>
            <option value="2">Copyright</option>
        </select>

        <button type="submit" class="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Publish
        </button>
    </form>
    <div id="afterPublish" class="hidden mt-6 bg-gray-50 p-4 rounded-lg shadow-inner">
        <h3 class="text-md font-semibold text-gray-700 mb-2">Transaction Details</h3>
        <hr class="mb-3">
        <div class="flex">
            <p class="font-medium text-gray-600">Hash: </p>
            <p id="txnhash" class="ml-2 text-blue-600 font-mono truncate"></p>
        </div>
    </div>
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/web3@1.7.3/dist/web3.min.js"></script>
<script src="./app.js"></script>
<script src="./styles.js"></script>
</body>

</html>