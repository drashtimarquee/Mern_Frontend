import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Furniture from './Furniture';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../../components/Pages/Cartcontax';
import { FaRegHeart } from "react-icons/fa";
import { useWishlist } from '../../components/Pages/Wishlistcontaxt';

function Table() {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    const [cart, setcart] = useCart();
    const [isHovered, setIsHovered] = useState(false);
    const [wishlist, setWishlist] = useWishlist();

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

    async function alltable() {
        try {
            const response = await axios.get("http://localhost:1202/product/Tables");
            if (response.status === 200) {
                setProduct(response.data.products);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        alltable();
    }, []);

    return (
        <div className='decor-page'>
            {/* <div className='home-space'></div> */}
            <div className='decor'>
                <img className='home-img' src='Assets/Furniture/Backtable.webp' alt='table' />
            </div>
            <Furniture />
            <h1>TABLES</h1>
            <div className='decor-page-api '>
                {
                    product.map((val) => (
                        <tr>
                            <td>
                                {val.category === 'Tables' && (
                                    <div className="product-container">
                                        <img src={`http://localhost:1202/uploads/Furniture/Tables/${val.productImage}`} alt={val.productName} />
                                        <NavLink to='/Wishlist' onClick={() => addtowishlist(val)}>
                                            <FaRegHeart className={`favourite-icon ${isHovered ? 'hovered' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} />
                                        </NavLink>
                                    </div>
                                )}
                                {val.category === 'Tables' && (
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

export default Table;