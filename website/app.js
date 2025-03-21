import BlockchainGateway from "./js/BlockchainGateway.js"

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
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "IPAuctionEnded",
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
                "internalType": "uint256",
                "name": "basePrice",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "IPAuctionStarted",
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
                "internalType": "string",
                "name": "id",
                "type": "string"
            },
            {
                "internalType": "enum IPBlockchainProContract.IPType",
                "name": "ipType",
                "type": "uint8"
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
            }
        ],
        "name": "ipOwners",
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
            }
        ],
        "name": "getIpDetailsById",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "title",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
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

document.addEventListener('DOMContentLoaded', async function () {

    await BlockchainGateway.init(contractAddress, abi)

    // subscribe to events
    BlockchainGateway.EventEmitter.subscribe('transactionCompleted', (data) => {
        console.log('Transaction completed:', data)
    })

    BlockchainGateway.EventEmitter.subscribe('error', (data) => {
        console.error('Error occurred:', data)
    })
})