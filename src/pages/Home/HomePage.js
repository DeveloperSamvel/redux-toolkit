import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import HomeContent from "../../components/HomeContent/HomeContent.component";
import useLogout from "../../hooks/useLogout";

import "./Homepage.css";



function HomePage() {
  const handleLogOutUser = useLogout();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="homepage-container">
      <div className={`homepage-menu-content ${open ? "open" : ""}`}>
        <div className="homepage-menu-content-header">
          <h2 className="homepage-menu-content-header-h2">Drawer Menu</h2>
        </div>
        <div className="homepage-menu-content-body">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <button className='homepage-log-out' onClick={handleLogOutUser}>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
        </div>
      </div>
      <div className={`homepage-box-content ${open ? "open" : ""}`}>
        <div className="homepage-box-content-header">
          <button className="homepage-box-content-header-button" onClick={toggleDrawer}>
            ☰
          </button>
          <h1 className="homepage-box-content-header-h1">
            Welcome to Admin Page
          </h1>
        </div>
        <div className="homepage-box-content-body">
          <HomeContent />
        </div>
      </div>
    </div>
  );
}

export default HomePage;