import DB from "./database/DB.js"
import DBEventListeners from "./DBEventListeners.js"
import UserService from "./services/UserService.js"

const DBGateway = (function () {

    const initEventListeners = function () {
        const forms = {
            'ownerSignup': UserService.createOwner,
            'userLoginForm': UserService.userLogin,
        }

        for (const [formId, handler] of Object.entries(forms)) {
            const form = document.getElementById(formId)
            if (form) {
                form.addEventListener('submit', async (event) => {
                    event.preventDefault()
                    await handler()
                })
            }
        }

        DBEventListeners.listen()
    }

    return {
        init: async function () {
            // initialize it only once for global use
            DB.getInstance()
            initEventListeners()
            return true
        },
    }
})()
export default DBGateway