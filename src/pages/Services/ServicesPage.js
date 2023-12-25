import { useDispatch } from 'react-redux';
import { logOutUser } from '../../redux/auth/authReducer';

const ServicesPage = () => {
    const dispatch = useDispatch();

    const handleLogOutUser = () => {
        localStorage.removeItem("loggedIn");
        dispatch(logOutUser());
    }

    console.log("test services");
    return (
        <>
            <div>ServicesPage</div>
            <button onClick={() => handleLogOutUser()}>Log Out</button>
        </>
    )
}

export default ServicesPage;