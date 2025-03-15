<?php
$pageTitle = "Publish";
include_once "header.php"
?>

<div class="bg-white p-8 rounded-xl shadow-lg w-96 card-container">
    <?php include "./components/balancebar.php" ?>
    <?php include "./components/accountsdropdown.php" ?>

    <form class="mt-6" id="ipForm" onsubmit="return publishIP(event)">
        <label class="block text-gray-700 font-medium mb-1" for="ipId">IP ID:</label>
        <input type="text" id="ipId" name="ipId" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>

        <label for="ipTitle" class="block text-gray-700 font-medium mt-3 mb-1">IP Title:</label>
        <input type="text" id="ipTitle" name="ipTitle" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>

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
    <?php include "./components/transactioninfocard.php" ?>
    <div id="toast-container" class="fixed top-5 right-5 space-y-2 z-50"></div>
</div>
</div>
<script src="./toast.js"></script>
<script src="https://cdn.jsdelivr.net/npm/web3@1.7.3/dist/web3.min.js"></script>
<script src="./app.js"></script>
<script src="./styles.js"></script>
</body>

</html>