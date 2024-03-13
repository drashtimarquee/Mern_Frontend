import React from 'react'
import { useState, useEffect, } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

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
        <div className='add-product'>
            <form onSubmit={editproduct}>
                <div className='add-product-desc'>
                    <input type='text' id='productName' value={productName} placeholder='enter product name' onChange={(e) => setName(e.target.value)} /><br />
                    <input type='number' id='productPrice' value={productPrice} placeholder='enter product price' onChange={(e) => setPrize(e.target.value)} /><br />
                    <input type='text' id='productDescription' value={productDescription} placeholder='enter product description' onChange={(e) => setDescription(e.target.value)} /><br />
                    <select className='option' value={category} onChange={(e) => setCategory(e.target.value)} >
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
                        <option>Animal</option>
                        <option>Incenseholder</option>
                        <option>Castiron</option>
                        <option>New Decor</option>
                        <option>New Ligting</option>
                        <option>New Kitchne</option>
                        <option>Desert</option>
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
                        <option>Wallsconses</option>
                        <option>Wallplates</option>
                        <option>Olipaint</option>
                        <option>Wallmirror</option>
                        <option>Framedart</option>
                        <option>Wallvases</option>
                        <option>Chairs</option>
                        <option>Tables</option>
                        <option>Ottomans</option>
                        <option>Bathset</option>
                        <option>Basin</option>
                    </select>
                    <br />
                    <input type='file' id='productImage' onChange={(e) => setImage(e.target.files[0])} /><br />
                    <button>Edit Product</button>
                </div>
            </form>
        </div>
    )
}

export default Editproduct;