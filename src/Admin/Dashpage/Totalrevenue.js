import React, { useState, useEffect } from 'react';
import { FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import axios from 'axios';

function Chartbox() {
    const [allUsersLength, setAllUsersLength] = useState(0);

    useEffect(() => {
        const fetchAllUsersLength = async () => {
            try {
                const response = await axios.get('http://localhost:1202/allorder');
                setAllUsersLength(response.data.order.length);
            } catch (error) {
                console.error('Error fetching all products:', error);
            }
        };

        fetchAllUsersLength();
    }, []);

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className='userchart'>
            <div className='userdash'>
                <div className='userdashimg'>
                    <FaUser /> <span>Total Order</span>
                </div>
                <h1>{allUsersLength}</h1>
                <NavLink className='dashlink'>View All</NavLink>
            </div>
            <div className='chartinfo'>
                <div className='chart'>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart width={300} height={100} data={data}>
                            <Tooltip
                                contentStyle={{ background: "transparent", border: "none" }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 10, y: 50 }}
                            />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className='charttext'>
                    <span className='chartper'>30%</span>
                    <span className='duration'>This Month</span>
                </div>
            </div>
        </div>
    )
}

export default Chartbox
