import { useDispatch } from 'react-redux';
import { logOutUser } from '../store/auth/authReducer';

function useLogout() {
    const dispatch = useDispatch();

    return () => {
        dispatch(logOutUser());
    };
}

export default useLogout;