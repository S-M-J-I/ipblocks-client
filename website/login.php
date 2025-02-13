<?php $pageTitle = "Login"; include 'header.php'; ?>
    <form action="login_process.php" method="post" class="max-w-md mx-auto">
        <div class="mb-4">
            <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username/Email:</label>
            <input type="text" id="username" name="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-6">
            <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
            <input type="password" id="password" name="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login
        </button>
    </form>
    <p class="text-center mt-4">
        Don't have an account?
        <a href="admin_register.php" class="text-blue-500 hover:underline">Register as Admin</a> |
        <a href="owner_register.php" class="text-blue-500 hover:underline">Register as Patent Owner</a>
    </p>
<?php include 'footer.php'; ?>
