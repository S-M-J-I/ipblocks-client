import ErrorHandler from "./ErrorHandler.js"
import IPService from "./IPService.js"
import UIAdapter from "./UIAdapter.js"
import WalletService from "./WalletService.js"

const EventListeners = {
    // listen to dropdowns or input field selections
    dropdown: document.getElementById('accountDropdown'),
    // transfer ip form input
    transferIPInput: document.getElementById("ipIdTransfer"),
    submitBidPrice: document.getElementById("submitBid"),
    listen: function () {
        console.log(this.submitBidPrice)

        if (this.dropdown) {
            this.dropdown.addEventListener('change', function () {
                WalletService.updateAccountInfo(this.value)
            })
        }

        if (this.transferIPInput) {
            this.transferIPInput.addEventListener('change', function () {
                console.log("Called")
                IPService.getIpValue()
            })
        }

        if (this.submitBidPrice) {
            this.submitBidPrice.addEventListener('click', async function () {
                console.log("Setting bid")
                const urlParams = new URLSearchParams(window.location.search)
                const ipId = urlParams.get('ipId')
                const bidPrice = document.getElementById("bidPrice").value
                const currPrice = document.getElementById("ipPrice").innerText
                if (!bidPrice || bidPrice === "" || parseFloat(bidPrice) <= 0 || parseFloat(bidPrice) <= parseFloat(currPrice)) {
                    UIAdapter.showToast("Invalid bid price", "error")
                    return;
                }
                console.log(ipId, " bidding ", bidPrice)
                const res = await IPService.setAuctionBid(ipId, bidPrice)
                // if (res) {
                //     IPService.getIPDetails(ipId)
                // }
            })
        }
    }

}

export default EventListeners