<?php include "header.php" ?>
<p>Account in use</p>
<p id="accountAddress"></p>
<form id="searchForm" onsubmit="return searchPatent(event)">
    <label for="searchTerm">Search Term:</label><br>
    <input type="text" id="searchTerm" name="searchTerm"><br><br>
    <!-- <input type="submit" value="Search"> -->
    <button type="submit">Search</button>
</form>
</body>
<script src="https://cdn.jsdelivr.net/npm/web3@1.7.3/dist/web3.min.js"></script>
<script src="./app.js"></script>

</html>