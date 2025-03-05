<?php include_once "header.php" ?>
<p>Account in use</p>
<p id="accountAddress"></p>
<br />
<form id="ipForm" onsubmit="return publishIP(event)">
    <label for="ipId">IP ID:</label><br>
    <input type="text" id="ipId" name="ipId"><br><br>
    <label for="ipTitle">IP Title:</label><br>
    <input type="text" id="ipTitle" name="ipTitle"><br><br>
    <label for="ipType">IP Type:</label><br>
    <select id="ipType" name="ipType">
        <option value="0">Patent</option>
        <option value="1">Trademark</option>
        <option value="2">Copyright</option>
    </select><br><br>
    <!-- <input type="submit" value="Publish"> -->
    <button type="submit">Publish</button>
</form>
<script src="https://cdn.jsdelivr.net/npm/web3@1.7.3/dist/web3.min.js"></script>
<script src="./app.js"></script>
</body>

</html>