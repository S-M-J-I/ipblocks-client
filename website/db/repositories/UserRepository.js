import DB from "../database/DB.js"

const UserRepository = {
    create: async function (entity) {
        return await DB.db
            .from('users')
            .insert(entity)
            .select()
    },
    findByUsernameAndPassword: async function (entity) {
        return await DB.db
            .from('users')
            .select('*')
            .eq('username', entity['username'])
            .eq('password', entity['password'])
    }
}

export default UserRepository