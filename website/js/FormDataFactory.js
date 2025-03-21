/**
 * The factory to create form extraction/processing logic
*/
const FormDataFactory = {
    /**
     * Create form data handling logic based on the form we want to extract information from
     * @param {*} formId 
     * @returns 
     */
    create: function (formId) {
        const form = document.getElementById(formId);
        if (!form) return {};
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            // Handle specific type conversions
            if (key === "ipType") {
                data[key] = parseInt(value);
            } else if (key === "basePrice" && formId === "auctionForm") {
                data[key] = value; // Keep as string for later conversion to wei
            } else {
                data[key] = value;
            }
        });
        console.log(`Form Data (${formId}):`, data);
        return data;
    }
};

export default FormDataFactory;