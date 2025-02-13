<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Publish IP</title>
</head>
<body>
    <h1>Publish IP</h1>
    <nav>
        <ul>
            <li><a href="index.php">Home</a></li>
            <li><a href="publish.php">Publish IP</a></li>
            <li><a href="search.php">Search IP</a></li>
            <li><a href="transfer.php">Transfer IP</a></li>
        </ul>
    </nav>
    <form action="publish_process.php" method="post">
        <label for="ipId">IP ID:</label><br>
        <input type="text" id="ipId" name="ipId"><br><br>
        <label for="ipType">IP Type:</label><br>
        <select id="ipType" name="ipType">
            <option value="patent">Patent</option>
            <option value="trademark">Trademark</option>
            <option value="copyright">Copyright</option>
        </select><br><br>
        <input type="submit" value="Publish">
    </form>
</body>
</html>
