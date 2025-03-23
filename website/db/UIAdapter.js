/**
 * The function to handle all UI elements.
 * 
 * **ONLY** keep the UI changing code here and nothing else!
 */
const UIAdapter = (function () {
    return {
        updateAccountDisplay: function (address, balance) {
            const addressElement = document.getElementById("accountAddress");
            const balanceElement = document.getElementById("accountBalance");

            if (addressElement) {
                addressElement.innerText = address;
            }

            if (balanceElement && balance) {
                balanceElement.innerText = `${parseFloat(balance).toFixed(4)} ETH`;
            }
        },

        /**
         * Show toast message
         * @param {*} message 
         * @param {*} type 
         */
        showToast: function (message, type = "success") {
            const toastContainer = document.getElementById("toast-container");

            const toast = document.createElement("div");
            toast.className = `px-4 py-2 rounded-lg shadow-md text-white text-sm transition-opacity duration-300 ease-in-out ${type === "success" ? "bg-green-500" : "bg-red-500"
                }`;
            toast.innerText = message;

            toastContainer.appendChild(toast);

            setTimeout(() => {
                toast.classList.add("opacity-0");
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        },

        toggleModalSpinner: function () {
            const modalSpinner = document.getElementById("loadingSpinner")
            modalSpinner.style.display = modalSpinner.style.display === "none" ? "block" : "none"
        }
    };
})();

export default UIAdapter