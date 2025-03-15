function showToast(message, type = "success") {
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
}