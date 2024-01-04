import { useState } from "react";

function useLoginForm() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
  
    return {
        login,
        password,
        showPassword,
        setLogin,
        setPassword,
        setShowPassword
    };
}

export default useLoginForm;