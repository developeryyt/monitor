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
        signIn: (state, action) => {
            const { data, type } = action.payload

            if(type === 'loginSuccess') {
                state.isLogin = true
                state.auth.userId = data
            }

        },
        signOut: (state, action) => {
        }
    }
})

export const {
    signIn,
    signOut
} = authSlice.actions

export default authSlice.reducer