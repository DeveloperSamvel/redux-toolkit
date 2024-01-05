import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import logo from '../../static/images/logo.png';
import cart from '../../static/images/ic_cart.svg';
import './Header.css';

const Header = ({handleLogOutUser}) => {
  return (
    <div className='header'>
      <img className='cart-logo' src={logo} alt="logo" />
      <div className='cart-container'>
        <img className='cart-img' src={cart} alt="cart" />
        <FontAwesomeIcon icon={faRightFromBracket} />
        <button onClick={handleLogOutUser}>Log Out</button>
      </div>
    </div>
  )
}

export default Header