import React from 'react'
import Newarrive from './Newarrive';
import { NavLink } from 'react-router-dom';

function Homenew() {
    return (
        <div className='candle-container'>
            <div className='decor'>
                <img className='home-img' src='Assets/Newback.webp' alt='newback' />
            </div>
            <Newarrive />
            <div className='candlestand-decor'>
                <div className='candlestand-image'>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newdecor'><img src="Assets/Decor/Candlestand/Candle10.jpg" alt='newcandle' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newdecor'><img src="Assets/Decor/Crystel/Crystal3.jpg" alt='newcrys' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newdecor'> <img src="Assets/Decor/Decorplates/Dplate1.jpg" alt='newdplate' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newdecor'> <img src="Assets/Decor/Decorstorage/Dstor4.jpg" alt='newdstore' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newdecor'> <img src="Assets/Decor/Fineporcelain/Finep4.jpg" alt='newfinep' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newdecor'> <img src="Assets/Decor/Flowerarrang/Flower4.jpg" alt='newflower' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newdecor'><img src="Assets/Decor/Gingerjar/Gjar1.jpg" alt='newgjar' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newdecor'> <img src="Assets/Decor/Photofram/Photo6.jpg" alt='newphoto' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newdecor'> <img src="Assets/Decor/Planter/Plant5.jpg" alt='newplant' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newdecor'> <img src="Assets/Decor/Tabletopdecor/Decor4.jpg" alt='newdecor' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newligting'> <img src="Assets/Lighting/badroom/Badlight6.jpg" alt='newbad' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newligting'> <img src="Assets/Lighting/Ceilinglight/ceiling4.jpg" alt='newceiling' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newligting'> <img src="Assets/Lighting/Crystal/Crystall2.jpg" alt='newcrystal' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newligting'> <img src="Assets/Lighting/Living/Living4.jpg" alt='newliving' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newligting'>  <img src="Assets/Lighting/Tablelamp/Light3.jpg" alt='newlight' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newligting'> <img src="Assets/Lighting/Woodlamp/Woodlamp4.jpg" alt='newwoodlamp' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newkitchen'><img src="Assets/Kitchen/Desert/Desert1.jpg" alt='newdesert' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newkitchen'> <img src="Assets/Kitchen/Dinnerplates/Dinnerplate4.jpg" alt='newdinnwe' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newkitchen'> <img src="Assets/Kitchen/Mug/Mug7.jpg" alt='newmug' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newkitchen'> <img src="Assets/Kitchen/Teaware/Tea9.jpg" alt='newtea' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newkitchen'> <img src="Assets/Kitchen/Jar/Jar4.jpg" alt='newjar' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newkitchen'><img src="Assets/Kitchen/Doubleglass/Double5.jpg" alt='newdouble' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newkitchen'> <img src="Assets/Kitchen/Teaware/Tea4.jpg" alt='newtea' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newkitchen'> <img src="Assets/Lighting/Ceilinglight/ceiling1.jpg" alt='newceiling' /></NavLink><p>See more</p>
                    </div>
                    <div className='candlestand-image-column'>
                        <NavLink to='/Newdecor'> <img src="Assets/Decor/Flowerarrang/Flower5.jpg" alt='newflower' /></NavLink><p>See more</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homenew;
