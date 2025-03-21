import UIAdapter from "./UIAdapter.js";
import EventEmitter from "./EventEmitter.js";
import ErrorHandler from "./ErrorHandler.js";
import WalletService from "./WalletService.js";

// Facade Pattern
const ContractService = {
    config: {
        contractAddress: null,
        abi: null
    },
    contract: null,

    initialize: function (contractAddress, contractAbi) {
        this.config.contractAddress = contractAddress
        this.config.abi = contractAbi

        if (web3) {
            this.contract = new web3.eth.Contract(contractAbi, contractAddress);
            return true;
        }

        return false;
    },

    executeMethod: async function (methodName, params, walletAddress, value = 0) {
        try {
            if (!walletAddress) {
                throw new Error("Invalid wallet address");
            }

            if (!this.contract) {
                throw new Error("Contract not initialized");
            }

            // Create method call
            const methodCall = this.contract.methods[methodName](...params);

            // Estimate gas
            const gasEstimate = await methodCall.estimateGas({
                from: walletAddress,
                value: value
            });

            const gasLimit = Math.floor(gasEstimate * 1.2);
            console.log(`Estimated gas: ${gasEstimate}, gas limit: ${gasLimit}`);

            // Execute transaction
            const transaction = await methodCall.send({
                from: walletAddress,
                gas: gasLimit,
                value: value
            });

            console.log(`Transaction successful: ${methodName}`, transaction);
            UIAdapter.showToast(`Transaction successful`, 'success');

            // Update UI and emit events
            UIAdapter.showTransactionResult(transaction);
            EventEmitter.emit('transactionCompleted', { methodName, transaction });

            // Update account balance
            await WalletService.updateAccountInfo(walletAddress);

            return transaction;
        } catch (error) {
            ErrorHandler.handle(error, `Failed to execute ${methodName}`);
            throw error;
        }
    },

    callMethod: async function (methodName, params, walletAddress) {
        try {
            if (!this.contract) {
                throw new Error("Contract not initialized");
            }

            const result = await this.contract.methods[methodName](...params).call({
                from: walletAddress
            });

            return result;
        } catch (error) {
            ErrorHandler.handle(error, `Failed to call ${methodName}`);
            throw error;
        }
    }
};

export default ContractService