import UIAdapter from "./UIAdapter.js"

const ErrorHandler = {
    errorMappings: {
        'bad request': 'Invalid inputs. Can you recheck the details entered',
        'timed out': 'Unable to connect. Make sure you have internet access',
        '404 (Not Found)': 'Invalid insert entity'
    },

    handle: function (error, defaultMessage) {
        console.error(`${defaultMessage}:`, error)

        let errorMessage = defaultMessage

        if (error.message) {
            // Find matching error pattern
            for (const [pattern, message] of Object.entries(this.errorMappings)) {
                if (error.message.includes(pattern)) {
                    errorMessage = message
                    break
                }
            }
        }

        UIAdapter.showToast(errorMessage, 'error')
    }
}

export default ErrorHandler