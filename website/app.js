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
            },
            {
                "internalType": "bool",
                "name": "isRevoked",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "modificationCount",
                "type": "uint256"
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
                "name": "ipId",
                "type": "string"
            },
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
        "name": "addModificationFiling",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
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
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferIP",
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
    }
]
const contractAddress = '0x8a47EDc1C10934aE7e5B303FE5fB07977360B637'
const web3 = new Web3('http://192.168.0.246:8545')

async function getWalletAddress() {
    if (window.ethereum) {
        try {
            const accounts = await web3.eth.getAccounts()
            const fromAddress = accounts[0]
            document.getElementById("accountAddress").innerText = fromAddress
            return fromAddress // Return the first account
        } catch (error) {
            console.error("User denied account access or error occurred:", error)
            return null
        }
    } else {
        console.error("Can't connect to blockchain network.")
        return null
    }
}

async function publishIP(event) {
    event.preventDefault()

    const walletAddress = await getWalletAddress()
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
            alert(`IP Published Successfully!\nTransaction Hash: ${transaction.transactionHash}`)
            document.getElementById("afterPublish").style.display = "block"
            document.getElementById("txnhash").innerText = transaction.transactionHash

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

            alert(errorMessage)
        }
    }
}


async function searchPatent(event) {
    event.preventDefault()

    const walletAddress = await getWalletAddress()
    if (walletAddress) {
        try {
            const searchTermInput = document.getElementById('searchTerm')
            const searchTerm = searchTermInput.value;
            console.log(searchTerm)

            const contract = new web3.eth.Contract(abi, contractAddress)

            const result = await contract.methods.getIpById(searchTerm).call({
                from: walletAddress
            })

            if (result) {
                console.log('Search Result:', result)
                alert(`Success Search: ${result}`)

                document.getElementById("searchResult").style.display = "block";
                document.getElementById("searchTitle").innerText = result

            } else {
                console.warn('No IP found with the given ID')
                alert('No IP found with the given ID')
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

            alert(errorMessage)
        }
    }
}

getWalletAddress()