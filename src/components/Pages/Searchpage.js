import React from 'react'
import { useSearch } from './Searchcontax';
import { useNavigate } from 'react-router-dom';
import { useCart } from './Cartcontax';

function Searchpage() {
    const [values, setValues] = useSearch();
    const navigate = useNavigate();
    const [cart, setcart] = useCart();
    function addtocart(val) {
        setcart([...cart, val])
        localStorage.setItem("cart", JSON.stringify([...cart, val]))
        alert("item added to cart")
    }

    return (
        <div className='text-container' >
            <h4>SEARCH FOR <span>"{values.keyword}"</span></h4>
            <div className='search-result'>
                {
                    values.result?.map((product) => (
                        <div key={product._id}>{product.name}
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
                            <div className='product-des'>
                                <div className='product-des1'>{product.productName}</div>
                                <div className='product-des2'>{product.productPrice}</div>
                            </div>
                            <div className='product-detail-cart'>
                                <p onClick={() => navigate(`/product/${product._id}`)}>More Details  </p>
                                <p onClick={() => addtocart(product)}>Add To Cart</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}
export default Searchpage;