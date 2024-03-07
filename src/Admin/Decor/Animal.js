import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Decor from './Decor';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../../components/Pages/Cartcontax';
import { FaRegHeart } from "react-icons/fa";
import { useWishlist } from '../../components/Pages/Wishlistcontaxt';

function Animal() {
    const [product, setproduct] = useState([]);
    const navigate = useNavigate();
    const [cart, setcart] = useCart();
    const [isHovered, setIsHovered] = useState(false);
    const [wishlist , setWishlist] = useWishlist();

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
            {/* <div className='home-space'></div> */}
            <div className='decor'>
                <img className='home-img' src='Assets/Decor/Backanimal.webp' alt='' />
            </div>
            <Decor />
            <h1>ANIMALS AND BIRDS FIGURINES</h1>
            <div className='decor-page-api '>
                {
                    product.map((val) => (
                        <tr>
                            <td>
                                {val.category === 'Animal' && (
                                    <div className="product-container">
                                        <img src={`http://localhost:1202/uploads/Decor/Animal/${val.productImage}`} alt={val.productName} />
                                        <NavLink to='/Wishlist' onClick={() => addtowishlist(val)}>
                                            <FaRegHeart className={`favourite-icon ${isHovered ? 'hovered' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} />
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



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Decor from './Decor';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { useCart } from '../../components/Pages/Cartcontax';
// import { FaRegHeart } from "react-icons/fa";

// function Animal() {
//     const [product, setproduct] = useState([]);
//     const navigate = useNavigate();
//     const [cart, setcart] = useCart();


//     function addtocart(val) {
//         setcart([...cart, val])
//         localStorage.setItem("cart", JSON.stringify([...cart, val]))
//         alert('Item Added To Cart')
//     }

//     async function allanimal() {
//         try {
//             const response = await axios.get("http://localhost:1202/product/Animal");
//             if (response.status === 200) {
//                 setproduct(response.data.products);
//             }
//         } catch (error) {
//             console.log("Error Fetching Data : ", error)
//         }
//     }

//     useEffect(() => {
//         allanimal();
//     }, []);

//     return (
//         <div className='decor-page'>
//             <div className='decor'>
//                 <img className='home-img' src='Assets/Decor/Backanimal.webp' alt='' />
//             </div>
//             <Decor />
//             <h1>ANIMALS AND BIRDS FIGURINES</h1>
//             <div className='decor-page-api '>
//                 {
//                     product.map((val) => (
//                         <tr>
//                             <td>
//                                 {val.category === 'Animal' && (
//                                     <div className="product-container">
//                                         <img src={`http://localhost:1202/uploads/Decor/Animal/${val.productImage}`} alt={val.productName} />
//                                         <NavLink to='/Wishlist'><FaRegHeart className='favourite-icon' /></NavLink>
//                                     </div>
//                                 )}
//                                 {val.category === 'Animal' && (
//                                     <p>{val.productDescription}  <br />Price : {val.productPrice}</p>
//                                 )}
//                                 <div className='product-detail-cart'>
//                                     <p onClick={() => navigate(`/product/${val._id}`)}>More Details  </p>
//                                     <p onClick={() => addtocart(val)}>Add To Cart</p>
//                                     {/* <FaHeart className='favourite-icon' /> */}
//                                 </div>
//                             </td>
//                         </tr>
//                     ))
//                 }
//             </div>
//         </div >
//     );
// }

// export default Animal;