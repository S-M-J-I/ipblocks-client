import DB from "./db/database/DB.js"
import DBGateway from "./db/DBGateway.js"

console.log("Called")

document.addEventListener('DOMContentLoaded', async function () {
    await DBGateway.init()
    const { data } = DB.db.auth.onAuthStateChange((event, session) => {
        console.log(event)
        if (event === 'SIGNED_IN') {
            // handle sign in event
            document.getElementById("loginLink").style.display = "none"
            document.getElementById("dashboardLink").style.display = "inline-flex"
        } else if (event === 'SIGNED_OUT') {
            // handle sign out event
            console.log("SIGNED OUT", session)
            document.getElementById("dashboardLink").style.display = "none"
            document.getElementById("loginLink").style.display = "inline-flex"
        } else if (event === 'TOKEN_REFRESHED') {
            // handle token refreshed event
        }
    })
    DB.getInstance()
        .channel('bidding')
        .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'marketplace' }, (payload) => {
            document.getElementById("ipPrice").innerText = `${payload['new']['bid_price']} ETH`
        })
        .subscribe()

    // await DB.db.auth.refreshSession()

    // data.subscription.unsubscribe()
})