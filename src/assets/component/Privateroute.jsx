
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";


const Privateroute = ({children}) => {

    const {user} = useContext(AuthContext);
    const location = useLocation();
    if(user) {
        return children;
    }
    return <Navigate to='/addProduct' state={{from: location}} replace></Navigate>
};

export default Privateroute;