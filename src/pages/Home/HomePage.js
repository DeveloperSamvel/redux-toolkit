import { useDispatch } from 'react-redux';
import { logOutUser } from '../../redux/auth/authReducer';

const HomePage = () => {
    const dispatch = useDispatch();

    const handleLogOutUser = () => {
        localStorage.removeItem("loggedIn");
        dispatch(logOutUser());
    }

    console.log("test home");
    return (
        <>
            <div>HomePage</div>
            <button onClick={() => handleLogOutUser()}>Log Out</button>
        </>
    )
}

export default HomePage;