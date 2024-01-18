import LoginContent from "../../components/LoginContent/LoginContent.component";
import useLoginForm from "../../hooks/useLoginForm";
import { useDispatch } from "react-redux";
import { signInUser } from "../../store/auth/authReducer";

const LoginPage = () => {
  const {
    login,
    password,
    showPassword,
    setLogin,
    setPassword,
    setShowPassword,
  } = useLoginForm();

  const dispatch = useDispatch();
  const handleSignInUser = () => {
    if (login === "Samvel" && password === "123456") {
      dispatch(signInUser({ userId: "48488468748484484" }));
    }
  };

  return (
    <LoginContent
      login={login}
      password={password}
      showPassword={showPassword}
      setLogin={setLogin}
      setPassword={setPassword}
      setShowPassword={setShowPassword}
      handleSignInUser={handleSignInUser}
    />
  );
};

export default LoginPage;
