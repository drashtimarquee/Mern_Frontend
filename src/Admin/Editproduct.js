import React from 'react'
import { useState, useEffect, } from 'react';
import axios from 'axios';
import { useNavigate, useParams, NavLink } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

function Editproduct() {

    const [productName, setName] = useState();
    const [productPrice, setPrize] = useState();
    const [productDescription, setDescription] = useState();
    const [category, setCategory] = useState();
    const [productImage, setImage] = useState();
    const [photo, setPhoto] = useState();
    const navigate = useNavigate();

    const { id } = useParams();

    const singleproduct = async () => {
        const { data } = await axios.get(`http://localhost:1202/singleproduct/${id}`);
        setName(data.product.productName)
        setPrize(data.product.productPrice)
        setDescription(data.product.productDescription)
        setCategory(data.product.category)
        setPhoto(data.product.productImage)
    }

    useEffect(() => {
        if (productImage) {
            setPhoto("")
        }
        singleproduct();
    }, [productImage])

    const editproduct = async (e) => {
        e.preventDefault();
        const productdata = new FormData();
        productdata.append("productName", productName);
        productdata.append("productPrice", productPrice);
        productdata.append("productDescription", productDescription);
        productdata.append("category", category);
        productdata.append("productImage", productImage || photo);

        const response = await axios.put(`http://localhost:1202/editproduct/${id}`, productdata);

        if (response.status === 200) {
            navigate("/Dashboard/admin/Productlist")
        } else {
            alert("product edit failed");
        }
    };

    return (
        <div>
            <img className="form-img" src='/Assets/product_background.jpg' alt="" />
            <div className='add-product'>
                <NavLink to="/Dashboard/admin" className="icon-link"><ArrowLeftOutlined className='user-icon' /></NavLink>
                <div className='add-pro-form'>
                    <h3>EDIT PRODUCT</h3>
                    <form onSubmit={editproduct}>
                        <div className="user-input">
                            <input id="email" className="form-input" type="email" placeholder='Product name' value={productName} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="user-input">
                            <input type='number' id='productPrice' placeholder='Product price' value={productPrice} onChange={(e) => setPrize(e.target.value)} />
                        </div>
                        <div className="user-input">
                            <input type='text' id='productDescription' placeholder='Product description' value={productDescription} onChange={(e) => setDescription(e.target.value)} /><br />
                        </div>
                        <div className="user-input">
                            <select className='option' value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option>Select Category Of Decoration Item</option>
                                <option>Candlestand</option>
                                <option>Crystal</option>
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
                        </div>
                        <div className="user-input">
                            <input className="form-input" type='file' id='productImage' onChange={(e) => setImage(e.target.files[0])} />
                        </div>
                        <button className="footer">Add product</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Editproduct;