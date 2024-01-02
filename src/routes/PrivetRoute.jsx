import { useContext, useState } from "react";
import { AuthContext } from "../provider/authProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext)
    if(loading){
        <span className="loading loading-spinner text-neutral"></span>
    }
    if(user){
        return children;
    }
    
    return <Navigate to='/login'></Navigate>;
};

export default PrivetRoute;