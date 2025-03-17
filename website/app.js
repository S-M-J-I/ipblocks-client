const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "ipId",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newExpirationDate",
                "type": "uint256"
            }
        ],
        "name": "IPExtended",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "ipId",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "enum IPBlockchainProContract.IPType",
                "name": "ipType",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "IPPublished",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "ipId",
                "type": "string"
            }
        ],
        "name": "IPRevoked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "ipId",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "govtFee",
                "type": "uint256"
            }
        ],
        "name": "IPTransferred",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "IPs",
        "outputs": [
            {
                "internalType": "enum IPBlockchainProContract.IPType",
                "name": "ipType",
                "type": "uint8"
            },
            {
                "internalType": "string",
                "name": "id",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "title",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "initialFilingDate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "publicationDate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "lastRenewalDate",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "timesRenewed",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "originalExpirationDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "adjustedExpirationDate",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct IPBlockchainProContract.IPMetaData",
                "name": "metadata",
                "type": "tuple"
            },
            {
                "internalType": "bool",
                "name": "isRevoked",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "isAuction",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "admin",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "modifications",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "dateRenewed",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "dateTransferred",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "dateRevoked",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "userAddresses",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "userIPs",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "MostRecentGasFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "ipId",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "title",
                "type": "string"
            },
            {
                "internalType": "enum IPBlockchainProContract.IPType",
                "name": "ipType",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "initialFilingDate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "publicationDate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "originalExpirationDate",
                "type": "uint256"
            },
            {
                "internalType": "address[]",
                "name": "_inventors",
                "type": "address[]"
            }
        ],
        "name": "publishIP",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "ipId",
                "type": "string"
            }
        ],
        "name": "getIpById",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "searchTerm",
                "type": "string"
            }
        ],
        "name": "searchIP",
        "outputs": [
            {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
            }
        ],
        "stateMutability": "pure",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "ipId",
                "type": "string"
            }
        ],
        "name": "verifyIP",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "ipId",
                "type": "string"
            },
            {
                "internalType": "address payable",
                "name": "governmentAddress",
                "type": "address"
            }
        ],
        "name": "transferIP",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "ipId",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "basePrice",
                "type": "uint256"
            }
        ],
        "name": "startAuctionIP",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "ipId",
                "type": "string"
            }
        ],
        "name": "endAuctionIP",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "ipId",
                "type": "string"
            }
        ],
        "name": "extendIP",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "ipId",
                "type": "string"
            }
        ],
        "name": "revokeIP",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "ipId",
                "type": "string"
            }
        ],
        "name": "getIPOwner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "addressSet",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "ipId",
                "type": "string"
            }
        ],
        "name": "getIpPrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "getAuctionedIPs",
        "outputs": [
            {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
            },
            {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    }
]
const contractAddress = ''
const web3 = new Web3('')
const governmentAddress = ''

// TODO: refactor this entire codebase later on after paper writing!!!!!!!!!!


async function getWalletAddresses() {
    if (window.ethereum) {
        try {
            const accounts = await web3.eth.getAccounts()

            if (accounts.length === 0) {
                console.error("No accounts found.")
                return
            }
            const dropdown = document.getElementById("accountDropdown")
            dropdown.innerHTML = ""

            for (const account of accounts) {
                const option = document.createElement("option")
                option.value = account
                option.textContent = account
                dropdown.appendChild(option)
            }

            document.getElementById("accountAddress").innerText = accounts[0]
            const balanceWei = await web3.eth.getBalance(accounts[0])
            const balanceEth = web3.utils.fromWei(balanceWei, "ether")
            document.getElementById("accountBalance").innerText = `${parseFloat(balanceEth).toFixed(4)} ETH`

        } catch (error) {
            console.error("User denied account access or error occurred:", error)
            showToast("User denied account access or error occurred:", "error")
            return null
        }
    } else {
        console.error("Can't connect to blockchain network.")
        showToast("Can't connect to blockchain network.", "error")
        return null
    }
}

async function publishIP(event) {
    event.preventDefault()

    const walletAddress = document.getElementById("accountAddress").innerText
    if (walletAddress) {
        try {
            const form = document.getElementById('ipForm')
            const formData = new FormData(form)
            const inventors = [walletAddress]
            formData.append('inventors', JSON.stringify(inventors))

            const data = {}
            formData.forEach((value, key) => {
                if (key === "ipType") {
                    data[key] = parseInt(value)
                } else {
                    data[key] = value
                }
            })
            console.log(data)

            const currentTime = Math.floor(Date.now() / 1000)
            const initialFilingDate = currentTime
            const publicationDate = currentTime
            const originalExpirationDate = currentTime + (2 * 365 * 24 * 60 * 60) // assume expiry two years

            const contract = new web3.eth.Contract(abi, contractAddress)

            // console.log(walletAddress, fromAddress, (walletAddress === fromAddress))

            const gasEstimate = await contract.methods.publishIP(
                data.ipId,
                data.ipTitle,
                data.ipType,
                initialFilingDate,
                publicationDate,
                originalExpirationDate,
                inventors
            ).estimateGas({ from: walletAddress })

            const gasLimit = Math.floor(gasEstimate * 1.2)
            console.log(`estimated gas: ${gasEstimate}, gas limit: ${gasLimit}`)

            const transaction = await contract.methods.publishIP(
                data.ipId,
                data.ipTitle,
                data.ipType,
                initialFilingDate,
                publicationDate,
                originalExpirationDate,
                inventors
            ).send({
                from: walletAddress,
                gas: gasLimit
            })

            console.log('IP Published Successfully', transaction)
            showToast(`IP Published Successfully`, 'success')
            document.getElementById("afterPublish").style.display = "block"
            document.getElementById("txnhash").innerText = transaction.transactionHash

            const balanceWei = await web3.eth.getBalance(walletAddress)
            const balanceEth = web3.utils.fromWei(balanceWei, "ether")
            document.getElementById("accountBalance").innerText = `${parseFloat(balanceEth).toFixed(4)} ETH`

        } catch (err) {
            console.error('IP Publication Error:', err)

            let errorMessage = 'IP Publication failed'
            if (err.message.includes('no accounts')) {
                errorMessage = 'Unable to find Ethereum accounts'
            } else if (err.message.includes('invalid address')) {
                errorMessage = 'Invalid Ethereum address provided'
            } else if (err.message.includes('insufficient funds')) {
                errorMessage = 'Insufficient funds for transaction'
            } else if (err.message.includes('contract method')) {
                errorMessage = 'Error calling contract method'
            }

            showToast(errorMessage, 'error')
        }
    } else {
        const errorMessage = `Wallet address ${walletAddress} not a valid wallet!`
        showToast(errorMessage, 'error')
    }
}


async function searchPatent(event) {
    event.preventDefault()

    const walletAddress = document.getElementById("accountAddress").innerText
    if (walletAddress) {
        try {
            const searchTermInput = document.getElementById('searchTerm')
            const searchTerm = searchTermInput.value
            console.log(searchTerm)

            const contract = new web3.eth.Contract(abi, contractAddress)

            const result = await contract.methods.getIpById(searchTerm).call({
                from: walletAddress
            })

            if (result) {
                console.log('Search Result:', result)
                showToast(`IP Search Successful`, 'success')

                document.getElementById("searchResult").style.display = "block"
                document.getElementById("searchTitle").innerText = result

            } else {
                console.warn('No IP found with the given ID')
                showToast('No IP found with the given ID', 'error')
            }
        } catch (err) {
            console.error('Search Process Error:', err)

            let errorMessage = 'Search failed'
            if (err.message.includes('Web3')) {
                errorMessage = 'Web3 not loaded'
            } else if (err.message.includes('User rejected')) {
                errorMessage = 'Wallet connection was cancelled by user'
            } else if (err.message.includes('contract method')) {
                errorMessage = 'Error calling contract method'
            }

            showToast(errorMessage, 'error')
        }
    } else {
        const errorMessage = `Wallet address ${walletAddress} not a valid wallet!`
        showToast(errorMessage, 'error')
    }
}

async function transferIP(event) {
    event.preventDefault()

    const walletAddress = document.getElementById("accountAddress").innerText
    if (walletAddress) {
        try {
            const form = document.getElementById('transferForm')
            const formData = new FormData(form)

            const data = {}
            formData.forEach((value, key) => {
                if (key === "ipId") {
                    data[key] = value
                } else {
                    data[key] = value
                }
            })
            console.log(data)

            const contract = new web3.eth.Contract(abi, contractAddress)

            // console.log(walletAddress, fromAddress, (walletAddress === fromAddress))
            const buyerWallet = data['newOwner']

            // this is in ether
            const price = await contract.methods.getIpPrice(data.ipId).call({
                from: buyerWallet
            })

            const priceInWei = web3.utils.toWei(price, 'ether');
            console.log("Price in wei:", priceInWei)

            const gasEstimate = await contract.methods.transferIP(
                data.ipId,
                governmentAddress,
            ).estimateGas({ from: buyerWallet, value: priceInWei })

            console.log("Gas", gasEstimate)

            const gasLimit = Math.floor(gasEstimate * 1.2)
            console.log(`estimated gas: ${gasEstimate}, gas limit: ${gasLimit}`)

            const transaction = await contract.methods.transferIP(
                data.ipId,
                governmentAddress
            ).send({
                from: buyerWallet,
                value: priceInWei,
                gas: gasLimit,
            })

            console.log('IP Published Successfully', transaction)
            showToast(`IP Published Successfully!\nTransaction Hash: ${transaction.transactionHash}`, 'success')
            document.getElementById("afterPublish").style.display = "block"
            document.getElementById("txnhash").innerText = transaction.transactionHash

            const balanceWei = await web3.eth.getBalance(walletAddress)
            const balanceEth = web3.utils.fromWei(balanceWei, "ether")
            document.getElementById("accountBalance").innerText = `${parseFloat(balanceEth).toFixed(4)} ETH`

        } catch (err) {
            console.error('IP Publication Error:', err)

            let errorMessage = 'IP Publication failed'
            if (err.message.includes('no accounts')) {
                errorMessage = 'Unable to find Ethereum accounts'
            } else if (err.message.includes('invalid address')) {
                errorMessage = 'Invalid Ethereum address provided'
            } else if (err.message.includes('insufficient funds')) {
                errorMessage = 'Insufficient funds for transaction'
            } else if (err.message.includes('contract method')) {
                errorMessage = 'Error calling contract method'
            }

            showToast(errorMessage, 'error')
        }
    } else {
        const errorMessage = `Wallet address ${walletAddress} not a valid wallet!`
        showToast(errorMessage, 'error')
    }
}

async function auctionIP(event) {
    event.preventDefault()

    const walletAddress = document.getElementById("accountAddress")
    if (walletAddress) {
        try {
            const contract = new web3.eth.Contract(abi, contractAddress)

            const form = document.getElementById('auctionForm')
            const formData = new FormData(form)

            const data = {}
            formData.forEach((value, key) => {
                if (key === "ipId") {
                    data[key] = value
                } else {
                    data[key] = value
                }
            })
            console.log(data)

            const price = data.basePrice
            const priceInWei = web3.utils.toWei(price, 'ether');
            console.log("Price in wei:", priceInWei)

            const gasEstimate = await contract.methods.startAuctionIP(data.ipId, data.basePrice).estimateGas({ from: walletAddress })

            const transaction = await contract.methods.startAuctionIP(
                data.ipId,
                data.basePrice
            ).send({
                from: walletAddress,
                gas: gasEstimate
            })

            console.log('IP Published Successfully', transaction)
            showToast(`IP Published Successfully!\nTransaction Hash: ${transaction.transactionHash}`, 'success')
            document.getElementById("afterPublish").style.display = "block"
            document.getElementById("txnhash").innerText = transaction.transactionHash

        } catch (error) {
            console.error('IP Publication Error:', err)

            let errorMessage = 'IP Publication failed'
            if (err.message.includes('no accounts')) {
                errorMessage = 'Unable to find Ethereum accounts'
            } else if (err.message.includes('invalid address')) {
                errorMessage = 'Invalid Ethereum address provided'
            } else if (err.message.includes('insufficient funds')) {
                errorMessage = 'Insufficient funds for transaction'
            } else if (err.message.includes('contract method')) {
                errorMessage = 'Error calling contract method'
            }

            showToast(errorMessage, 'error')
        }
    } else {
        const errorMessage = `Wallet address ${walletAddress} not a valid wallet!`
        showToast(errorMessage, 'error')
    }
}


async function stopAuctionIP(event) {
    event.preventDefault()

    const walletAddress = document.getElementById("accountAddress")
    if (walletAddress) {
        try {
            const contract = new web3.eth.Contract(abi, contractAddress)

            const form = document.getElementById('auctionForm')
            const formData = new FormData(form)

            const data = {}
            formData.forEach((value, key) => {
                if (key === "ipId") {
                    data[key] = value
                } else {
                    data[key] = value
                }
            })
            console.log(data)

            const price = data.basePrice
            const priceInWei = web3.utils.toWei(price, 'ether');
            console.log("Price in wei:", priceInWei)

            const gasEstimate = await contract.methods.endAuctionIP(data.ipId).estimateGas({ from: walletAddress })

            const transaction = await contract.methods.endAuctionIP(
                data.ipId
            ).send({
                from: walletAddress,
                gas: gasEstimate
            })

            console.log('IP Published Successfully', transaction)
            showToast(`IP Published Successfully!\nTransaction Hash: ${transaction.transactionHash}`, 'success')
            document.getElementById("afterPublish").style.display = "block"
            document.getElementById("txnhash").innerText = transaction.transactionHash

        } catch (error) {
            console.error('IP Publication Error:', err)

            let errorMessage = 'IP Publication failed'
            if (err.message.includes('no accounts')) {
                errorMessage = 'Unable to find Ethereum accounts'
            } else if (err.message.includes('invalid address')) {
                errorMessage = 'Invalid Ethereum address provided'
            } else if (err.message.includes('insufficient funds')) {
                errorMessage = 'Insufficient funds for transaction'
            } else if (err.message.includes('contract method')) {
                errorMessage = 'Error calling contract method'
            }

            showToast(errorMessage, 'error')
        }
    } else {
        const errorMessage = `Wallet address ${walletAddress} not a valid wallet!`
        showToast(errorMessage, 'error')
    }
}

async function getAllAuctionIPs() {
    const walletAddress = document.getElementById("accountAddress").innerText
    if (walletAddress) {
        try {
            const searchTermInput = document.getElementById('searchTerm')
            const searchTerm = searchTermInput.value
            console.log(searchTerm)

            const contract = new web3.eth.Contract(abi, contractAddress)

            const auctionedIPs = await contract.methods.getAuctionedIPs().call({
                from: walletAddress
            })

            if (auctionedIPs) {
                console.log('Search Result:', auctionedIPs)
                showToast(`Retrieved all IPs`, 'success')
            } else {
                console.warn('No IPs currently in marketplace')
                showToast('No IPs currently in marketplace', 'error')
            }
        } catch (err) {
            console.error('Search Process Error:', err)

            let errorMessage = 'Search failed'
            if (err.message.includes('Web3')) {
                errorMessage = 'Web3 not loaded'
            } else if (err.message.includes('User rejected')) {
                errorMessage = 'Wallet connection was cancelled by user'
            } else if (err.message.includes('contract method')) {
                errorMessage = 'Error calling contract method'
            }

            showToast(errorMessage, 'error')
        }
    } else {
        const errorMessage = `Wallet address ${walletAddress} not a valid wallet!`
        showToast(errorMessage, 'error')
    }
}

window.onload = getWalletAddresses()