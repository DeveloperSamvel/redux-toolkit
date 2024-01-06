import { Link } from "react-router-dom";
import Footer from "../../layouts/Admin/Footer/Footer.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./AdminLayout.css";

function AdminLayout({ handleLogOutUser, open, toggleDrawer, children }) {
  return (
    <div className="admin-layout-container">
      <div className={`admin-layout-menu-content ${open ? "open" : ""}`}>
        <div className="admin-layout-menu-content-header">
          <h2 className="admin-layout-menu-content-header-h2">Drawer Menu</h2>
        </div>
        <div className="admin-layout-menu-content-body">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <button className="admin-layout-log-out" onClick={handleLogOutUser}>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
        </div>
      </div>
      <div className={`admin-layout-box-content ${open ? "open" : ""}`}>
        <div className="admin-layout-box-content-header">
          <button
            className="admin-layout-box-content-header-button"
            onClick={toggleDrawer}
          >
            ☰
          </button>
          <h1 className="admin-layout-box-content-header-h1">
            Welcome to Admin Page
          </h1>
        </div>
        <div className="admin-layout-box-content-body">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
