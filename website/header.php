<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($pageTitle) ? $pageTitle : 'IPBlockchainPro'; ?></title>
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link href="./styles/styles.css" rel="stylesheet">
</head>

<body class="bg-gray-100">

    <nav class="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 class="text-2xl font-bold">IPBlockchainPro</h1>
        <div class="space-x-6">
            <a href="index.php" class="hover:underline">Home</a>
            <a href="marketplace.php" class="hover:underline">Marketplace</a>
            <a href="publish.php" class="hover:underline">Publish IP</a>
            <a href="search.php" class="hover:underline">Search IP</a>
            <a href="auction.php" class="hover:underline">Auction IP</a>
            <a href="transfer.php" class="hover:underline">Transfer IP</a>
            <a id="loginLink" href="login.php" class="hover:underline">Login</a>
            <a id="dashboardLink" style="display: none;" href="dashboard.php" class="hover:underline">Dashboard</a>
        </div>
    </nav>

    <div class="flex justify-center items-center mt-9">