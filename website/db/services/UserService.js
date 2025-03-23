import FormDataFactory from "../FormDataFactory.js"
import UIAdapter from "../UIAdapter.js"
import ErrorHandler from "../ErrorHandler.js"
import UserRepository from "../repositories/UserRepository.js"
import AuthService from "./AuthService.js"
import DB from "../database/DB.js"

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
            window.localStorage.setItem("curr_id", data[0]['id'])
            window.localStorage.setItem("curr_role", data[0]['role'])
            console.log("Storage details:", window.localStorage.getItem("curr_id"), window.localStorage.getItem("curr_role"))

            if (data[0]['id'] == 0) {
                window.location.href = `./owner_dashboard.php?id=${data[0]['id']}`
            } else {
                window.location.href = `./admin_dashboard.php?id=${data[0]['id']}`
            }

            UIAdapter.showToast("Logged In")
        } else {
            ErrorHandler.handle("404 (Not Found)", "Invalid username or password")
        }
    },

    userLogout: async function () {
        const { error } = await DB.db.auth.signOut()
        if (error) {
            ErrorHandler.handle(error, "Error in logout")
        } else {
            await DB.db.auth.refreshSession()
            window.localStorage.clear()
            window.location.href = './login.php'
        }
    }
}

export default UserService