import { NavLink } from "react-router-dom";
import { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";

function Decor() {
    const [imageNum, setImageNum] = useState(1);

    return (
        <div>
            <div className='home-horijontal '>
                <div className='decor-list'>
                <SimpleImageSlider
                width={896}
                height={504}
                images={[
                    { url:<NavLink className='decor-link' to="/Gingerjar"><img src="Assets/Decor/Gingerjar/Gjar1.jpg" className='decor-img' alt='jar' />GINGER JARS</NavLink>},
                    { url:<NavLink className='decor-link' to="/Gingerjar"><img src="Assets/Decor/Gingerjar/Gjar1.jpg" className='decor-img' alt='jar' />GINGER JARS</NavLink>},
                    { url:<NavLink className='decor-link' to="/Gingerjar"><img src="Assets/Decor/Gingerjar/Gjar1.jpg" className='decor-img' alt='jar' />GINGER JARS</NavLink>},
  { url: "images/4.jpg" },
  { url: "images/5.jpg" },
  { url: "images/6.jpg" },
  { url: "images/7.jpg" },
                ]}
                showBullets={true}
                showNavs={true}
            />
                    <NavLink className='decor-link' to="/Gingerjar"><img src="Assets/Decor/Gingerjar/Gjar1.jpg" className='decor-img' alt='jar' />GINGER JARS</NavLink>
                    <NavLink className='decor-link' to="/Fineporcelain"><img src="Assets/Decor/Fineporcelain/Finep1.jpg" className='decor-img' alt='fine' />HUMAN<br /> FIGURINES</NavLink>
                    <NavLink className='decor-link' to="/Candlestand"><img src="Assets/Decor/Candlestand/Candle1.jpg" className='decor-img' alt='candle' />CANDLE <br />STANDS</NavLink>
                    <NavLink className='decor-link' to="/Photofram"><img src="Assets/Decor/Photofram/Photo1.jpg" className='decor-img' alt='ph' />PHOTO <br />FRAMES</NavLink>
                    <NavLink className='decor-link' to="/Crystel"><img src="Assets/Decor/Crystel/Crystal1.jpg" className='decor-img' alt='crystal' />CRYSTAL <br />SCULPTURES</NavLink>
                    <NavLink className='decor-link' to="/Flowerarrang"><img src="Assets/Decor/Flowerarrang/Flower1.jpg" className='decor-img' alt='flower' />FLOWER<br /> ARRANGE </NavLink>
                    <NavLink className='decor-link' to="/Decorplates"><img src="Assets/Decor/Decorplates/Dplate1.jpg" className='decor-img' alt='dplate' />DECORATIVE<br /> PLATES</NavLink>
                    <NavLink className='decor-link' to="/Planter"><img src="Assets/Decor/Planter/Plant1.jpg" className='decor-img' alt='plant' />PLANTERS & <br />ACCESSORIES</NavLink>
                    <NavLink className='decor-link' to="/Decorstorage"><img src="Assets/Decor/Decorstorage/Dstor1.jpg" className='decor-img' alt='dstore' />DECORATIVE<br /> STORAGE</NavLink>
                    <NavLink className='decor-link' to="/Tabletopdecor"><img src="Assets/Decor/Tabletopdecor/Decor1.jpg" className='decor-img' alt='decor' />TABLE TOP<br /> DECOR</NavLink>
                    <NavLink className='decor-link' to="/Castiron"><img src="Assets/Decor/Decorstorage/Dstor1.jpg" className='decor-img' alt='castiron' />CAST<br />IRON</NavLink>
                    <NavLink className='decor-link' to="/Clock"><img src="Assets/Decor/Clock/Clock4.jpg" className='decor-img' alt='clock' />DECOR<br /> CLOCKS</NavLink>
                    <NavLink className='decor-link' to="/Animal"><img src="Assets/Decor/Animal/Animal1.jpg" className='decor-img' alt='animal' />ANIMALS<br /> ,BIRDS <br />FIGURE</NavLink>
                    <NavLink className='decor-link' to="/Incenseholder"><img src="Assets/Decor/Incenser/Incenser2.jpg" className='homepage-img' alt='clock' />Incense holder  </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Decor;