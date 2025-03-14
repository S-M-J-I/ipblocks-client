document.getElementById("accountDropdown").addEventListener("change", async function () {
    console.log("value set", this.value)
    document.getElementById("accountAddress").textContent = this.value
    const balanceWei = await web3.eth.getBalance(this.value)
    const balanceEth = web3.utils.fromWei(balanceWei, "ether")
    document.getElementById("accountBalance").innerText = `${parseFloat(balanceEth).toFixed(4)} ETH`
})

// document.getElementById("connectWallet").onclick((event) => {

// })

document.getElementById("ipIdTransfer").addEventListener("change", async function () {
    const contract = new web3.eth.Contract(abi, contractAddress)
    const price = await contract.methods.getIpPrice(document.getElementById("ipIdTransfer").innerText).call({
        from: document.getElementById("accountAddress").textContent
    })
    document.getElementById("ipPrice").textContent = `${parseFloat(price).toFixed(2)} ETH`
    document.getElementById("tranferAddrSection").style.display = "block"
})