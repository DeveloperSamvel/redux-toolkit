import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faUnlock } from "@fortawesome/free-solid-svg-icons";
import "./LoginContent.css";

const LoginContent = ({
  login,
  password,
  showPassword,
  setLogin,
  setPassword,
  setShowPassword,
  handleSignInUser,
}) => {

  return (
    <div id="login-form-root">
      <div className="wrapper">
        <div className="title">
          <span>Login Form</span>
        </div>
        <div className="form" action="#">
          <div className="row">
            <div className="svg-container">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <input
              type="text"
              value={login}
              onInput={(event) => setLogin(event.target.value)}
              placeholder="Login"
              required
            />
          </div>
          <div className="row">
            <div className="svg-container">
              <FontAwesomeIcon
                className="cursor-pointer"
                icon={showPassword ? faUnlock : faLock}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onInput={(event) => setPassword(event.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="row button"
            onClick={() => handleSignInUser()}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginContent;