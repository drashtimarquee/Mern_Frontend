import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Decor from './Decor';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../../components/Pages/Cartcontax';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useWishlist } from '../../components/Pages/Wishlistcontaxt';

function Animal() {
    const [product, setproduct] = useState([]);
    const navigate = useNavigate();
    const [cart, setcart] = useCart();
    const [wishlist, setWishlist] = useWishlist();
    const [hoveredProduct, setHoveredProduct] = useState(null);

    function addtocart(val) {
        setcart([...cart, val])
        localStorage.setItem("cart", JSON.stringify([...cart, val]))
        alert('Item Added To Cart')
    }

    function addtowishlist(val) {
        setWishlist([...wishlist, val])
        localStorage.setItem("wishlist", JSON.stringify([...wishlist, val]))
        alert('Item Added To wishlist')
    }

    async function allanimal() {
        try {
            const response = await axios.get("http://localhost:1202/product/Animal");
            if (response.status === 200) {
                setproduct(response.data.products);
            }
        } catch (error) {
            console.log("Error Fetching Data : ", error)
        }
    }

    useEffect(() => {
        allanimal();
    }, []);

    return (
        <div className='decor-page'>
            <div className='decor'>
                <img className='home-img' src='Assets/Decor/Backanimal.webp' alt='backaniml' />
            </div>
            <Decor />
            <h1>ANIMALS AND BIRDS FIGURINES</h1>
            <div className='decor-page-api '>
                {
                    product.map((val, index) => (
                        <tr key={index}>
                            <td>
                                {val.category === 'Animal' && (
                                    <div className="product-container">
                                        <img src={`http://localhost:1202/uploads/Decor/Animal/${val.productImage}`} alt={val.productName} />
                                        <NavLink onClick={() => addtowishlist(val)}>
                                            {hoveredProduct === index ? (
                                                <FaHeart className="favourite-icon" />
                                            ) : (
                                                <FaRegHeart className="favourite-icon" onMouseEnter={() => setHoveredProduct(index)} onMouseLeave={() => setHoveredProduct(null)} />
                                            )}
                                        </NavLink>
                                    </div>
                                )}
                                {val.category === 'Animal' && (
                                    <div className='product-des'>
                                        <div className='product-des1'>{val.productName}</div>
                                        <div className='product-des2'>Price : {val.productPrice}</div>
                                    </div>
                                )}
                                <div className='product-detail-cart'>
                                    <p onClick={() => navigate(`/product/${val._id}`)}>More Details  </p>
                                    <p onClick={() => addtocart(val)}>Add To Cart</p>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </div>
        </div >
    );
}

export default Animal;