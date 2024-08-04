import {useForm} from "react-hook-form";
import API from "../../networks/index.js";

const Login = () => {

    // const dispatch = useDispatch()
    // const onLoggedIn = () => {
    //     dispatch(onLogin())
    // }

    const { register, handleSubmit, watch } = useForm()

    const onSubmit = (data) => {
        API.connectAPI('/auth/login', 'POST', data)
    }

    return (
        <div className='login-wrapper'>
           <div className='login-aside'>
           </div>
            <div className='container'>
                <div className='login-form'>
                    <div className='auth-content'>
                        <h3>Sign in your account</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                                        {...register('userId', {
                                            required: true,
                                        })}
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
                                        {...register('userPw', {
                                            required: true,
                                        })}
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