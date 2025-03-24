import FormDataFactory from "./FormDataFactory.js";
import UIAdapter from "./UIAdapter.js";
import WalletService from "./WalletService.js";
import ContractService from "./ContractService.js";
import ErrorHandler from "./ErrorHandler.js";
import MarketplaceAddressRepository from "../db/repositories/MarketplaceAddressRepository.js";
import DB from "../db/database/DB.js";

/**
 * The Service to handle all IP related functions
 * 
 * ```js
 * // to publish IP
 * IPService.publishIP()
 * 
 * // search IP
 * IPService.searchPatent()
 * ```
*/
const IPService = {
    /**
     * Publish an IP
     */
    publishIP: async function () {

        const walletAddress = WalletService.getWalletAddress();
        if (!walletAddress) return;

        try {
            const ipData = FormDataFactory.create('ipForm');
            const inventors = [walletAddress];

            // Set dates
            const currentTime = Math.floor(Date.now() / 1000);
            const expirationDate = currentTime + (2 * 365 * 24 * 60 * 60); // 2 years

            // Prepare params for contract call
            const params = [
                ipData.ipId,
                ipData.ipTitle,
                ipData.ipType,
                currentTime, // initialFilingDate
                currentTime, // publicationDate
                expirationDate,
                inventors
            ];

            return await ContractService.executeMethod('publishIP', params, walletAddress);
        } catch (error) {
            console.error('IP Publication Error:', error);
        }
    },

    /**
     * Search IP
     */
    searchPatent: async function () {
        const walletAddress = WalletService.getWalletAddress();
        if (!walletAddress) return;

        try {
            const searchTerm = document.getElementById('searchTerm').value;
            console.log("Searching for:", searchTerm);

            const result = await ContractService.callMethod('getIpById', [searchTerm], walletAddress);

            if (result) {
                console.log('Search Result:', result);
                UIAdapter.showToast(`IP Search Successful`, 'success');

                document.getElementById("searchResult").style.display = "block";
                document.getElementById("searchTitle").innerText = result;
                return result;
            } else {
                console.warn('No IP found with the given ID');
                UIAdapter.showToast('No IP found with the given ID', 'error');
                return null;
            }
        } catch (error) {
            ErrorHandler.handle(error, 'Search failed');
            return null;
        }
    },

    /**
     * Transfer IP
     */
    transferIP: async function () {
        const walletAddress = WalletService.getWalletAddress();
        if (!walletAddress) return;

        try {
            const transferData = FormDataFactory.create('transferForm');
            const buyerWallet = transferData.newOwner;

            // Get IP price
            const price = await ContractService.callMethod('getIpPrice', [transferData.ipId], buyerWallet);

            // Prepare params
            const params = [
                transferData.ipId,
                WalletService.governmentAddress
            ];

            return await ContractService.executeMethod('transferIP', params, buyerWallet, price);
        } catch (error) {
            console.error('IP Transfer Error:', error);
        }
    },

    /**
     * Start IP Auction
     */
    startAuction: async function () {
        const walletAddress = WalletService.getWalletAddress();
        if (!walletAddress) return;

        try {
            const auctionData = FormDataFactory.create('auctionForm');
            const priceInWei = web3.utils.toWei(auctionData.basePrice, 'ether');

            const ip = {
                ip_id: auctionData.ipId,
                bid_price: parseFloat(auctionData.basePrice),
                owner_id: parseInt(window.localStorage.getItem('curr_id'))
            }
            console.log(ip)
            const { data, error } = await MarketplaceAddressRepository.createMarketplaceEntry(ip)
            if (error) {
                ErrorHandler.handle(error, "Error adding to marketplace")
                return
            }

            // Prepare params
            const params = [auctionData.ipId, priceInWei];

            return await ContractService.executeMethod('startAuctionIP', params, walletAddress);
        } catch (error) {
            console.error('Start Auction Error:', error);
        }
    },

    setAuctionBid: async function (ipId, bidPrice) {
        // TODO: off-chain bid to preserve users eth
        const { data, error } = await MarketplaceAddressRepository.setBidPrice(parseInt(ipId), parseFloat(bidPrice))
        if (error) {
            ErrorHandler.handle(error, "Coudln't set bid price")
            return
        }

        return data
    },

    /**
     * End IP auction
     */
    endAuction: async function () {
        const walletAddress = WalletService.getWalletAddress();
        if (!walletAddress) return;

        try {
            const auctionData = FormDataFactory.create('auctionForm');

            // Prepare params
            const params = [auctionData.ipId];

            return await ContractService.executeMethod('endAuctionIP', params, walletAddress);
        } catch (error) {
            console.error('End Auction Error:', error);
        }
    },

    /**
     * Get IP details
     */
    getIPDetails: async function (ipId) {
        console.log("Fetching details for IP:", ipId.toString());

        if (!WalletService.governmentAddress) {
            UIAdapter.showToast("Government address not available", "error");
            return;
        }

        try {
            const result = await ContractService.callMethod('getIpDetailsById', [ipId.toString()], WalletService.governmentAddress);

            if (result) {
                const title = result[1];
                const owner = result[2];
                const price = result[3];
                // const [_, title, owner, price] = result;
                const priceInEth = web3.utils.fromWei(price.toString(), "ether");

                console.log("IP Details:", title, owner, priceInEth);

                // Update UI
                UIAdapter.showIPDetails(ipId, title, priceInEth);
                return { ipId, title, owner, price, priceInEth };
            } else {
                console.warn('No IP found with the given ID');
                UIAdapter.showToast('No IP found with the given ID', 'error');
                return null;
            }
        } catch (error) {
            ErrorHandler.handle(error, 'Failed to fetch IP details');
            return null;
        }
    },

    /**
     * Get IP price
     */
    getIpValue: async function () {
        const ipId = document.getElementById("ipIdTransfer").value
        try {
            console.log("ID", ipId)
            const result = await ContractService.callMethod('getIpPrice', [ipId.toString()], WalletService.governmentAddress);
            UIAdapter.displayTransferAmount(result)
        } catch (error) {
            ErrorHandler.handle(error, 'Failed to fetch IP price')
            return null
        }
    },

    /**
     * Get all auctioned IPs
     */
    getAllAuctionedIPs: async function () {
        if (!WalletService.governmentAddress) {
            UIAdapter.showToast("Government address not available", "error");
            return;
        }

        try {
            const auctionedIPs = await ContractService.callMethod('getAuctionedIPs', [], WalletService.governmentAddress);

            if (auctionedIPs && auctionedIPs[0].length > 0) {
                console.log('Auctioned IPs:', auctionedIPs);
                UIAdapter.showToast(`Retrieved all IPs`, 'success');

                const ids = auctionedIPs[0];
                const titles = auctionedIPs[1];
                const prices = auctionedIPs[2];
                UIAdapter.displayMarketplace(ids, titles, prices);

                return { ids, titles, prices };
            } else {
                console.warn('No IPs currently in marketplace');
                UIAdapter.displayMarketplace([], [], []);
                return { ids: [], titles: [], prices: [] };
            }
        } catch (error) {
            ErrorHandler.handle(error, 'Failed to fetch auction IPs');
            return null;
        }
    }
};

export default IPService