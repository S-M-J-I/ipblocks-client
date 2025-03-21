import UIAdapter from "./UIAdapter.js";
import EventEmitter from "./EventEmitter.js";

/**
 * Error handler lol what else is there to write? To handle errors,
 * 
 * ```js
 * try {
 *   ...
 * } catch(error) {
 *   ErrorHandler.handle(error, message)
 * }
 * ```
 */
const ErrorHandler = {
    errorMappings: {
        'no accounts': 'Unable to find Ethereum accounts',
        'invalid address': 'Invalid Ethereum address provided',
        'insufficient funds': 'Insufficient funds for transaction',
        'contract method': 'Error calling contract method',
        'User rejected': 'Wallet connection was cancelled by user',
        'Web3': 'Web3 not loaded'
    },

    handle: function (error, defaultMessage) {
        console.error(`${defaultMessage}:`, error);

        let errorMessage = defaultMessage;

        if (error.message) {
            // Find matching error pattern
            for (const [pattern, message] of Object.entries(this.errorMappings)) {
                if (error.message.includes(pattern)) {
                    errorMessage = message;
                    break;
                }
            }
        }

        UIAdapter.showToast(errorMessage, 'error');

        // Emit error event
        EventEmitter.emit('error', { message: errorMessage, originalError: error });
    }
};

export default ErrorHandler