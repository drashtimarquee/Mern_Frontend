import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./Usercontax";

const Login = () => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [userauth, setUserauth] = useAuth();
    const navigate = useNavigate();

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
        <div>
            <div className="form">
                <div className="formbody">
                    <form onSubmit={login}>
                        <input className="forminput" type="email" placeholder="enter your email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                        <input className="forminput" type="password" placeholder="enter your password" value={Password} onChange={(e) => setPassword(e.target.value)} />
                        <button className="footer">Login</button>
                        <br />
                        <div className="login-register">
                            <NavLink to='/Forgotpswd'>Forgot Password</NavLink>
                        </div>
                        <div className="login-register">
                            If You Don't Have An Account !!! <NavLink to="/Signup">Signup</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;