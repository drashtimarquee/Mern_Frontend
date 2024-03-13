import React from 'react'
import { Table } from 'antd';
const Columns = [
    {
        title: "SNo",
        dataIndex: "key"
    },
    {
        title: "Name",
        dataIndex: "name"
    }
];
const data1 = [
    {
        key: 1,
        name: `Decor`,
    },
    {
        key: 2,
        name: `Kitchen & Dining`,
    },
    {
        key: 3,
        name: `New Arrival`,
    },
    {
        key: 4,
        name: `Furniture`,
    },
    {
        key: 5,
        name: `Lighting`,
    }
];

function Categories() {
    return (
        <div>
            <div className='mt-4'>
                <h3 className='mb-4 text-center pb-3'>PRODUCT CATEGORIES</h3>
                <div>
                    <Table columns={Columns} dataSource={data1} />
                </div>
            </div>
        </div>
    )
}

export default Categories;
