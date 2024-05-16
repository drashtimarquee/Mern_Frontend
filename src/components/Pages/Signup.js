import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom";

const Register = () => {

    const [Fname, setFname] = useState("");
    const [Lname, setLname] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setpassword] = useState("");
    const [Address, setAddress] = useState("");
    const [Cpassword, setCpassword] = useState("");
    const navigate = useNavigate();
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    const [alertMessage, setAlertMessage] = useState("");
    const [fnameError, setFnameError] = useState("");
    const [lnameError, setLnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [cpasswordError, setCpasswordError] = useState("");
    const [addressError, setAddressError] = useState("");

    const validateForm = () => {
        setFnameError("");
        setLnameError("");
        setEmailError("");
        setPasswordError("");
        setCpasswordError("");
        setAddressError("");

        let isValid = true;
        if (!Fname) {
            setFnameError("Please Enter Your First Name");
            isValid = false;
        }
        if (!Lname) {
            setLnameError("Please Enter Your Last Name");
            isValid = false;
        }
        if (!Email) {
            setEmailError("Please Enter Your Email");
            isValid = false;
        } else if (!emailRegex.test(Email)) {
            setEmailError("Please Enter Valid Email Address");
            isValid = false;
        }
        if (!Address) {
            setAddressError("Please Enter Your Address");
            isValid = false;
        }
        if (!Password) {
            setPasswordError("Please Enter Your Password");
            isValid = false;
        } else if (Password.length < 8) {
            setPasswordError("Password Should Be At Least 8 Characters Long");
            isValid = false;
        } else if (!passwordRegex.test(Password)) {
            setPasswordError("Please Enter Valid Password. It Should Be At Least 8 Characters Long, Contain At Least One Uppercase Letter, One Lowercase Letter, One Digit, And One Special Character.");
            isValid = false;
        }
        if (!Cpassword) {
            setCpasswordError("Please Enter Confirm Password");
            isValid = false;
        } else if (Password !== Cpassword) {
            setCpasswordError("Password And Confirm Password Do Not Match");
            isValid = false;
        }
        return isValid;
    }

    const register = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const response = await axios.post("http://localhost:1202/register", {
                Fname, Lname, Email, Address, Password, Cpassword
            });
            if (response.status === 200) {
                navigate("/Login");
            } else {
                setAlertMessage("Registration failed");
            }
        };
    }

    return (
        <div className="container-form">
            <img className="form-img" src='Assets/signup_background2.jpg' alt="" />
            <div className="form-body">
                <div className="form-body-a">
                    <h1>Welcome to the Signup Page for The Decor Kart</h1>
                    <h6>Already have an account ? <NavLink to="/Login">Signin</NavLink> </h6>
                </div>
                <div className="form-body-b">
                    <form onSubmit={register}>
                        <h2 className="form-header">Sign Up</h2>
                        <div className="user-info">
                            <div className='user-input'>
                                <label className="form-lable">First name </label>
                                <input id="Fname" className="form-input" type="text" placeholder=" First Name" onChange={(e) => setFname(e.target.value)} />
                                {fnameError && <span style={{ color: "red", marginLeft: "47px" }}>{fnameError}</span>}
                            </div>
                            <div className='user-input'>
                                <label className="form-lable">Last name </label>
                                <input id="Lname" className="form-input" type="text" placeholder=" Last Name" onChange={(e) => setLname(e.target.value)} />
                                {lnameError && <span style={{ color: "red", marginLeft: "47px" }}>{lnameError}</span>}
                            </div>
                        </div>
                        <div className="user-input">
                            <label className="form-lable">Email </label>
                            <input id="email" className="form-input" type="email" placeholder=" Email" onChange={(e) => setEmail(e.target.value)} />
                            {emailError && <span style={{ color: "red", marginLeft: "47px" }}>{emailError}</span>}
                        </div>
                        <div className="user-input">
                            <label className="form-lable">Address </label>
                            <input id="address" className="form-input" type="text" placeholder=" Address" onChange={(e) => setAddress(e.target.value)} />
                            {addressError && <span style={{ color: "red", marginLeft: "47px" }}>{addressError}</span>}
                        </div>
                        <div className="user-input">
                            <label className="form-lable">Password </label>
                            <input id="Password" className="form-input" type="password" placeholder=" Password" onChange={(e) => setpassword(e.target.value)} />
                            {passwordError && <span style={{ color: "red", marginLeft: "47px" }}>{passwordError}</span>}
                        </div>
                        <div className="user-input">
                            <label className="form-lable">Confirm Password </label>
                            <input id="Cpassword" className="form-input" type="password" placeholder=" Confirm Password" onChange={(e) => setCpassword(e.target.value)} />
                            {cpasswordError && <span style={{ color: "red", marginLeft: "47px" }}>{cpasswordError}</span>}
                        </div>
                        <button className="footer">Signup</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;