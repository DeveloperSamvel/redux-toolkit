import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import logo from '../../static/images/logo.png';
import './Header.css';

const Header = ({handleLogOutUser}) => {
  return (
    <div className='header'>
      <img className='logo' src={logo} alt="logo" />
      <div>
        <button className='log-out' onClick={handleLogOutUser}>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
      </div>
    </div>
  )
}

export default Header