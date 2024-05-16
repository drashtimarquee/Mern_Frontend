import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Topdeal() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:1202/alluser");
                if (response.status === 200) {
                    setUsers(response.data.user);
                }
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className='dashuserdetail'>
            <h2>Top Deals</h2>
            <ul>
                {users.map((user, index) => (
                    <div className='dashuser'>
                        <span className='dashname'>{index + 1} {")"} {user.Fname} {user.Lname}</span><br />
                        <span className='dashemail'>{user.Email}</span>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Topdeal;
