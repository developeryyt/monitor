import {login} from "../../services/authService.js";

export function loginAction(data) {
    return (dispatch) => {
        login(data).then(res => {
            dispatch(loginConfirmAction(res))
        }).catch((err) => {

        })
    }
}


export function loginConfirmAction(data) {
    return {
        type: 'loginSuccess',
        payload: data
    }
}