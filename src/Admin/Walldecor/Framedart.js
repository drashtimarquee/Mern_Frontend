import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Walldecor from './Walldecor';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../../components/Pages/Cartcontax';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useWishlist } from '../../components/Pages/Wishlistcontaxt';

function Framedart() {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    const [cart, setcart] = useCart();
    const [wishlist, setWishlist] = useWishlist();
    const [hoveredProduct, setHoveredProduct] = useState(null);

    function addtocart(val) {
        setcart([...cart, val])
        localStorage.setItem("cart", JSON.stringify([...cart, val]))
    }

    function addtowishlist(val) {
        setWishlist([...wishlist, val])
        localStorage.setItem("wishlist", JSON.stringify([...wishlist, val]))
    }

    async function allframedart() {
        try {
            const response = await axios.get("http://localhost:1202/product/Framedart");
            if (response.status === 200) {
                setProduct(response.data.products);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        allframedart();
    }, []);

    return (
        <div className='decor-page'>
            <div className='decor'>
                <img className='home-img' src='Assets/Wall/Backframed.webp' alt='backframe' />
            </div>
            <Walldecor />
            <h1>FRAMED WALL ART</h1>
            <div className='wishlist-tbody'>
                {
                    product.map((val, index) => (
                        <tr className='page-img' key={index}>
                            <td>
                                <div>
                                    {val.category === 'Framedart' && (
                                        <div onClick={() => navigate(`/product/${val._id}`)} className='page-imd-details'>
                                            <img src={`http://localhost:1202/uploads/Walldecor/Framedart/${val.productImage}`} alt={val.productName} />
                                        </div>
                                    )}
                                    {val.category === 'Framedart' && (
                                        <div className='product-desc'>
                                            <div className='product-desc1'>{val.productName}</div>
                                            <div className='product-desc2'>${val.productPrice}</div>
                                        </div>
                                    )}
                                    <div className='product-detail-cart'>
                                        <NavLink onClick={() => addtowishlist(val)}>
                                            {hoveredProduct === index ? (
                                                <FaHeart className="favourite-icon" />
                                            ) : (
                                                <FaRegHeart className="favourite-icon" onMouseEnter={() => setHoveredProduct(index)} onMouseLeave={() => setHoveredProduct(null)} />
                                            )}
                                        </NavLink>
                                        <button className='page-btn' onClick={() => addtocart(val)}>Add To Cart</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </div>
        </div >
    );
}

export default Framedart;