import UIAdapter from "./UIAdapter.js"
import EventEmitter from "./EventEmitter.js"
import ErrorHandler from "./ErrorHandler.js"
import SECRET from "../db/const.js"
import UserService from "../db/services/UserService.js"

/**
 * The service to handle wallet functions
 */
const WalletService = {
    governmentAddress: null,

    getWalletAddress: function () {
        const addressElement = document.getElementById("accountAddress")

        if (!addressElement || !addressElement.innerText) {
            UIAdapter.showToast("Invalid wallet address", "error")
            return null
        }

        return addressElement.innerText
    },

    connect: async function () {
        if (!window.ethereum) {
            UIAdapter.showToast("Can't connect to blockchain network", "error")
            console.error("Can't connect to blockchain network.")
            return false
        }

        try {
            web3 = new Web3(window.ethereum)
            // web3 = new Web3(SECRET.WEB3_URL)
            return true
        } catch (error) {
            console.error("Failed to initialize Web3:", error)
            UIAdapter.showToast("Failed to initialize Web3", "error")
            return false
        }
    },
    connectSpecificAccount: async function () {
        if (!window.ethereum) {
            UIAdapter.showToast("Can't connect to blockchain network", "error")
            console.error("Can't connect to blockchain network.")
            return
        }

        try {
            const accounts = await window.ethereum.request({
                method: 'wallet_requestPermissions',
                params: [{ eth_accounts: {} }]
            }).then(() => window.ethereum.request({
                method: 'eth_requestAccounts'
            }))

            return accounts[0]
        } catch (error) {
            console.error('User denied account access', error);
        }
    },

    getAccounts: async function () {
        try {
            // const accounts = await web3.eth.getAccounts()
            const accounts = await UserService.getUserWalletsById()
            console.log("User accounts")
            console.log(accounts)

            if (accounts.length === 0) {
                throw new Error("No accounts found")
            }

            UIAdapter.updateDropdown(accounts)
            await this.updateAccountInfo(accounts[0])

            // Set government address (last account)
            this.governmentAddress = SECRET.GOVERNMENT_ADDRESS
            console.log("Government address:", this.governmentAddress)

            // Emit wallet connected event
            EventEmitter.emit('walletConnected', accounts)

            return accounts
        } catch (error) {
            ErrorHandler.handle(error, "User denied account access or error occurred")
            return null
        }
    },

    updateAccountInfo: async function (address) {
        try {
            const balanceWei = await web3.eth.getBalance(address.wallet_address)
            const balanceEth = web3.utils.fromWei(balanceWei, "ether")

            UIAdapter.updateAccountDisplay(address.wallet_address, balanceEth)
            return balanceEth
        } catch (error) {
            try {
                const balanceWei = await web3.eth.getBalance(address)
                const balanceEth = web3.utils.fromWei(balanceWei, "ether")

                UIAdapter.updateAccountDisplay(address, balanceEth)
                return balanceEth
            } catch (error) {
                ErrorHandler.handle(error, "Failed to update account info")
                return null
            }
        }
    },
}

export default WalletService