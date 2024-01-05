import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import logo from '../../static/images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({handleLogOutUser}) => {
  return (
    <div className='header'>
      <img className='logo' src={logo} alt="logo" />
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/services">Services</Link>
        <button className='log-out' onClick={handleLogOutUser}>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
      </div>
    </div>
  )
}

export default Header