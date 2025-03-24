import DB from "../database/DB.js"

const WalletAddressRepository = {
    findWalletAddressesById: async function (id) {
        return await DB.getInstance()
            .from('wallet_addresses')
            .select('wallet_address')
            .eq('user', id)
    },
    addWalletAddress: async function (id, walletAddress) {
        return await DB.getInstance()
            .from('wallet_addresses')
            .insert({ wallet_address: walletAddress, user: id })
            .select()
    },
}

export default WalletAddressRepository