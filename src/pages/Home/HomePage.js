import { useState } from "react";
import HomeContent from "../../components/HomeContent/HomeContent.component";
import useLogout from "../../hooks/useLogout";

import "./Homepage.css";

function HomePage() {
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
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className={`homepage-box-content ${open ? "open" : ""}`}>
        <div className="homepage-box-content-header">
          <button className="homepage-box-content-header-button" onClick={toggleDrawer}>
            ☰
          </button>
          <h1 className="homepage-box-content-header-h1">Heading</h1>
        </div>
        <div className="homepage-box-content-body">
          <HomeContent handleLogOutUser={useLogout()} />;
        </div>
      </div>
    </div>
  );
}

export default HomePage;