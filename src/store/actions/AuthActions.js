import {login} from "../../services/authService.js";
import {signIn} from "../authSlice";

export function loginAction(data) {
    return (dispatch) => {
        login(data).then(res => {
            const { data, status } = res?.data
            if(status === 200) dispatch(signIn({ type: 'loginSuccess', data }))
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