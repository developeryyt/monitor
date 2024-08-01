import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    auth: {
        userId: '',
        token: '',
        expiresIn: '',
        refreshToken: ''
    },
    isLogin: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onLogin: (state, action) => {
            // state.auth = action.payload
            state.isLogin = true
        },
        onLogout: (state, action) => {
        }
    }
})

export const {
    onLogin,
    onLogout
} = authSlice.actions

export default authSlice.reducer