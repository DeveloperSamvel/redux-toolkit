import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInUser } from '../../store/auth/authReducer';

const LoginPage = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSignInUser = () => {
        if(login === "samvel" && password === "123456") {
            dispatch(signInUser({userId: "48488468748484484"}));
        }
    }

    return (
        <>
            <input type="text" value={login} onInput={(event) => setLogin(event.target.value)} />
            <input type="password" value={password} onInput={(event) => setPassword(event.target.value)} />
            <button onClick={() => handleSignInUser()}>Login</button>
        </>
    )
}

export default LoginPage;