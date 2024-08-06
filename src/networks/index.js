import axios from 'axios'


axios.defaults.baseURL = `${process.env.VITE_API_URL}`







class Networks {

    static BASEURL = `${process.env.VITE_API_URL}`
    AXIOS = null;

    constructor() {
        console.log(`API URL::::: ${Networks.BASEURL}`)
        this.initAxios()
    }

    initAxios() {
        this.AXIOS = axios.create({
            baseURL: Networks.BASEURL,
            headers: {
                'boa-authorization': `Bearer ${localStorage.getItem('token')}` ?? '',
            }
        })
    }

    async connectAPI(url, method, data = null) {
        try {
            const result = await this.AXIOS({
                url,
                method,
                data
            })
            
            return result;
        }catch(err) {
            throw new Error(err)
        }

    }

}

const API = new Networks()

export default API