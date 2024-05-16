import React from 'react'
import { ResponsiveContainer, BarChart, Bar, Tooltip } from 'recharts';

function Totalvisit() {
    const data = [
        {
            name: 'March',
            uv: 5605,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'April',
            uv: 7580,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'May',
            uv: 4950,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'June',
            uv: 3540,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'July',
            uv: 6521,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'August',
            uv: 4152,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Septmber',
            uv: 3489,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'October',
            uv: 6540,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'November',
            uv: 4890,
            pv: 3800,
            amt: 2500,
        },
    ];
    return (
        <div className='barchartbox'>
            <h2>Total Visit</h2>
            <div className='chart'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={150} height={40} data={data}>
                        <Tooltip
                            contentStyle={{ background: "2a3447", borderRadius: "5px" }}
                            labelStyle={{ display: "none" }}
                        />
                        <Bar dataKey="uv" fill="#995620" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Totalvisit
