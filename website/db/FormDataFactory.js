/**
 * The factory to create form extraction/processing logic
*/
const FormDataFactory = {
    validateInput: function (input) {
        return input.replace(/[<>&'"\\/]/g, function (match) {
            const replacements = {
                '<': '&lt;',
                '>': '&gt;',
                '&': '&amp;',
                "'": '&#39;',
                '"': '&quot;',
                '\\': '\\\\',
                '/': '\\/'
            }
            return replacements[match];
        })
    },

    /**
     * Create form data handling logic based on the form we want to extract information from
     * @param {*} formId 
     * @returns 
     */
    create: function (formId) {
        const form = document.getElementById(formId)
        if (!form) return {}
        const formData = new FormData(form)
        const data = {}
        formData.forEach((value, key) => {
            if (key === "role") {
                data[key] = value === "owner" ? 0 : 1
            } else {
                data[key] = this.validateInput(value)
            }
        })
        console.log(`Form Data (${formId}):`, data)
        return data
    }
}

export default FormDataFactory