import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

function Addproduct() {

    const [productName, setName] = useState();
    const [productPrice, setPrize] = useState();
    const [productDescription, setDescription] = useState();
    const [category, setCategory] = useState();
    const [productImage, setImage] = useState();
    const navigate = useNavigate();

    const addproduct = async (e) => {
        e.preventDefault();
        const productdata = new FormData();
        productdata.append("productName", productName);
        productdata.append("productPrice", productPrice);
        productdata.append("productDescription", productDescription);
        productdata.append("category", category);
        productdata.append("productImage", productImage);

        const response = await axios.post("http://localhost:1202/addproduct", productdata);

        if (response.status === 200) {
            navigate("/Dashboard/admin/Productlist")
        } else {
            alert("product add failed");
        }
    };

    return (
        <div className='add-product'>
            <NavLink to="/Dashboard/admin" className="icon-link"><ArrowLeftOutlined className='user-icon' /></NavLink>
            <form onSubmit={addproduct}>
                <div className='add-product-desc'>
                    <input type='text' id='productName' placeholder='enter product name' onChange={(e) => setName(e.target.value)} /><br />
                    <input type='number' id='productPrice' placeholder='enter product price' onChange={(e) => setPrize(e.target.value)} /><br />
                    <input type='text' id='productDescription' placeholder='enter product description' onChange={(e) => setDescription(e.target.value)} /><br />
                    <select className='option' value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option>Select Category Of Decoration Item</option>
                        <option>Candlestand</option>
                        <option>Crystel</option>
                        <option>Decorplates</option>
                        <option>Decorstorage</option>
                        <option>Fineporcelain</option>
                        <option>Flowerarrang</option>
                        <option>Gingerjar</option>
                        <option>Photofram</option>
                        <option>Planter</option>
                        <option>Tabletopdecor</option>
                        <option>Clock</option>
                        <option>Castiron</option>
                        <option>Animal</option>
                        <option>Incenseholder</option>
                        <option>New Decor</option>
                        <option>New Ligting</option>
                        <option>New Kitchne</option>
                        <option>Cakestand</option>
                        <option>Dinnerplates</option>
                        <option>Doubleglass</option>
                        <option>Drinkglass</option>
                        <option>Jar</option>
                        <option>Mug</option>
                        <option>Teaware</option>
                        <option>Bedroomlight</option>
                        <option>Ceilinglight</option>
                        <option>Crystallight</option>
                        <option>Livingroom</option>
                        <option>Tablelamp</option>
                        <option>Woodlamp</option>
                        <option>Wallsconses</option>
                        <option>Wallplates</option>
                        <option>Olipaint</option>
                        <option>Wallmirror</option>
                        <option>Framedart</option>
                        <option>Wallvases</option>
                        <option>Chair</option>
                        <option>Tables</option>
                        <option>Ottomans</option>
                        <option>Bathset</option>
                        <option>Basin</option>
                    </select>
                    <br />
                    <input type='file' id='productImage' onChange={(e) => setImage(e.target.files[0])} /><br />
                    <button>Add Product</button>
                </div>
            </form>
        </div>
    )
}

export default Addproduct;