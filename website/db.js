import DBGateway from "./db/DBGateway.js"

console.log("Called")

document.addEventListener('DOMContentLoaded', async function () {
    await DBGateway.init()
})