import React from 'react'
import { ResponsiveContainer, BarChart, Bar, Tooltip } from 'recharts';

function Totalvisit() {
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
            pv: 8800,
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
            name: 'Aug',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Sep',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Oct',
            uv: 4500,
            pv: 4300,
            amt: 1950,
        },
        {
            name: 'Nov',
            uv: 3400,
            pv: 3300,
            amt: 3100,
        },
    ];
    return (
        <div className='barchartbox'>
            <h2>Profit Earned</h2>
            <div className='chart'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={150} height={40} data={data}>
                        <Tooltip
                            contentStyle={{ background: "2a3447", borderRadius: "5px" }}
                            labelStyle={{ display: "none" }}
                        />
                        <Bar dataKey="uv" fill="#58297d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Totalvisit
