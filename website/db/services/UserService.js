import FormDataFactory from "../FormDataFactory.js"
import UIAdapter from "../UIAdapter.js"
import ErrorHandler from "../ErrorHandler.js"
import UserRepository from "../repositories/UserRepository.js"
import AuthService from "./AuthService.js"

const UserService = {

    createOwner: async function () {
        const user = FormDataFactory.create('ownerSignup')

        UIAdapter.toggleModalSpinner()

        const { data, error } = await UserRepository.create(user)

        UIAdapter.toggleModalSpinner()

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
            ErrorHandler.handle(error, "Error in login")
        }

        console.log(data)
        if (data.length !== 0) {
            const authUser = data[0]
            console.log(authUser['email'], authUser['password'])
            const { authData, authError } = await AuthService.signInUser(authUser['email'], authUser['password'])

            if (authError) {
                ErrorHandler.handle(error, "Error in login")
            }

            console.log(authData)
            window.localStorage.setItem("curr_id", authData.data.user.id)
            window.localStorage.setItem("curr_role", authData.data.user.role)
            console.log("Storage details:", window.localStorage.getItem("curr_id"), window.localStorage.getItem("curr_role"))

            UIAdapter.showToast("Logged In")
        } else {
            ErrorHandler.handle("404 (Not Found)", "Invalid username or password")
        }
    },
}

export default UserService