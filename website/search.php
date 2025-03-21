<?php $pageTitle = "Search IP";
include "header.php" ?>
<div class="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md mx-auto card-container">
    <?php include "./components/balancebar.php" ?>
    <?php include "./components/accountsdropdown.php" ?>
    <br />

    <form id="searchForm">
        <label for="searchTerm" class="text-sm font-medium text-gray-600">Search Term:</label>
        <input required type="text" id="searchTerm" name="searchTerm" class="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter search term">
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

    <div id="toast-container" class="fixed top-5 right-5 space-y-2 z-50"></div>
</div>
<?php include "footer.php" ?>

</html>