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
            // state.auth = action.payload
            state.isLogin = true
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