import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./Usercontax";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";

const Login = () => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [userauth, setUserauth] = useAuth();
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const login = async (e) => {
        e.preventDefault();

        if (!Email || !Password) {
            alert("Please enter both email and password");
            return;
        }

        try {
            const response = await axios.post("http://localhost:1202/Login", {
                Email,
                Password,
            });
            if (response.status === 200) {
                setUserauth({ ...userauth, user: response.data.user, token: response.data.token });
                localStorage.setItem("auth", JSON.stringify(response.data));
                if (response.data.user.Role === 1) {
                    navigate("/Dashboard/admin");
                } else {
                    navigate("/");
                }
            }
        } catch (error) {
            console.error("Login failed", error);
            alert("Login failed");
        }
    };

    return (
        <div className="container-login">
            <img src="Assets/login_background2.png" className="form-img" alt="" />
            <div className="login-form">
                <div className="login-form-a">
                    <form onSubmit={login}>
                        <h2 className="form-header">Log In</h2>
                        <div className="user-input">
                            <label>Email</label>
                            <input className="form-input" type="email" placeholder=" Enter Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="user-input">
                            <label>Password</label>
                            <div className="password-input">
                                <input className="form-input" type={showPassword ? "text" : "password"} placeholder=" Enter Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
                                {showPassword ? <VscEyeClosed className="show-password" onClick={togglePasswordVisibility} /> : <VscEye className="show-password" onClick={togglePasswordVisibility} />}
                            </div>
                        </div>
                        <button className="loginbtn">Log In</button>
                        <div className="login-forgotpass">
                            <NavLink to='/Forgotpswd'>Forgot Password</NavLink>
                        </div>
                        <div className="login-forgotpass">
                            If you don't have an account ? <NavLink to="/Signup">Signup</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;