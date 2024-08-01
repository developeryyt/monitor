import {Routes, useNavigate} from "react-router";
import Routing from "./routing/index.jsx";
import {useEffect, useState} from "react";
import {authRoutes, serviceRoutes} from "../routes/index.jsx";
import {useSelector} from "react-redux";

const App = () => {

    const [routesArr, setRoutesArr] = useState(authRoutes)
    const { isLogin } = useSelector((state) => state.auth)
    const navigate = useNavigate()


    useEffect(() => {
        if(isLogin) {
            navigate('/')
            setRoutesArr(prev => [...prev, ...serviceRoutes])
        }else {
            navigate('login')
            setRoutesArr(authRoutes)
        }
    }, [isLogin])



    return (
        <>
            <Routing routesArr={routesArr} />
        </>
    )
}

export default App
