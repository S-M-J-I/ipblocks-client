import DB from "../database/DB.js"
import ErrorHandler from "../ErrorHandler.js"

const AuthService = {
    signInUser: async function (email, password) {
        return await DB.db.auth.signInWithPassword({
            email: email,
            password: password
        })
    },
    listenToAuthChange: function () {
        return DB.db.auth.onAuthStateChange((event, session) => {
            console.log(event, session)
            if (event === 'SIGNED_IN') {
                // handle sign in event
                console.log("SIGNED IN", session)
            } else if (event === 'SIGNED_OUT') {
                // handle sign out event
                console.log("SIGNED OUT", session)
            } else if (event === 'TOKEN_REFRESHED') {
                // handle token refreshed event
            }
        })
    }
}

export default AuthService