import API from "../networks/index.js";


/*
* note ::: 로그인 API
* */
export async function login(data) {
    return await API.connectAPI('/auth/login', 'POST', data)
}


/*
* note :::
* */






