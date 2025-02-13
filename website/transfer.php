<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transfer IP</title>
</head>
<body>
    <h1>Transfer IP</h1>
    <nav>
        <ul>
            <li><a href="index.php">Home</a></li>
            <li><a href="publish.php">Publish IP</a></li>
            <li><a href="search.php">Search IP</a></li>
            <li><a href="transfer.php">Transfer IP</a></li>
        </ul>
    </nav>
    <form action="transfer_process.php" method="post">
        <label for="ipId">IP ID:</label><br>
        <input type="text" id="ipId" name="ipId"><br><br>
        <label for="newOwner">New Owner:</label><br>
        <input type="text" id="newOwner" name="newOwner"><br><br>
        <input type="submit" value="Transfer">
    </form>
</body>
</html>
