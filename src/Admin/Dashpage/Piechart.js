import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, } from 'recharts';

function Piechart() {

    const data = [
        { name: 'Mobile', value: 400 },
        { name: 'Desktop', value: 300 },
        { name: 'Laptop', value: 300 },
        { name: 'Tablet', value: 200 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return (
        <div className='dashpiechart'>
            <h2>Leads By Source</h2>
            <div className='piechart'>
                <ResponsiveContainer width="99%" height={300}>
                    <PieChart>
                        <Tooltip
                            contentStyle={{ background: "white", borderRadius: "5px" }}
                        />
                        <Pie
                            data={data}
                            cx={120}
                            cy={200}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className='options'>
                <ul>
                    {data.map((entry, index) => (
                        <li key={`label-${index}`} style={{ color: COLORS[index % COLORS.length] }}>
                            <div>{`${entry.name}`}</div> <div>{`${entry.value}`} </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Piechart
