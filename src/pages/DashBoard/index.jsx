import React from 'react';
import {useSelector} from "react-redux";

const DashBoard = () => {

    const auth = useSelector(state => state.auth)

    console.log(auth)

    return (
        <div>
            DashBoard
        </div>
    );
};

export default DashBoard;