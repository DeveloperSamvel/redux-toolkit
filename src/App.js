import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from './pages/Login/LoginPage';
import HomePage from './pages/Home/HomePage';
import ServicesPage from './pages/Services/ServicesPage';
import PageNotFound from './pages/NotFound/PageNotFound';
import ProtectedRoute from './routes/ProtectedRoute';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProtectedRoute />}>
                    <Route index element={<HomePage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="services" element={<ServicesPage />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
};
export default App;