import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Forgotpswd = () => {
    const [Email, setEmail] = useState("");
    const [newpassword, setnewpassword] = useState("");
    const navigate = useNavigate();

    const passwordreset = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:1202/forgotpassword", {
            Email,
            newpassword,
        });

        if (response.status === 200) {
            navigate("/Login");
        } else {
            alert("password updation failed");
        }
    };

    return (
        <div>
            <div className="form">
                <div className="formbody">
                    <form onSubmit={passwordreset}>
                        <input className="forminput" type="email" placeholder="enter your email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                        <input className="forminput" type="password" placeholder="enter your new password" onChange={(e) => setnewpassword(e.target.value)} />
                        <button className="footer">Update Password</button>
                        <br />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Forgotpswd;