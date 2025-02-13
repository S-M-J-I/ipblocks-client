<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($pageTitle) ? $pageTitle : 'IP Blockchain Pro'; ?></title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100">
    <header class="bg-blue-500 text-white p-4">
        <h1 class="text-3xl font-bold">IP Blockchain Pro</h1>
        <nav class="mt-2">
            <ul class="flex space-x-4">
                <li><a href="index.php" class="hover:text-gray-200">Home</a></li>
                <li><a href="publish.php" class="hover:text-gray-200">Publish IP</a></li>
                <li><a href="search.php" class="hover:text-gray-200">Search IP</a></li>
                <li><a href="transfer.php" class="hover:text-gray-200">Transfer IP</a></li>
                <li><a href="login.php" class="hover:text-gray-200">Login</a></li>
            </ul>
        </nav>
    </header>
    <div class="container mx-auto py-8">
