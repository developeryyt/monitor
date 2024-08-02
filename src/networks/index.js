import axios from 'axios'

class Networks {


    BASEURL = `${process.env.VITE_API_URL}`
    AXIOS = null;

    constructor() {
        console.log(`API URL::::: ${this.BASEURL}`)
        this.initAxios()
    }

    initAxios() {
        this.AXIOS = axios.create({
            baseURL: this.BASEURL
        })
    }



}

const API = new Networks()

export default API