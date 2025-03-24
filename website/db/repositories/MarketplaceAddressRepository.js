import DB from "../database/DB.js"

const MarketplaceAddressRepository = {
    createMarketplaceEntry: async function (ip) {
        return await DB.getInstance()
            .from('marketplace')
            .insert(ip)
            .select()
    },
    getBidPriceAndOwner: async function (ipId) {
        return await DB.getInstance()
            .from('marketplace')
            .select(`
                bid_price,
                users:owner_id (username)
            `)
            .eq('ip_id', ipId)
            .single()
    },
    setBidPrice: async function (ipId, bid_price) {
        return DB.getInstance()
            .from('marketplace')
            .update({ bid_price: bid_price })
            .eq('id', ipId)
            .select()
    }
}

export default MarketplaceAddressRepository