/**
 * EventEmitter observer to listen to events
 * 
 * ```js
 * EventEmitter.subscribe('transactionCompleted', (data) => {
        console.log('Transaction completed:', data)
    })

EventEmitter.subscribe('error', (data) => {
    console.error('Error occurred:', data)
})
 * ```
 */
const EventEmitter = {
    events: {},

    /**
     * Subscribe to events
     * @param {*} event 
     * @param {*} callback 
     * @returns 
     */
    subscribe: function (event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
        return () => this.unsubscribe(event, callback);
    },

    /**
     * Consume and unsubscribe
     * @param {*} event 
     * @param {*} callback 
     */
    unsubscribe: function (event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    },

    /**
     * Emit event
     * @param {*} event 
     * @param {*} data 
     */
    emit: function (event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
};

export default EventEmitter