import {useDispatch, useSelector} from "react-redux";
import {onLogin} from "../../store/authSlice/index.js";

const Login = () => {

    // const dispatch = useDispatch()

    // const onLoggedIn = () => {
    //     dispatch(onLogin())
    // }

    return (
        <div className='login-wrapper'>
           <div className='login-aside'>
           </div>
            <div className='container'>
                <div className='login-form'>
                    <div>
                        <div>Sign in your account</div>
                        <form>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;