async function getWalletAddress() {
    if (window.ethereum) {
        try {
            // Request account access if needed
            await ethereum.request({ method: 'eth_requestAccounts' })
            const web3 = new Web3(window.ethereum)
            const accounts = await web3.eth.getAccounts()
            document.getElementById("accountAddress").innerText = accounts[0]
            return accounts[0] // Return the first account
        } catch (error) {
            console.error("User denied account access or error occurred:", error)
            return null
        }
    } else {
        console.error("MetaMask is not installed.")
        return null
    }
}

async function sendDataToBackend(event) {
    event.preventDefault();

    const walletAddress = await getWalletAddress()
    if (walletAddress) {

        const form = document.getElementById('ipForm')
        const formData = new FormData(form)
        const inventors = [walletAddress]
        formData.append('inventors', JSON.stringify(inventors))

        const data = {}
        formData.forEach((value, key) => {
            if (key === "ipType") {
                data[key] = parseInt(value)
            } else {
                data[key] = value
            }
        })
        console.log(data)
        try {
            const response = await fetch('publish_process.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log("abi: " + result.result)
            alert("Success")
        } catch (err) {
            console.log(err)
            alert("Failed")
        }
    }
}


async function searchPatent(event) {
    event.preventDefault();

    const walletAddress = await getWalletAddress()
    if (walletAddress) {

        const form = document.getElementById('searchForm')
        const formData = new FormData(form)

        const data = {}
        formData.forEach((value, key) => {
            data[key] = value
        })
        console.log(data)
        try {
            const response = await fetch('search_process.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log(result.result)
            alert("Success Search")
        } catch (err) {
            console.log(err)
            alert("Failed")
        }
    }
}

getWalletAddress()