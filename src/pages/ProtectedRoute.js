import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
    const location = useLocation();
    const { isLogged } = useSelector((state) => state.auth);

    console.log("isLogged", isLogged);
    if(isLogged) {
        if(location.pathname === "/" || location.pathname === "/login") {
            return <Navigate to="/admin" />;
        }
    }
    else {
        if(location.pathname === "/" || location.pathname.includes("admin")) {
            return <Navigate to="/login" />;
        }
    }

    return <Outlet />;
};

export default ProtectedRoute;