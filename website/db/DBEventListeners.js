import UserService from "./services/UserService.js"

const DBEventListeners = {
    logoutBtn: document.getElementById("logoutLink"),
    addUserWallet: document.getElementById("addWallet"),
    listen: function () {
        if (this.logoutBtn) {
            this.logoutBtn.addEventListener('click', UserService.userLogout)
        }
        if (this.addUserWallet) {
            this.addUserWallet.addEventListener('click', function (event) {
                event.preventDefault()
                window.location.href = './add_wallet.php'
            })
        }
    }
}

export default DBEventListeners