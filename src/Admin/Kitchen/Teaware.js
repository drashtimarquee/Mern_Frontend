import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Kitchen from './Kitchen';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../../components/Pages/Cartcontax';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useWishlist } from '../../components/Pages/Wishlistcontaxt';

function Teaware() {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    const [cart, setcart] = useCart();
    const [wishlist, setWishlist] = useWishlist();
    const [hoveredProduct, setHoveredProduct] = useState(null);

    function addtowishlist(val) {
        setWishlist([...wishlist, val])
        localStorage.setItem("wishlist", JSON.stringify([...wishlist, val]))
        alert('Item Added To wishlist')
    }

    function addtocart(val) {
        setcart([...cart, val])
        localStorage.setItem("cart", JSON.stringify([...cart, val]))
        alert("item added to cart")
    }

    async function allteaware() {
        try {
            const response = await axios.get("http://localhost:1202/product/Teaware");
            if (response.status === 200) {
                setProduct(response.data.products);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        allteaware();
    }, []);

    return (
        <div className='decor-page'>
            <div className='decor'>
                <img className='home-img' src='Assets/Kitchen/Backteaware.webp' alt='backteaware' />
            </div>
            <Kitchen />
            <h1>TEAWARE SERIES</h1>
            <div className='decor-page-api '>
                {
                    product.map((val, index) => (
                        <tr key={index}>
                            <td>
                                {val.category === 'Teaware' && (
                                    <div className="product-container">
                                        <img src={`http://localhost:1202/uploads/Kitchen/Teaware/${val.productImage}`} alt={val.productName} />
                                        <NavLink onClick={() => addtowishlist(val)}>
                                            {hoveredProduct === index ? (
                                                <FaHeart className="favourite-icon" />
                                            ) : (
                                                <FaRegHeart className="favourite-icon" onMouseEnter={() => setHoveredProduct(index)} onMouseLeave={() => setHoveredProduct(null)} />
                                            )}
                                        </NavLink>
                                    </div>
                                )}
                                {val.category === 'Teaware' && (
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

export default Teaware;