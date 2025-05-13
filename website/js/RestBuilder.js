const RestBuilder = {
    url: "",
    options: {},
    headers: {},
    addUrl: function (url) {
        this.url = url
    },
    addOption: function (option, value) {
        this.options[option] = value
    },
    addHeader: function (header, value) {
        this.headers[header] = value
    },
    build: async function () {
        this.options['headers'] = this.headers
        return await fetch(this.url, this.options)
    }
}

export default RestBuilder