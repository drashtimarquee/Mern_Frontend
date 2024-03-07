import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"

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
        <div>
            {/* <div className='home-space'></div> */}
            <div className="form">
                <h1>REGISTRATION  FORM</h1>
                <div className="formbody">
                    <div className="register">
                        <form onSubmit={register}>
                            <input id="Fname" className="forminput" type="text" placeholder="enter your fname"
                                onChange={(e) => setFname(e.target.value)} /><br />
                            {fnameError && <span style={{ color: "red", marginLeft: "47px" }}>{fnameError}</span>}

                            <input id="Lname" className="forminput" type="text" placeholder="enter your lname"
                                onChange={(e) => setLname(e.target.value)} /><br />
                            {lnameError && <span style={{ color: "red", marginLeft: "47px" }}>{lnameError}</span>}

                            <input id="email" className="forminput" type="email" placeholder="enter your email"
                                onChange={(e) => setEmail(e.target.value)} /><br />
                            {emailError && <span style={{ color: "red", marginLeft: "47px" }}>{emailError}</span>}

                            <input id="address" className="forminput" type="text" placeholder="enter your address"
                                onChange={(e) => setAddress(e.target.value)} /><br />
                            {addressError && <span style={{ color: "red", marginLeft: "47px" }}>{addressError}</span>}

                            <input id="Password" className="forminput" type="password" placeholder="enter your password"
                                onChange={(e) => setpassword(e.target.value)} /><br />
                            {passwordError && <span style={{ color: "red", marginLeft: "47px" }}>{passwordError}</span>}

                            <input id="Cpassword" className="forminput" type="password" placeholder="enter your  confirm password"
                                onChange={(e) => setCpassword(e.target.value)} /><br />
                            {cpasswordError && <span style={{ color: "red", marginLeft: "47px" }}>{cpasswordError}</span>}
                            <br />
                            <button className="footer">Signup</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;