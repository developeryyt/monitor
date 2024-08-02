import {useDispatch, useSelector} from "react-redux";
import {onLogin} from "../../store/authSlice/index.js";
import {useState} from "react";
import API from "../../networks/index.js";

const Login = () => {

    const [userId, setUserId] = useState('')
    const [userPw, setUserPw] = useState('')


    // const dispatch = useDispatch()

    // const onLoggedIn = () => {
    //     dispatch(onLogin())
    // }

    console.log(API)

    return (
        <div className='login-wrapper'>
           <div className='login-aside'>
           </div>
            <div className='container'>
                <div className='login-form'>
                    <div className='auth-content'>
                        <h3>Sign in your account</h3>
                        <form>
                            <div className='form-group'>
                                <label htmlFor='userid'>
                                    <strong>UserId</strong>
                                    <span className='required'>*</span>
                                </label>
                                <div>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Type Your ID'
                                        onChange={(e) => setUserId(e.target.value)}
                                        value={userId}
                                    />
                                </div>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='userPw'>
                                    <strong>Password</strong>
                                    <span className='required'>*</span>
                                </label>
                                <div>
                                    <input
                                        type='password'
                                        className='form-control'
                                        placeholder='Type Your Password'
                                        onChange={(e) => setUserPw(e.target.value)}
                                        value={userPw}
                                    />
                                </div>
                            </div>

                            <div className='form-group'>
                                <button
                                    type='submit'
                                    className='btn btn_login'
                                >Sign In</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;