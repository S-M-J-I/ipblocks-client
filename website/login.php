<?php $pageTitle = "Login";
include 'header.php'; ?>
<div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md fade-in">
    <h2 class="text-2xl font-semibold text-gray-700 text-center mb-6">Login</h2>

    <form action="login_process.php" method="post" class="space-y-4">
        <div>
            <label for="username" class="block text-gray-700 text-sm font-bold">Username/Email:</label>
            <input type="text" id="username" name="username" class="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">
        </div>

        <div>
            <label for="password" class="block text-gray-700 text-sm font-bold">Password:</label>
            <input type="password" id="password" name="password" class="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">
        </div>

        <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Login
        </button>
    </form>

    <p class="text-center text-gray-600 mt-4">
        Don't have an account? <br />
        <a href="admin_register.php" class="text-blue-500 hover:underline">Register as Admin</a> |
        <a href="owner_register.php" class="text-blue-500 hover:underline">Register as Patent Owner</a>
    </p>
</div>
<?php include 'footer.php'; ?>