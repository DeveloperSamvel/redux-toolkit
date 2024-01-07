import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import HomePage from "./pages/AdminHome/AdminHomePage";
import ServicesPage from "./pages/AdminServices/AdminServicesPage";
import PageNotFound from "./pages/NotFound/PageNotFound";
import ProtectedRoute from "./pages/ProtectedRoute";
import useLogout from "./hooks/useLogout";

const App = () => {
  const handleLogOutUser = useLogout();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="login" element={<LoginPage />} />
          <Route
            path="services"
            element={
              <ServicesPage
                handleLogOutUser={handleLogOutUser}
                open={open}
                toggleDrawer={toggleDrawer}
              />
            }
          />
          <Route path="admin/">
            <Route
              index
              element={
                <HomePage
                  handleLogOutUser={handleLogOutUser}
                  open={open}
                  toggleDrawer={toggleDrawer}
                />
              }
            />

            <Route
              path="services"
              element={
                <ServicesPage
                  handleLogOutUser={handleLogOutUser}
                  open={open}
                  toggleDrawer={toggleDrawer}
                />
              }
            />
          </Route>
          {/* <Route path="services/:id" element={<ServicesPage />} /> */}
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};
export default App;
