import {Route, Routes} from "react-router-dom";

const Routing = ({routesArr}) => {

    console.log(routesArr)

    return (
        <Routes>
            {
                routesArr.map(route => (
                    <Route {...route} key={route['path']}/>
                ))
            }
        </Routes>
    );
};

export default Routing;