import UserService from "./services/UserService.js"

const DBEventListeners = {
    logoutBtn: document.getElementById("logoutLink"),
    listen: function () {
        this.logoutBtn.addEventListener('click', UserService.userLogout)
    }
}

export default DBEventListeners