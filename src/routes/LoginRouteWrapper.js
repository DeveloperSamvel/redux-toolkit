import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Outlet } from 'react-router-dom';

const LoginRouteWrapper = () => {
    console.log("test LoginRouteWrapper");
    const { isLogged } = useSelector((state) => state.auth); 
    if (isLogged) {
        return <Navigate to="/" replace/>;
    }

    return <Outlet />;
};

export default LoginRouteWrapper;