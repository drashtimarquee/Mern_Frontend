import { NavLink } from "react-router-dom";

function Homepage() {
  return (
    <div className='homepage'>
      {/* <div className='home-space'></div> */}
      <div className='home-horijontal '>
        <div className='home-list'>
          <NavLink className='decor-link' to="/Homenew"><img src="Assets/Lighting/badroom/Badlight6.jpg" className='homepage-img' alt='jar' />All new!</NavLink>
          <NavLink className='decor-link' to="/Tablelamp"><img src='Assets/Lighting/Tablelamp/Light3.jpg' className='homepage-img' alt='fine' />Table lamp</NavLink>
          <NavLink className='decor-link' to="/Home"><img src="Assets/Decor/Flowerarrang/Flower4.jpg" className='homepage-img' alt='candle' />All decor!</NavLink>
          <NavLink className='decor-link' to="/Homekitchen"><img src="Assets/Kitchen/Mug/Mug12.jpg" className='homepage-img' alt='ph' />All kitchen!</NavLink>
          <NavLink className='decor-link' to="/Homelight"><img src="Assets/Lighting/Woodlamp/Woodlamp6.jpg" className='homepage-img' alt='crystal' />All  light</NavLink>
          <NavLink className='decor-link' to="/Homefurniture"><img src="Assets/Furniture/Table/Table4.jpg" className='homepage-img' alt='flower' />All furniture</NavLink>
          <NavLink className='decor-link' to="/Homewall"><img src="Assets/Wall/Wallmirror/Mirror10.jpg" className='homepage-img' alt='dplate' />All Wall decor</NavLink>
          <NavLink className='decor-link' to="/Homebathdecor"><img src="Assets/Bathdecor/Bathset/Bathset7.jpg" className='homepage-img' alt='plant' />All bathDecor</NavLink>
          <NavLink className='decor-link' to="/Castiron"><img src="Assets/Decor/Castiron/Cast1.jpg" className='homepage-img' alt='dstore' />Cast Iron</NavLink>
          <NavLink className='decor-link' to="/Tabletopdecor"><img src="Assets/Decor/Tabletopdecor/Decor1.jpg" className='homepage-img' alt='decor' />Table decor</NavLink>
          <NavLink className='decor-link' to="/Clock"><img src="Assets/Decor/Clock/Clock4.jpg" className='homepage-img' alt='clock' />Decor clocks</NavLink>
          <NavLink className='decor-link' to="/Incenseholder"><img src="Assets/Decor/Incenser/Incenser2.jpg" className='homepage-img' alt='clock' />Incense holder  </NavLink>
        </div>
      </div>
      <div>
        <NavLink to='/Newligting'><img src='Assets/Home.WEBP' className='home-img1' alt='' /></NavLink>
        <div className="home-text">
          <h3>Forged Beauty</h3>
          <p>The Art of Cast Iron</p>
          <NavLink to=''>SHOP NOW</NavLink>
        </div>
      </div>
      <div className='homepage2'>
        <div className='home-image-column'>
          <NavLink to="/Drinkglass"><img src="Assets/Kitchen/Drinkglass/Drinkglass7.jpg" alt='' /><p>DRINKING GLASS</p></NavLink>
        </div>
        <div className='home-image-column'>
          <NavLink to="/Teaware"><img src="Assets/Kitchen/Teaware/Tea4.jpg" alt='' /><p>TEAWARE</p></NavLink>
        </div>
        <div className='home-image-column '>
          <NavLink to="/Mug"><img src="Assets/Kitchen/Mug/Mug1.jpg" alt='' /><p>MUGS & TEA CUPS</p></NavLink>
        </div>
        <div className='home-image-column'>
          <NavLink to="/Jar"><img src="Assets/Kitchen/Jar/Jar8.jpg" alt='' /><p>KITCHEN JAR</p></NavLink>
        </div>
        <div className='home-image-column'>
          <NavLink to="/Dinnerplates"><img src="Assets/Kitchen/Dinnerplates/Dinnerplate1.png" alt='' /><p>DiNNER PLATES</p></NavLink>
        </div>
        <div className='home-image-column'>
          <NavLink to="/Cakestand"><img src="Assets/Kitchen/Desert/Desert4.jpg" alt='' /><p>CAKE & TIERED STAND</p></NavLink>
        </div>
      </div>
      <div>
        <NavLink to='/Homelight'><img src='Assets/Home2.JPG' className='home-img2' alt='' /></NavLink>
        <div className='homepage2'>
          <div className='home-image-column'>
            <NavLink to="/Bedlight"><img src="Assets/Lighting/badroom/Badlight2.jpg" alt='' /><p>BEDROOM LAMPS</p></NavLink>
          </div>
          <div className='home-image-column'>
            <NavLink to="/Ceilinglight"><img src="Assets/Lighting/Ceilinglight/ceiling4.jpg" alt='' /><p>CEILING LIGHT</p></NavLink>
          </div>
          <div className='home-image-column'>
            <NavLink to="/Crystallamp"><img src="Assets/Lighting/Crystal/Crystall3.jpg" alt='' /><p>CRYSTAL LAMPS</p></NavLink>
          </div>
          <div className='home-image-column'>
            <NavLink to="/Livinglight"><img src="Assets/Lighting/Living/Living4.jpg" alt='' /><p>LIVINGROOM LAMPS</p></NavLink>
          </div>
          <div className='home-image-column'>
            <NavLink to="/Tablelamp"><img src="Assets/Lighting/Tablelamp/Light6.jpg" alt='' /><p>TABLE LAMPS</p></NavLink>
          </div>
          <div className='home-image-column'>
            <NavLink to="/Woodlamp"><img src="Assets/Lighting/Woodlamp/Woodlamp4.jpg" alt='' /><p>WOODEN LAMPS</p></NavLink>
          </div>
        </div>
      </div>
      <div>
        <NavLink to='/Home'><img src='Assets/Home3.WEBP' className='home-img2' alt='' /></NavLink>
        <div className='homepage2'>
          <div className='home-image-column'>
            <NavLink to="/Chair"><img src="Assets/Furniture/Chair/Chair6.jpg" alt='' /><p>CHAIRS</p></NavLink>
          </div>
          <div className='home-image-column'>
            <NavLink to="/Wallmirror"><img src="Assets/Wall/Wallmirror/Mirror1.jpg" alt='' /><p>MIRROR</p></NavLink>
          </div>
          <div className='home-image-column'>
            <NavLink to="/Crystallamp"><img src="Assets/Lighting/Crystal/Crystall3.jpg" alt='' /><p>CRYSTAL LIGHT</p></NavLink>
          </div>
          <div className='home-image-column'>
            <NavLink to="/Tabletopdecor"><img src="Assets/Decor/Tabletopdecor/Decor4.jpg" alt='' /><p>TABLE TOP DECOR</p></NavLink>
          </div>
          <div className='home-image-column'>
            <NavLink to='/'><img src="Assets/Decor/Fineporcelain/Finep4.jpg" alt='' /><p>FINE PORCELAIN FIGURINES</p></NavLink>
          </div>
          <div className='home-image-column'>
            <h2 >Your Table ,Your<br />Masterpiece</h2>
            <h5>Discover the perfect piecefor your<br />tabletops with our extensive
              range of <br />tabletop decor</h5>
          </div>
        </div>
      </div>
      <div>
        <div className='store-text'>
          <div className='store-list2'>
            {/* <img src="Assets/Wall/Wallvases/Vas3.jpg" alt='' /> */}
            <img src='Assets/Wall/Wallvases/Vas3.jpg' alt='stor' />
            <img src='Assets/Wall/Wallplates/Wallplate8.jpg' alt='stor' />
            <img src='Assets/Wall/Framedart/Frame2.jpg' alt='stor' />
            <img src="Assets/Wall/Olipaint/Oil4.jpg" alt='stor' />
            <img src='Assets/Wall/Wallmirror/Mirror6.jpg' alt='stor' />
            <img src='Assets/Wall/Wallvases/Vas1.jpg' alt='stor' />
          </div>
        </div>
      </div>
      <div className="home-img2">
        <div className="home-footer">
          <div className='home-image-column-footer'>
            <NavLink to="/Clock"><img src="Assets/Decor/Clock/Clock1.jpg" className="home-footer-img" alt='' /><p>CLOCK</p></NavLink>
          </div>
          <div className='home-image-column-footer'>
            <NavLink to="/Photofram"><img src="Assets/Decor/Photofram/Photo4.jpg" className="home-footer-img" alt='' /><p>PHOTO FRAME</p></NavLink>
          </div>
          <div className='home-image-column-footer'>
            <NavLink to="/Ottomans"><img src="Assets/Furniture/Ottomans/Ottomans9.jpg" className="home-footer-img" alt='' /><p>OTTOMANS</p></NavLink>
          </div>
          <div className='home-image-column-footer'>
            <NavLink to="/Mug"><img src="Assets/Kitchen/Mug/Mug6.jpg" className="home-footer-img" alt='' /><p>TEA CUPS & MUGS</p></NavLink>
          </div>
          <div className='home-image-column-footer'>
            <NavLink to="/Bedlight"><img src="Assets/Lighting/Badroom/Badlight6.jpg" className="home-footer-img" alt='' /><p>BADROOM  LIGHT</p></NavLink>
          </div>
          <div className='home-image-column-footer'>
            <NavLink to="/Wallmirror"><img src="Assets/Wall/Wallmirror/Mirror4.jpg" className="home-footer-img" alt='' /><p>WALL MIRROR</p></NavLink>
          </div>
          <div className='home-image-column-footer'>
            <NavLink to="/Wallvases"><img src="Assets/Wall/Wallvases/Vas9.jpg" className="home-footer-img" alt='' /><p>WALL VASES</p></NavLink>
          </div>
          <div className='home-image-column-footer'>
            <NavLink to="/Desert"><img src="Assets/Kitchen/Desert/Desert4.jpg" className="home-footer-img" alt='' /><p>CAKESTAND & DESERT</p></NavLink>
          </div>
          <div className='home-image-column-footer'>
            <NavLink to="/Woodlamp"><img src="Assets/Lighting/Woodlamp/Woodlamp6.jpg" className="home-footer-img" alt='' /><p>WOODLAMP</p></NavLink>
          </div>
          <div className='home-image-column-footer'>
            <NavLink to="/Candlestand"><img src="Assets/Decor/Candlestand/Candle10.jpg" className="home-footer-img" alt='' /><p>CANDLESTAND</p></NavLink>
          </div>
          <div className='home-image-column-footer'>
            <NavLink to="/Bathset"><img src="Assets/Bathdecor/Bathset/Bathset6.jpg" className="home-footer-img" alt='' /><p>BATHSET</p></NavLink>
          </div>
          <div className='home-image-column-footer'>
            <NavLink to="/Wallsconses"><img src="Assets/Lighting/Wallscenses/Wallsc1.jpg" className="home-footer-img" alt='' /><p>WALL SCENSES</p></NavLink>
          </div>
          <div className='home-image-column-footer'>
            <NavLink to="/Incenseholder"><img src="Assets/Decor/Incenser/Incenser4.jpg" className="home-footer-img" alt='' /><p>INCENSE HOLDER</p></NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage;
