<?php
$pageTitle = "Dashboard";
include_once "header.php"
?>
<div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- User IPs Card -->
    <div class="bg-white shadow-lg rounded-lg p-6 flex items-center gap-4" style="cursor: pointer;">
        <svg class="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12h6m-3-3v6m9-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
            <h2 class="text-lg font-semibold">Your IPs</h2>
            <p class="text-gray-600">Manage your intellectual properties.</p>
        </div>
    </div>

    <!-- User Accounts Info Card -->
    <div id="addWallet" class="bg-white shadow-lg rounded-lg p-6 flex items-center gap-4" style="cursor: pointer;">
        <svg class="w-12 h-12 text-green-500" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 0V4a2 2 0 0 1 2-2h14m-4 10h.01">
            </path>
        </svg>
        <div>
            <h2 class="text-lg font-semibold">User Accounts</h2>
            <p class="text-gray-600">Manage your wallets.</p>
        </div>
    </div>

    <!-- Marketplace IPs Info Card -->
    <div class="bg-white shadow-lg rounded-lg p-6 flex items-center gap-4" style="cursor: pointer;">
        <svg class="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" stroke-width="3"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3zM15 15h6v6h-6z" />
        </svg>
        <div>
            <h2 class="text-lg font-semibold">Marketplace IPs</h2>
            <p class="text-gray-600">View and manage your IPs listed in the marketplace.</p>
        </div>
    </div>

    <!-- Update Account Info Card -->
    <div class="bg-white shadow-lg rounded-lg p-6 flex items-center gap-4" style="cursor: pointer;">
        <svg class="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 2a10 10 0 00-3.09.48l-.82-1.14a1 1 0 00-1.44-.18l-1.67 1.24a1 1 0 00-.36 1.3l.8 1.33A9.97 9.97 0 002 12a9.97 9.97 0 00.48 3.09l-1.14.82a1 1 0 00-.18 1.44l1.24 1.67a1 1 0 001.3.36l1.33-.8A9.97 9.97 0 0012 22a9.97 9.97 0 003.09-.48l.82 1.14a1 1 0 001.44.18l1.67-1.24a1 1 0 00.36-1.3l-.8-1.33A9.97 9.97 0 0022 12a9.97 9.97 0 00-.48-3.09l1.14-.82a1 1 0 00.18-1.44l-1.24-1.67a1 1 0 00-1.3-.36l-1.33.8A9.97 9.97 0 0012 2zm0 5a5 5 0 110 10 5 5 0 010-10z">
            </path>
        </svg>
        <div>
            <h2 class="text-lg font-semibold">Update Account</h2>
            <p class="text-gray-600">Modify your account details and settings.</p>
        </div>
    </div>
</div>

<div id="toast-container" class="fixed top-5 right-5 space-y-2 z-50"></div>
<?php include "footer.php" ?>

</html>