import React from 'react'
import { Area, AreaChart, ResponsiveContainer, YAxis, XAxis, CartesianGrid, Tooltip } from 'recharts';

function Revenuechart() {
    const data = [
        {
            name: 'March',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'April',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'May',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'June',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'July',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'August',
            uv: 2390,
            pv: 5800,
            amt: 3500,
        },
        {
            name: 'Sept',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Oct',
            uv: 3500,
            pv: 4000,
            amt: 2200,
        },
        {
            name: 'Nov',
            uv: 3490,
            pv: 7500,
            amt: 2900,
        },
    ];
    return (
        <div className='revenuechart'>
            <h2>Revenue Analitics</h2>
            <div className='revenue-chart'>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Revenuechart