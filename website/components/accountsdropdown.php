<div class="flex items-center space-x-4">
    <select id="accountDropdown" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="" disabled selected>Loading accounts...</option>
    </select>
    <button id="connectWallet" class="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" title="Connect to MetaMask">
        <img src="./images/metamask-logo.png" alt="MetaMask" class="w-6 h-6 mr-2">
    </button>
</div>
<p class="text-sm text-gray-500 mt-2">Selected: <span id="accountAddress" class="font-semibold text-gray-700"></span></p>