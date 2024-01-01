import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
    const location = useLocation();
    const { isLogged } = useSelector((state) => state.auth);

    console.log("isLogged", isLogged);
    if(location.pathname === "/login") {
        if(isLogged) {
            return <Navigate to="/" />;
        }
    }
    else {
        if(!isLogged) {
            return <Navigate to="/login" />;
        }
    }

    return <Outlet />;
};

export default ProtectedRoute;