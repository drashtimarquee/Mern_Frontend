import React, { useEffect } from 'react'
import { useState, createContext, useContext } from 'react';
import axios from 'axios';

const Authcontext = createContext();

function Usercontax({ children }) {
    const [userauth, setUserauth] = useState({
        user: null,
        token: ""
    });
    axios.defaults.headers.common["Authorization"] = userauth?.token;
    useEffect(() => {
        const userdata = localStorage.getItem("auth")
        if (userdata) {
            const parsedata = JSON.parse(userdata)
            setUserauth({ ...userauth, user: parsedata.user, token: parsedata.token })
        }
    }, [])
    return (
        <div>
            <Authcontext.Provider value={[userauth, setUserauth]} >
                {children}
            </Authcontext.Provider>
        </div>
    )
}

const useAuth = () => useContext(Authcontext);

export { useAuth, Usercontax };