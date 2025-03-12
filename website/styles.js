document.getElementById("accountDropdown").addEventListener("change", function () {
    document.getElementById("accountAddress").textContent = this.value;
});