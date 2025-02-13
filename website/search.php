<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search IP</title>
</head>
<body>
    <h1>Search IP</h1>
    <nav>
        <ul>
            <li><a href="index.php">Home</a></li>
            <li><a href="publish.php">Publish IP</a></li>
            <li><a href="search.php">Search IP</a></li>
            <li><a href="transfer.php">Transfer IP</a></li>
        </ul>
    </nav>
    <form action="search_process.php" method="get">
        <label for="searchTerm">Search Term:</label><br>
        <input type="text" id="searchTerm" name="searchTerm"><br><br>
        <input type="submit" value="Search">
    </form>
</body>
</html>
