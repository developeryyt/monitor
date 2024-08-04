import axios from 'axios'

class Networks {

    static BASEURL = `${process.env.VITE_API_URL}`
    AXIOS = null;

    constructor() {
        console.log(`API URL::::: ${Networks.BASEURL}`)
        this.initAxios()
    }

    initAxios() {
        this.AXIOS = axios.create({
            baseURL: Networks.BASEURL
        })
    }

    async connectAPI(url, method, data = null) {
        await this.AXIOS({
            url,
            method,
            data
        })
    }

}

const API = new Networks()

export default API