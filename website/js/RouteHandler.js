import IPService from "./IPService.js"

/**
 * Handler onload routes
 */
const RouteHandler = {
    routes: {
        // if marketplace
        'marketplace.php': function () {
            IPService.getAllAuctionedIPs()
        },

        // if ip_bid.php
        'ip_bid.php': function () {
            const urlParams = new URLSearchParams(window.location.search)
            const ipId = urlParams.get('ipId')
            // get the ip
            if (ipId) {
                IPService.getIPDetails(ipId)
            }
        }
    },

    init: function () {
        const path = window.location.pathname

        // find the matching route
        for (const [route, handler] of Object.entries(this.routes)) {
            if (path.includes(route)) {
                handler()
                break
            }
        }
    }
}

export default RouteHandler