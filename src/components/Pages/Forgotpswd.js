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
            <img className="form-img" src='/Assets/edit_background.jpg' alt="" />
            <div className="form">
                <form onSubmit={passwordreset}>
                    <div className="user-input">
                        <input type="email" placeholder="enter your email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="user-input">
                        <input type="password" placeholder="enter your new password" onChange={(e) => setnewpassword(e.target.value)} />
                    </div>
                    <button className="footer">Update</button>
                </form>
            </div>
        </div>
    );
};

export default Forgotpswd;