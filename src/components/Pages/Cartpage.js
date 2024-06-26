import { useCart } from './Cartcontax';
import { MdDelete } from "react-icons/md";
import Userorderpage from '../../user/Userorderpage';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Cartpage() {
  const [cart, setCart] = useCart();
  const [total, setTotal] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    setTotal(totalprice());
  }, [cart]);

  const initializedCart = cart.map(item => ({
    ...item,
    count: item.count || item.quantity || 1
  }));

  function addcart() {
    navigate('/');
  }

  const increment = (pid) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === pid ? { ...item, count: (item.count || 1) + 1 } : item
      )
    );
  };

  const decrement = (pid) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === pid ? { ...item, count: Math.max((item.count || 1) - 1, 1) } : item
      )
    );
  };

  const totalprice = () => {
    try {
      let total = 0;
      initializedCart.forEach(item => {
        total += item.productPrice * item.count;
      });
      return total;
    } catch (error) {
      console.log(error);
    }
  };

  const removeCartItem = (pid) => {
    try {
      let mycart = [...cart]
      let index = mycart.findIndex(item => item._id === pid)
      mycart.splice(index, 1)
      setCart(mycart);
      saveCartToLocalStorage(mycart);
      if (mycart.length === 0) {
        clearCartLocalStorage();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const saveCartToLocalStorage = (cartData) => {
    localStorage.setItem('cart', JSON.stringify(cartData));
  };

  const clearCartLocalStorage = () => {
    localStorage.removeItem('cart');
  };


  return (
    <div className='cart-page'>
      {cart.length === 0 ? (
        <div className='container-cart'>
          <div className='cart-div-a'>
            <img src='Assets/shopping-cart2.png' alt='' className='cart-page-img' />
          </div>
          <div className='cart-div-b'>
            <h1>Your Cart is Empty!</h1><br />
            <h6>Must add items on the cart before you proceed checkout.</h6><br />
            <button className='empty-cart-button' onClick={() => addcart()}>RETURN TO SHOP</button>
          </div>
        </div>
      ) : (
        <div className='cart-details'>
          <div className='cart-field'>
            <table>
              <tbody className="produtlist-tbody">
                {
                  initializedCart?.map(product => (
                    <tr key={product._id}>
                      <td>
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
                      </td>
                      <td>{product.productName}<br />${product.productPrice}</td>
                      <td>{product.category}</td>
                      <td>
                        <div className='inc-dec'>
                          <input type="button" value="+" onClick={() => increment(product._id)} />
                          <span>{product.count || product.quantity}</span>
                          <input type="button" value="-" onClick={() => decrement(product._id)} />
                        </div>
                      </td>
                      <td>${product.productPrice * product.count}</td>
                      <td><p className='cart-remove-btn' onClick={() => removeCartItem(product._id)}><MdDelete /></p></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      )}
      {cart.length > 0 && (
        <div className='cart-total'>
          <h4>Total : ${total}</h4>
        </div>
      )}
      <div className='cart-form'>
        {cart.length > 0 && <Userorderpage />}
      </div>
    </div>
  )
}

export default Cartpage;