<?php $pageTitle = "Search IP";
include "header.php" ?>
<div class="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md mx-auto card-container">
    <h2 class="text-lg font-semibold text-gray-700 mb-4">Select Account</h2>
    <select id="accountDropdown" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4">
        <option value="" disabled selected>Loading accounts...</option>
    </select>
    <p class="text-sm text-gray-500 mt-2">Selected: <span id="accountAddress" class="font-semibold text-gray-700"></span></p>
    <br />

    <form id="searchForm" onsubmit="return searchPatent(event)">
        <label for="searchTerm" class="text-sm font-medium text-gray-600">Search Term:</label>
        <input type="text" id="searchTerm" name="searchTerm" class="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter search term">
        <button type="submit" class="w-full bg-blue-600 text-white font-semibold mt-4 py-2 rounded-lg hover:bg-blue-700">Search</button>
    </form>

    <div id="searchResult" class="mt-6 p-4 bg-gray-100 rounded-lg" style="display: none;">
        <h3 class="text-md font-semibold text-gray-700">Search Result</h3>
        <hr class="my-2">
        <div class="flex items-center space-x-2">
            <p class="font-medium text-gray-600">Title:</p>
            <p id="searchTitle" class="text-gray-800 font-semibold"></p>
        </div>
    </div>
</div>
</body>
<script src="https://cdn.jsdelivr.net/npm/web3@1.7.3/dist/web3.min.js"></script>
<script src="./app.js"></script>
<script src="./styles.js"></script>

</html>