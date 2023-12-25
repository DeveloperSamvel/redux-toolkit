import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from './routes/ProtectedRoute';
import LoginRouteWrapper from './routes/LoginRouteWrapper';
import PageNotFound from './pages/NotFound/PageNotFound';
import LoginPage from './pages/Login/LoginPage';
import HomePage from './pages/Home/HomePage';
import ServicesPage from './pages/Services/ServicesPage';
import { useDispatch } from 'react-redux';
import { signInUser } from './redux/auth/authReducer';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const val = window.localStorage.getItem("loggedIn");
        if (val && val === "1") {
            dispatch(signInUser());
        }
    }, [dispatch]);

    console.log("test");

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginRouteWrapper />}>
                    <Route index element={<LoginPage />} />
                </Route>
                <Route path="/" element={<ProtectedRoute />}>
                    {/* <Route index element={<Navigate to="/services" replace />} /> */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
};

export default App;