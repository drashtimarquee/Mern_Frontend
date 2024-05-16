import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../components/Pages/Cartcontax';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";


function Productdetails() {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const [cart, setCart] = useCart();
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const [starCount, setStarCount] = useState(0);

    function addtocart(product, quantity) {
        const itemToAdd = { ...product, quantity };
        setCart([...cart, itemToAdd]);
        localStorage.setItem("cart", JSON.stringify([...cart, itemToAdd]));
    }

    const singleproduct = async () => {
        const { data } = await axios.get(`http://localhost:1202/singleproduct/${id}`);
        console.log(data)
        setProduct(data.product)
    }

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const submitReview = async () => {
        try {
            const reviewData = {
                productId: id,
                rating,
                comment,
                starCount
            };
            const response = await axios.post('http://localhost:1202/review', reviewData);
            console.log('Review submitted:', response.data);
            setComment('');
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    }

    useEffect(() => {
        singleproduct();
    }, [])

    useEffect(() => {
        const existingProduct = cart.find(item => item._id === id);
        if (existingProduct) {
            setQuantity(existingProduct.quantity);
        }
    }, [cart, id]);

    const totalPrice = product.productPrice * quantity;

    return (
        <div className='product-details'>
            <div className='product-details-img'>
                {product.category === 'Crystal' && (
                    <img src={`http://localhost:1202/uploads/Decor/Crystel/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Candlestand' && (
                    <img src={`http://localhost:1202/uploads/Decor/Candlestand/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Decorplates' && (
                    <img src={`http://localhost:1202/uploads/Decor/Decorplates/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Decorstorage' && (
                    <img src={`http://localhost:1202/uploads/Decor/Decorstorage/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Fineporcelain' && (
                    <img src={`http://localhost:1202/uploads/Decor/Fineporcelain/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Flowerarrang' && (
                    <img src={`http://localhost:1202/uploads/Decor/Flowerarrang/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Gingerjar' && (
                    <img src={`http://localhost:1202/uploads/Decor/Gingerjar/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Photofram' && (
                    <img src={`http://localhost:1202/uploads/Decor/Photofram/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Planter' && (
                    <img src={`http://localhost:1202/uploads/Decor/Planter/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Tabletopdecor' && (
                    <img src={`http://localhost:1202/uploads/Decor/Tabletopdecor/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Clock' && (
                    <img src={`http://localhost:1202/uploads/Decor/Clock/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Animal' && (
                    <img src={`http://localhost:1202/uploads/Decor/Animal/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Castiron' && (
                    <img src={`http://localhost:1202/uploads/Decor/Castiron/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Incenseholder' && (
                    <img src={`http://localhost:1202/uploads/Decor/Incenseholder/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'New Decor' && (
                    <img src={`http://localhost:1202/uploads/Newarrive/Newdecor/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'New Ligting' && (
                    <img src={`http://localhost:1202/uploads/Newarrive/Newligting/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'New Kitchne' && (
                    <img src={`http://localhost:1202/uploads/Newarrive/Newkitchne/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Cakestand' && (
                    <img src={`http://localhost:1202/uploads/Kitchen/Cakestand/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Dinnerplates' && (
                    <img src={`http://localhost:1202/uploads/Kitchen/Dinnerplates/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Doubleglass' && (
                    <img src={`http://localhost:1202/uploads/Kitchen/Doubleglass/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Drinkglass' && (
                    <img src={`http://localhost:1202/uploads/Kitchen/Drinkglass/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Jar' && (
                    <img src={`http://localhost:1202/uploads/Kitchen/Jar/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Mug' && (
                    <img src={`http://localhost:1202/uploads/Kitchen/Mug/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Teaware' && (
                    <img src={`http://localhost:1202/uploads/Kitchen/Teaware/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Bedroomlight' && (
                    <img src={`http://localhost:1202/uploads/Light/Bedroomlight/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Ceilinglight' && (
                    <img src={`http://localhost:1202/uploads/Light/Ceilinglight/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Crystallight' && (
                    <img src={`http://localhost:1202/uploads/Light/Crystallight/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Livingroom' && (
                    <img src={`http://localhost:1202/uploads/Light/Livingroom/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Tablelamp' && (
                    <img src={`http://localhost:1202/uploads/Light/Tablelamp/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Woodlamp' && (
                    <img src={`http://localhost:1202/uploads/Light/Woodlamp/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Wallsconses' && (
                    <img src={`http://localhost:1202/uploads/Light/Wallsconses/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Wallplates' && (
                    <img src={`http://localhost:1202/uploads/Walldecor/Wallplates/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Olipaint' && (
                    <img src={`http://localhost:1202/uploads/Walldecor/Olipaint/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Wallmirror' && (
                    <img src={`http://localhost:1202/uploads/Walldecor/Wallmirror/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Framedart' && (
                    <img src={`http://localhost:1202/uploads/Walldecor/Framedart/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Wallvases' && (
                    <img src={`http://localhost:1202/uploads/Walldecor/Wallvases/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Chair' && (
                    <img src={`http://localhost:1202/uploads/Furniture/Chair/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Tables' && (
                    <img src={`http://localhost:1202/uploads/Furniture/Tables/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Ottomans' && (
                    <img src={`http://localhost:1202/uploads/Furniture/Ottomans/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Bathset' && (
                    <img src={`http://localhost:1202/uploads/Bathdecor/Bathset/${product.productImage}`} alt={product.productName} />
                )}
                {product.category === 'Basin' && (
                    <img src={`http://localhost:1202/uploads/Bathdecor/Basin/${product.productImage}`} alt={product.productName} />
                )}
            </div>
            <div className='product-all-details'>
                <h2>{product.productName}</h2>
                <div className='pro-details-label'>
                    <div className='product-price'>
                        <label>PRICE</label>
                        <h3>${product.productPrice}.00</h3>
                    </div>
                    <div>
                        <label>QUANTITY</label>
                        <div className='prod-details-qty'>
                            <div className='product-desc1' onClick={incrementQuantity}>+</div>
                            <span>{quantity}</span>
                            <div className='product-desc2' onClick={decrementQuantity}>-</div>
                        </div>
                    </div>
                </div>
                <div className='pro-details-label'>
                    <div>
                        <label>DESCRIPTION</label>
                        <h4>{product.productDescription}</h4><br /><br />
                        <h4>100% Original Products.</h4>
                        <h4>Pay on delivery might be available.</h4>
                        <h4>Easy 14 days returns and exchanges.</h4>
                    </div>
                </div>
                <div className='pro-details-label'>
                    <div>
                        <label>CATEGORY</label>
                        <h4>{product.category}</h4>
                    </div>
                </div>
                <div className='pro-details-label'>
                    <div className='total-price'>
                        <label>TOTAL PRICE</label>
                        <h3>${totalPrice.toFixed(2)}</h3>
                    </div>
                </div>
                <button className='product-btn' onClick={() => addtocart(product, quantity)}>Add To Cart</button>
                <div className='pro-details-label'>
                    <div>
                        <label>COMMENT</label><br />
                        <textarea className='product-details-input' value={comment} onChange={(e) => setComment(e.target.value)} /><br />
                        <button onClick={submitReview}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productdetails;