import MarketplaceAddressRepository from "../db/repositories/MarketplaceAddressRepository.js"

/**
 * The function to handle all UI elements.
 * 
 * **ONLY** keep the UI changing code here and nothing else!
 */
const UIAdapter = (function () {
    return {
        /**
         * Update/switch between selected accounts 
         * @param {String} address 
         * @param {String} balance 
         */
        updateAccountDisplay: function (address, balance) {
            const addressElement = document.getElementById("accountAddress")
            const balanceElement = document.getElementById("accountBalance")

            if (addressElement) {
                addressElement.innerText = address
            }

            if (balanceElement && balance) {
                balanceElement.innerText = `${parseFloat(balance).toFixed(4)} ETH`
            }
        },

        /**
         * Create and update the dropdown
         * @param {} accounts 
         * @returns 
         */
        updateDropdown: function (accounts) {
            const dropdown = document.getElementById("accountDropdown")
            if (!dropdown) return

            dropdown.innerHTML = ""

            accounts.forEach(account => {
                const option = document.createElement("option")
                option.value = account.wallet_address
                option.textContent = account.wallet_address
                dropdown.appendChild(option)
            })
        },

        /**
         * Show the transaction hash component after transactions
         * @param {*} transaction
         */
        showTransactionResult: function (transaction) {
            const resultElement = document.getElementById("afterPublish")
            const hashElement = document.getElementById("txnhash")

            if (resultElement) {
                resultElement.style.display = "block"
            }

            if (hashElement) {
                hashElement.innerText = transaction.transactionHash
            }
        },

        /**
         * Show IP details in the Bid singular IP page 
         * @param {*} ipId 
         * @param {*} title 
         * @param {*} priceInEth 
         */
        showIPDetails: async function (ipId, title, priceInEth) {
            const { data, error } = await MarketplaceAddressRepository.getBidPriceAndOwner(parseInt(ipId))
            const bidPrice = data['bid_price']
            const username = data['users']['username']

            const detailsElement = document.getElementById("ipDetails")
            const bidElement = document.getElementById("baseBidHolder")
            const priceElement = document.getElementById("ipPrice")
            const ownedByElement = document.getElementById("ownedBy")

            if (detailsElement) {
                detailsElement.innerText = `IP #${ipId}: ${title}`
            }

            if (bidElement) {
                bidElement.innerText = `Base bid: ${priceInEth} ETH`
            }

            if (priceElement) {
                priceElement.innerText = `${bidPrice} ETH`
            }

            if (ownedByElement) {
                ownedByElement.innerText = username
            }
        },

        /**
         * Display the transfer amout and show buyer address bar after selecting IP
         * @param {*} price 
         */
        displayTransferAmount: function (price) {
            console.log("Called")
            const priceInEth = web3.utils.fromWei(price, 'ether')
            document.getElementById("ipPrice").textContent = `${parseFloat(priceInEth).toFixed(2)} ETH`
            document.getElementById("tranferAddrSection").style.display = "block"
        },

        /**
         * Display the marketplace cards
         * @param {*} ids 
         * @param {*} titles 
         * @param {*} prices 
         * @returns 
         */
        displayMarketplace: function (ids, titles, prices) {
            const marketplace = document.getElementById("marketplace")
            if (!marketplace) return

            marketplace.innerHTML = ""

            if (ids.length === 0) {
                const message = document.createElement("p")
                message.className = "text-gray-500 text-center my-8"
                message.innerText = "No IPs currently in marketplace"
                marketplace.appendChild(message)
                return
            }

            for (let i = 0; i < ids.length; i++) {
                const card = document.createElement("div")
                card.className = "bg-white shadow-md rounded-lg p-4"
                const priceInEth = web3.utils.fromWei(prices[i], 'ether')

                card.innerHTML = `
                    <h3 class="text-xl font-semibold text-gray-800">${titles[i]}</h3>
                    <p class="text-gray-500 text-sm mt-1">ID: ${ids[i]}</p>
                    <p class="text-blue-600 font-bold mt-2">${priceInEth} ETH</p>
                    <br/>
                    <a href="./ip_bid.php?ipId=${ids[i]}" target="blank" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Bid Now</a>
                `

                marketplace.appendChild(card)
            }
        },

        /**
         * Show toast message
         * @param {*} message 
         * @param {*} type 
         */
        showToast: function (message, type = "success") {
            const toastContainer = document.getElementById("toast-container")

            const toast = document.createElement("div")
            toast.className = `px-4 py-2 rounded-lg shadow-md text-white text-sm transition-opacity duration-300 ease-in-out ${type === "success" ? "bg-green-500" : "bg-red-500"
                }`
            toast.innerText = message

            toastContainer.appendChild(toast)

            setTimeout(() => {
                toast.classList.add("opacity-0")
                setTimeout(() => toast.remove(), 300)
            }, 3000)
        }
    }
})()

export default UIAdapter