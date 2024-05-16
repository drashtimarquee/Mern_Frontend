import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Table } from 'antd';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const columns = [
    {
        title: "SNo",
        dataIndex: "index",
    },
    {
        title: "Product Name",
        dataIndex: "productName",
    },
    {
        title: "Product Price",
        dataIndex: "productPrice",
    },
    {
        title: "Product Description",
        dataIndex: "productDescription",
    },
    {
        title: "Product Image",
        dataIndex: "productImage",
        render: (text, product) => {
            let imageUrl;
            switch (product.category) {
                case 'Crystal':
                    imageUrl = `http://localhost:1202/uploads/Decor/Crystel/${product.productImage}`;
                    break;
                case 'Candlestand':
                    imageUrl = `http://localhost:1202/uploads/Decor/Candlestand/${product.productImage}`;
                    break;
                case 'Decorplates':
                    imageUrl = `http://localhost:1202/uploads/Decor/Decorplates/${product.productImage}`;
                    break;
                case 'Decorstorage':
                    imageUrl = `http://localhost:1202/uploads/Decor/Decorstorage/${product.productImage}`;
                    break;
                case 'Fineporcelain':
                    imageUrl = `http://localhost:1202/uploads/Decor/Fineporcelain/${product.productImage}`;
                    break;
                case 'Flowerarrang':
                    imageUrl = `http://localhost:1202/uploads/Decor/Flowerarrang/${product.productImage}`;
                    break;
                case 'Gingerjar':
                    imageUrl = `http://localhost:1202/uploads/Decor/Gingerjar/${product.productImage}`;
                    break;
                case 'Photofram':
                    imageUrl = `http://localhost:1202/uploads/Decor/Photofram/${product.productImage}`;
                    break;
                case 'Planter':
                    imageUrl = `http://localhost:1202/uploads/Decor/Planter/${product.productImage}`;
                    break;
                case 'Tabletopdecor':
                    imageUrl = `http://localhost:1202/uploads/Decor/Tabletopdecor/${product.productImage}`;
                    break;
                case 'Clock':
                    imageUrl = `http://localhost:1202/uploads/Decor/Clock/${product.productImage}`;
                    break;
                case 'Animal':
                    imageUrl = `http://localhost:1202/uploads/Decor/Animal/${product.productImage}`;
                    break;
                case 'Castiron':
                    imageUrl = `http://localhost:1202/uploads/Decor/Castiron/${product.productImage}`;
                    break;
                case 'Incenseholder':
                    imageUrl = `http://localhost:1202/uploads/Decor/Incenseholder/${product.productImage}`;
                    break;
                case 'New Decor':
                    imageUrl = `http://localhost:1202/uploads/Newarrive/Newdecor/${product.productImage}`;
                    break;
                case 'New Ligting':
                    imageUrl = `http://localhost:1202/uploads/Newarrive/Newligting/${product.productImage}`;
                    break;
                case 'New Kitchne':
                    imageUrl = `http://localhost:1202/uploads/Newarrive/Newkitchne/${product.productImage}`;
                    break;
                case 'Cakestand':
                    imageUrl = `http://localhost:1202/uploads/Kitchen/Cakestand/${product.productImage}`;
                    break;
                case 'Dinnerplates':
                    imageUrl = `http://localhost:1202/uploads/Kitchen/Dinnerplates/${product.productImage}`;
                    break;
                case 'Doubleglass':
                    imageUrl = `http://localhost:1202/uploads/Kitchen/Doubleglass/${product.productImage}`;
                    break;
                case 'Drinkglass':
                    imageUrl = `http://localhost:1202/uploads/Kitchen/Drinkglass/${product.productImage}`;
                    break;
                case 'Jar':
                    imageUrl = `http://localhost:1202/uploads/Kitchen/Jar/${product.productImage}`;
                    break;
                case 'Mug':
                    imageUrl = `http://localhost:1202/uploads/Kitchen/Mug/${product.productImage}`;
                    break;
                case 'Teaware':
                    imageUrl = `http://localhost:1202/uploads/Kitchen/Teaware/${product.productImage}`;
                    break;
                case 'Bedroomlight':
                    imageUrl = `http://localhost:1202/uploads/Light/Bedroomlight/${product.productImage}`;
                    break;
                case 'Ceilinglight':
                    imageUrl = `http://localhost:1202/uploads/Light/Ceilinglight/${product.productImage}`;
                    break;
                case 'Crystallight':
                    imageUrl = `http://localhost:1202/uploads/Light/Crystallight/${product.productImage}`;
                    break;
                case 'Livingroom':
                    imageUrl = `http://localhost:1202/uploads/Light/Livingroom/${product.productImage}`;
                    break;
                case 'Tablelamp':
                    imageUrl = `http://localhost:1202/uploads/Light/Tablelamp/${product.productImage}`;
                    break;
                case 'Woodlamp':
                    imageUrl = `http://localhost:1202/uploads/Light/Woodlamp/${product.productImage}`;
                    break;
                case 'Wallsconses':
                    imageUrl = `http://localhost:1202/uploads/Light/Wallsconses/${product.productImage}`;
                    break;
                case 'Wallplates':
                    imageUrl = `http://localhost:1202/uploads/Walldecor/Wallplates/${product.productImage}`;
                    break;
                case 'Olipaint':
                    imageUrl = `http://localhost:1202/uploads/Walldecor/Olipaint/${product.productImage}`;
                    break;
                case 'Wallmirror':
                    imageUrl = `http://localhost:1202/uploads/Walldecor/Wallmirror/${product.productImage}`;
                    break;
                case 'Framedart':
                    imageUrl = `http://localhost:1202/uploads/Walldecor/Framedart/${product.productImage}`;
                    break;
                case 'Wallvases':
                    imageUrl = `http://localhost:1202/uploads/Walldecor/Wallvases/${product.productImage}`;
                    break;
                case 'Chair':
                    imageUrl = `http://localhost:1202/uploads/Furniture/Chair/${product.productImage}`;
                    break;
                case 'Tables':
                    imageUrl = `http://localhost:1202/uploads/Furniture/Tables/${product.productImage}`;
                    break;
                case 'Ottomans':
                    imageUrl = `http://localhost:1202/uploads/Furniture/Ottomans/${product.productImage}`;
                    break;
                case 'Bathset':
                    imageUrl = `http://localhost:1202/uploads/Bathdecor/Bathset/${product.productImage}`;
                    break;
                case 'Basin':
                    imageUrl = `http://localhost:1202/uploads/Bathdecor/Basin/${product.productImage}`;
                    break;
                default:
                    imageUrl = '';
                    break;
            }
            return imageUrl && <img src={imageUrl} alt={product.productName} style={{ maxWidth: '200px', maxHeight: '200px' }} />;
        }
    },
    {
        title: "Action",
        dataIndex: "action",
    },
];

function Productlist() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:1202/allproduct");
            if (response.status === 200) {
                setProducts(response.data.products);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleEdit = (productId) => {
        navigate(`/Dashboard/admin/Editproduct/${productId}`);
    };

    const handleDelete = async (productId) => {
        try {
            const response = await axios.delete(`http://localhost:1202/deleteproduct/${productId}`);
            if (response.status === 200) {
                fetchProducts();
            } else {
                alert("Product not deleted");
            }
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const data = products.map((product, index) => ({
        key: product._id,
        index: index + 1,
        productName: product.productName,
        productPrice: product.productPrice,
        productDescription: product.productDescription,
        productImage: product.productImage,
        action: (
            <div>
                <span className="actionn" onClick={() => handleEdit(product._id)}><FaRegEdit /></span>
                <span className="action2" onClick={() => handleDelete(product._id)}><MdDelete /></span>
            </div>
        ),
        category: product.category,
    }));

    return (
        <div>
            <div className="pro-list-icon">
                <NavLink to="/Dashboard/admin" className="icon-link">
                    <ArrowLeftOutlined className="user-icon" />
                </NavLink></div>
            <h1 className="productlist">ALL PRODUCTS</h1>
            <Table columns={columns} dataSource={data} />
        </div>
    );
}

export default Productlist;