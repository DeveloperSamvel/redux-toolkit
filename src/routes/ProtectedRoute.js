import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    console.log("test ProtectedRoute");
    const { isLogged } = useSelector((state) => state.auth); 
    console.log("isLogged", isLogged);
    if (!isLogged) {
        console.log("redirect login", !isLogged);
        return <Navigate to="/login" replace/>;
    }

    return <Outlet />;
};

export default ProtectedRoute;