import FormDataFactory from "../FormDataFactory.js"
import UIAdapter from "../UIAdapter.js"
import ErrorHandler from "../ErrorHandler.js"
import UserRepository from "../repositories/UserRepository.js"
import WalletAddressRepository from "../repositories/WalletAddressRepository.js"
import AuthService from "./AuthService.js"
import DB from "../database/DB.js"
import WalletService from "../../js/WalletService.js"

const UserService = {

    createOwner: async function () {
        const user = FormDataFactory.create('ownerSignup')

        UIAdapter.toggleModalSpinner()

        const { data, error } = await UserRepository.create(user)

        UIAdapter.toggleModalSpinner()

        if (error) {
            ErrorHandler.handle(error, "Unexpected error")
            return
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
            return
        }

        console.log(data)
        if (data.length !== 0) {
            const authUser = data[0]
            console.log(authUser['email'], authUser['password'])
            const { authData, authError } = await AuthService.signInUser(authUser['email'], authUser['password'])

            if (authError) {
                ErrorHandler.handle(error, "Error in login")
                return
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
    },
    getUserWalletsById: async function () {
        const id = window.localStorage.getItem("curr_id")
        if (!id) {
            ErrorHandler.handle("No user is logged in", "Unauthorized")
            return
        }
        const { data: userData, error: userError } = await UserRepository.findById(parseInt(id))
        if (userError) {
            ErrorHandler.handle(error, "Couldn't get user")
            return
        }

        const user = userData[0]
        if (!user) {
            ErrorHandler.handle("Not Found", "User not found")
            return
        }

        const { data: walletData, error: walletError } = await WalletAddressRepository.findWalletAddressesById(user['id'])

        if (walletError) {
            ErrorHandler.handle(err, "Coudn't get wallet addresses")
            return
        }

        return walletData
    },
    addUserWallet: async function () {
        const walletAddress = await WalletService.connectSpecificAccount()
        document.getElementById("walletAddress").value = walletAddress

        const id = window.localStorage.getItem("curr_id")
        if (!id) {
            ErrorHandler.handle("No user is logged in", "Unauthorized")
            window.location.href = './login.php'
            return
        }

        const formData = FormDataFactory.create("addWalletForm")

        const { data, error } = await WalletAddressRepository.addWalletAddress(parseInt(id), formData['walletAddress'])
        if (error) {
            ErrorHandler.handle(error, "Couldn't add wallet")
            return
        }

        if (data) {
            UIAdapter.showToast("Added Wallet", "success")
            window.location.reload()
        }
    }
}

export default UserService