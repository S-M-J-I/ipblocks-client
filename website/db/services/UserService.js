import FormDataFactory from "../FormDataFactory.js"
import UIAdapter from "../UIAdapter.js"
import ErrorHandler from "../ErrorHandler.js"
import UserRepository from "../repositories/UserRepository.js"

const UserService = {

    createOwner: async function () {
        const user = FormDataFactory.create('ownerSignup')

        const { data, error } = await UserRepository.create(user)

        if (error) {
            ErrorHandler.handle(error, "Unexpected error")
        }

        if (data) {
            console.log(data)
            window.location.href = "./login.php"
            UIAdapter.showToast("Account successfully created")
        }
    },

    userLogin: async function () {
        const user = FormDataFactory.create('userLoginForm')
        const { data, error } = await UserRepository.findByUsernameAndPassword(user)
        if (error) {
            ErrorHandler.handle(error, "Unexpected error")
        }

        if (data.length !== 0) {
            UIAdapter.showToast("Logged In")
        } else {
            ErrorHandler.handle("404 (Not Found)", "Invalid username or password")
        }
    },
}

export default UserService