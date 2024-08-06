import API from "../networks/index.js";

export async function login(data) {
    // const data = {
    //     userId,
    //     userPw
    // }
    return await API.connectAPI('/auth/login', 'POST', data)
}