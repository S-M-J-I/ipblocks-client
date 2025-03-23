import DB from "../database/DB.js"
import ErrorHandler from "../ErrorHandler.js"

const UserRepository = {
    create: async function (entity) {
        const { data, error } = await DB.db.auth.signUp({
            email: entity['email'],
            password: entity['password'],
        })

        if (error) {
            ErrorHandler.handle("auth error", "Couldn't create user")
        }

        if (data) {
            return await DB.db
                .from('users')
                .insert(entity)
                .select()
        }

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