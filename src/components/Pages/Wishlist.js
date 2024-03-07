import React from 'react'
import { useWishlist } from './Wishlistcontaxt';
import { MdDelete } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { useCart } from '../../components/Pages/Cartcontax';

function Wishlist() {

  const [wishlist, setWishlist] = useWishlist();
  const [cart, setcart] = useCart();

  function addtocart(val) {
    setcart([...cart, val])
    localStorage.setItem("cart", JSON.stringify([...cart, val]))
    alert('Item Added To Cart')
  }

  const removeWishlistItem = (pid) => {
    try {
      let mywishlist = [...wishlist]
      let index = mywishlist.findIndex(item => item._id === pid)
      mywishlist.splice(index, 1)
      setWishlist(mywishlist);
      saveWishlistToLocalStorage(mywishlist);
      if (mywishlist.length === 0) {
        clearWishlistLocalStorage();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const saveWishlistToLocalStorage = (wishlistData) => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistData));
  };

  const clearWishlistLocalStorage = () => {
    localStorage.removeItem('wishlist');
  };

  return (
    <div >
      {/* <div className='home-space'></div> */}
      <div>
        <div className='wishlist-header'>
          <CiHeart className='wishlist-icon' />
          <h1>MY WISHLIST</h1>
        </div>
      </div>
      <div className='wishlist-details'>
        <div className="wishlist-tbody">
          {
            wishlist?.map(item => (
              <div className='wishlist-img'>
                {item.category === 'Crystel' && (
                  <img src={`http://localhost:1202/uploads/Decor/Crystel/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Candlestand' && (
                  <img src={`http://localhost:1202/uploads/Decor/Candlestand/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Decorplates' && (
                  <img src={`http://localhost:1202/uploads/Decor/Decorplates/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Decorstorage' && (
                  <img src={`http://localhost:1202/uploads/Decor/Decorstorage/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Fineporcelain' && (
                  <img src={`http://localhost:1202/uploads/Decor/Fineporcelain/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Flowerarrang' && (
                  <img src={`http://localhost:1202/uploads/Decor/Flowerarrang/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Gingerjar' && (
                  <img src={`http://localhost:1202/uploads/Decor/Gingerjar/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Photofram' && (
                  <img src={`http://localhost:1202/uploads/Decor/Photofram/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Planter' && (
                  <img src={`http://localhost:1202/uploads/Decor/Planter/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Tabletopdecor' && (
                  <img src={`http://localhost:1202/uploads/Decor/Tabletopdecor/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Clock' && (
                  <img src={`http://localhost:1202/uploads/Decor/Clock/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Animal' && (
                  <img src={`http://localhost:1202/uploads/Decor/Animal/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Castiron' && (
                  <img src={`http://localhost:1202/uploads/Decor/Castiron/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Incenseholder' && (
                  <img src={`http://localhost:1202/uploads/Decor/Incenseholder/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'New Decor' && (
                  <img src={`http://localhost:1202/uploads/Newarrive/Newdecor/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'New Ligting' && (
                  <img src={`http://localhost:1202/uploads/Newarrive/Newligting/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'New Kitchne' && (
                  <img src={`http://localhost:1202/uploads/Newarrive/Newkitchne/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Cakestand' && (
                  <img src={`http://localhost:1202/uploads/Kitchen/Cakestand/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Dinnerplates' && (
                  <img src={`http://localhost:1202/uploads/Kitchen/Dinnerplates/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Doubleglass' && (
                  <img src={`http://localhost:1202/uploads/Kitchen/Doubleglass/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Drinkglass' && (
                  <img src={`http://localhost:1202/uploads/Kitchen/Drinkglass/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Jar' && (
                  <img src={`http://localhost:1202/uploads/Kitchen/Jar/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Mug' && (
                  <img src={`http://localhost:1202/uploads/Kitchen/Mug/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Teaware' && (
                  <img src={`http://localhost:1202/uploads/Kitchen/Teaware/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Bedroomlight' && (
                  <img src={`http://localhost:1202/uploads/Light/Bedroomlight/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Ceilinglight' && (
                  <img src={`http://localhost:1202/uploads/Light/Ceilinglight/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Crystallight' && (
                  <img src={`http://localhost:1202/uploads/Light/Crystallight/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Livingroom' && (
                  <img src={`http://localhost:1202/uploads/Light/Livingroom/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Tablelamp' && (
                  <img src={`http://localhost:1202/uploads/Light/Tablelamp/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Woodlamp' && (
                  <img src={`http://localhost:1202/uploads/Light/Woodlamp/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Wallsconses' && (
                  <img src={`http://localhost:1202/uploads/Light/Wallsconses/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Wallplates' && (
                  <img src={`http://localhost:1202/uploads/Walldecor/Wallplates/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Olipaint' && (
                  <img src={`http://localhost:1202/uploads/Walldecor/Olipaint/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Wallmirror' && (
                  <img src={`http://localhost:1202/uploads/Walldecor/Wallmirror/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Framedart' && (
                  <img src={`http://localhost:1202/uploads/Walldecor/Framedart/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Wallvases' && (
                  <img src={`http://localhost:1202/uploads/Walldecor/Wallvases/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Chair' && (
                  <img src={`http://localhost:1202/uploads/Furniture/Chair/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Tables' && (
                  <img src={`http://localhost:1202/uploads/Furniture/Tables/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Ottomans' && (
                  <img src={`http://localhost:1202/uploads/Furniture/Ottomans/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Bathset' && (
                  <img src={`http://localhost:1202/uploads/Bathdecor/Bathset/${item.productImage}`} alt={item.productName} />
                )}
                {item.category === 'Basin' && (
                  <img src={`http://localhost:1202/uploads/Bathdecor/Basin/${item.productImage}`} alt={item.productName} />
                )}
                <div className='wishlist-des'>
                  <div className='product-des'>
                    <div className='product-des1'>{item.productName}</div>
                    <div className='product-des2'>Price : {item.productPrice}</div>
                  </div>
                </div><br />
                <div className='wishlist-btn'>
                  <p className='wishlist-cart' onClick={() => addtocart(item)} >ADD TO CART</p>
                  <MdDelete className='wishlist-remove-btn' onClick={() => removeWishlistItem(item._id)} />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div >
  )
}

export default Wishlist;