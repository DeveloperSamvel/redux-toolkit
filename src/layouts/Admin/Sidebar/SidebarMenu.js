import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import logo from '../../../static/images/logo.png';
import "./SidebarMenu.css";


function SidebarMenu({ handleLogOutUser, open }) {
  return (
    <div className={`sidebar-menu ${open ? "open" : ""}`}>
      <div className="sidebar-menu-header">
        <img className="sidebar-menu-header-logo" src={logo} alt="logo" />
        <h2 className="sidebar-menu-header-h2">Admin Menu</h2>
      </div>
      <div className="sidebar-menu-body">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <button className="sidebar-menu-body-log-out" onClick={handleLogOutUser}>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
      </div>
    </div>
  );
}

export default SidebarMenu;
