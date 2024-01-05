import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useLogout from '../../hooks/useLogout';
import ServicesContent from '../../components/ServicesContent/ServicesContent.component';
import useServices from '../../hooks/useServices';

import "./ServicesPage.css";



function ServicesPage() {
  const handleLogOutUser = useLogout();
  const { services, addService, editService, deleteService } = useServices();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="services-page-container">
      <div className={`services-page-menu-content ${open ? "open" : ""}`}>
        <div className="services-page-menu-content-header">
          <h2 className="services-page-menu-content-header-h2">Drawer Menu</h2>
        </div>
        <div className="services-page-menu-content-body">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <button className='services-page-log-out' onClick={handleLogOutUser}>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
        </div>
      </div>
      <div className={`services-page-box-content ${open ? "open" : ""}`}>
        <div className="services-page-box-content-header">
          <button className="services-page-box-content-header-button" onClick={toggleDrawer}>
            ☰
          </button>
          <h1 className="services-page-box-content-header-h1">
            Welcome to Admin Page
          </h1>
        </div>
        <div className="services-page-box-content-body">
          <ServicesContent
              services={services}
              addService={addService}
              editService={editService}
              deleteService={deleteService}
              handleLogOutUser={handleLogOutUser}
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;