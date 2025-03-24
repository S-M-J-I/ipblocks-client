import DB from "../database/DB.js"
import ErrorHandler from "../ErrorHandler.js"

const UserRepository = {
    create: async function (entity) {
        const { data, error } = await DB.getInstance().auth.signUp({
            email: entity['email'],
            password: entity['password'],
        })

        if (error) {
            ErrorHandler.handle("auth error", "Couldn't create user")
        }

        if (data) {
            return await DB.getInstance()
                .from('users')
                .insert(entity)
                .select()
        }

    },
    findByUsernameAndPassword: async function (entity) {
        return await DB.getInstance()
            .from('users')
            .select()
            .eq('username', entity['username'])
            .eq('password', entity['password'])
    },
    findById: async function (id) {
        return await DB.getInstance()
            .from('users')
            .select()
            .eq('id', id)
    },
}

export default UserRepository