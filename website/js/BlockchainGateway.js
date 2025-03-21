import IPService from "./IPService.js"
import WalletService from "./WalletService.js"
import ContractService from "./ContractService.js"
import RouteHandler from "./RouteHandler.js"
import EventEmitter from "./EventEmitter.js"

/**
 * The BlockchainGateway function to connect to the gateway. 
 * 
 * To initialize:
 * ```js
 * 
 * // Initialize the app
    await BlockchainGateway.init(contractAddress, abi)
 
    // Subscribe to events
    BlockchainGateway.EventEmitter.subscribe('transactionCompleted', (data) => {
        console.log('Transaction completed:', data)
    })

    BlockchainGateway.EventEmitter.subscribe('error', (data) => {
        console.error('Error occurred:', data)
    })
 * ```
 */
const BlockchainGateway = (function () {
    // variables
    let web3
    let contract
    let governmentAddress

    // configs
    const config = {
        contractAddress: null,
        abi: null
    }

    // init the event listeners across the app
    /**
     * Add and link an event listener to a form. After adding a new form,
     * add it here along with the responsible method to handle it.
     * 
     * Ex:
     * ```
     * <form id="form1">...</form>
     * ...
     * forms = {
     *      ....,
     *      'form1': service()
     * }
     * ```
     */
    const initEventListeners = function () {
        // listen for form submissions
        const forms = {
            'ipForm': IPService.publishIP,
            'searchForm': IPService.searchPatent,
            'transferForm': IPService.transferIP,
            'auctionForm': IPService.startAuction,
            'auctionEndForm': IPService.endAuction
        }

        for (const [formId, handler] of Object.entries(forms)) {
            const form = document.getElementById(formId)
            if (form) {
                form.addEventListener('submit', async (event) => {
                    event.preventDefault()
                    await handler()
                })
            }
        }

        // listen to dropdowns or input field selections
        const dropdown = document.getElementById('accountDropdown')
        if (dropdown) {
            dropdown.addEventListener('change', function () {
                WalletService.updateAccountInfo(this.value)
            })
        }

        // transfer ip form input
        const transferIPInput = document.getElementById("ipIdTransfer")
        if (transferIPInput) {
            transferIPInput.addEventListener('change', function () {
                console.log("Called")
                IPService.getIpValue()
            })
        }
    }

    return {
        init: async function (contractAddress, contractAbi) {
            const connected = await WalletService.connect()
            if (!connected) return false

            config.contractAddress = contractAddress
            config.abi = contractAbi

            // init the contract
            ContractService.initialize(contractAddress, contractAbi)

            // Get wallet accounts
            await WalletService.getAccounts()

            // Initialize event listeners
            initEventListeners()

            // Initialize route handler
            RouteHandler.init()

            return true
        },
        EventEmitter
    }
})()

export default BlockchainGateway