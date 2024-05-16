import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useAuth } from './components/Pages/Usercontax';
import Header from './components/Navbar/Header'
import Admin from './Admin/Admin';
import Login from './components/Pages/Login';
import Categories from './components/Pages/Categories';
import Signup from './components/Pages/Signup';
import Userlist from './components/Pages/Userlist';
import Homepage from './components/Pages/Homepage';
import Privateroute from './components/route/Privateroute';
import Userdashboard from './user/Userdashboard';
import Admindashboard from './Admin/Admindashboard';
import Edituser from './user/Edituser';
import Addproduct from './Admin/Addproduct';
import Editproduct from './Admin/Editproduct';
import Crystel from './Admin/Decor/Crystel';
import Productlist from './Admin/Productlist';
import Decor from './Admin/Decor/Decor';
import Candlestand from './Admin/Decor/Candlestand';
import Decorplates from './Admin/Decor/Decorplates';
import Gingerjar from './Admin/Decor/Gingerjar';
import Decorstorage from './Admin/Decor/Decorstorage';
import Fineporcelain from './Admin/Decor/Fineporcelain';
import Photofram from './Admin/Decor/Photofram';
import Flowerarrang from './Admin/Decor/Flowerarrang';
import Planter from './Admin/Decor/Planter';
import Tabletopdecor from './Admin/Decor/Tabletopdecor';
import Newarrive from './Admin/Newarrive/Newarrive';
import Newdecor from './Admin/Newarrive/Newdecor';
import Newligting from './Admin/Newarrive/Newligting';
import Newkitchen from './Admin/Newarrive/Newkitchne';
import Kitchen from './Admin/Kitchen/Kitchen';
import Cakestand from './Admin/Kitchen/Cakestands';
import Dinnerplates from './Admin/Kitchen/Dinnerplates';
import Mug from './Admin/Kitchen/Mug';
import Teaware from './Admin/Kitchen/Teaware';
import Drinkglass from './Admin/Kitchen/Drinkglass';
import Jar from './Admin/Kitchen/Jar';
import Doubleglass from './Admin/Kitchen/Doubleglass';
import Light from './Admin/Light/Light';
import Bedlight from './Admin/Light/Bedlight';
import Ceilinglight from './Admin/Light/Ceilinglight';
import Crystallamp from './Admin/Light/Crystallamp';
import Livinglight from './Admin/Light/Livinglight';
import Tablelamp from './Admin/Light/Tablelamp';
import Wallsconses from './Admin/Light/Wallsconses';
import Woodlamp from './Admin/Light/Woodlamp';
import Walldecor from './Admin/Walldecor/Walldecor';
import Wallplates from './Admin/Walldecor/Wallplates';
import Framedart from './Admin/Walldecor/Framedart';
import Olipaint from './Admin/Walldecor/Olipaint';
import Wallmirror from './Admin/Walldecor/Wallmirror';
import Wallvases from './Admin/Walldecor/Wallvases';
import Furniture from './Admin/Furniture/Furniture';
import Chair from './Admin/Furniture/Chair';
import Table from './Admin/Furniture/Table';
import Ottomans from './Admin/Furniture/Ottomans';
import Productdetails from './Admin/Productdetails';
import Cartpage from './components/Pages/Cartpage';
import Clock from './Admin/Decor/Clock'
import Home from './Admin/Decor/Home';
import Homefurniture from './Admin/Furniture/Homefurniture';
import Homekitchen from './Admin/Kitchen/Homekitchen';
import Homelight from './Admin/Light/Homelight';
import Homenew from './Admin/Newarrive/Homenew';
import Homewall from './Admin/Walldecor/Homewall';
import Animal from './Admin/Decor/Animal';
import Footer from './components/Pages/Footer';
import About from './components/Pages/About';
import Condition from './components/Pages/Condition';
import Privacy from './components/Pages/Privacy';
import Return from './components/Pages/Return';
import Refund from './components/Pages/Refund';
import Blocks from './components/Pages/Blocks';
import Contact from './components/Pages/Contact';
import Stores from './components/Pages/Stores';
import Searchpages from './components/Pages/Searchpage';
import Searchpage from './components/Pages/Searchinput';
import Forgotpswd from './components/Pages/Forgotpswd';
import Wishlist from './components/Pages/Wishlist';
import Userorderpage from './user/Userorderpage';
import Success from './components/Payment/Success';
import Cancle from './components/Payment/Cancle';
import Orderlist from './Admin/Orderlist';
import Userorderbill from './user/Userorderbill';
import Homebathdecor from './Admin/Bathdecor/Homebathdecor';
import Bathset from './Admin/Bathdecor/Bathset';
import Basin from './Admin/Bathdecor/Basin';
import Castiron from './Admin/Decor/Castiron';
import Incenseholder from './Admin/Decor/Incenseholder';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [userauth, setUserauth] = useAuth();
  return (
    <div className="App">

      <BrowserRouter>
        {userauth?.user?.Role === 1 ? null : <div className='home-space'></div>}
        {userauth?.user?.Role === 1 ? null : <Header />}
        {userauth?.user?.Role === 1 ? null : <Searchpage />}
        <ScrollToTop />
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/Categ' element={<Categories />} />
          <Route path='/Decor' element={<Decor />} ></Route>
          <Route path='/Crystel' element={<Crystel />} />
          <Route path='/Candlestand' element={<Candlestand />} />
          <Route path='/Decorplates' element={<Decorplates />} />
          <Route path='/Gingerjar' element={<Gingerjar />} />
          <Route path='/Decorstorage' element={<Decorstorage />} />
          <Route path='/Fineporcelain' element={<Fineporcelain />} />
          <Route path='/Photofram' element={<Photofram />} />
          <Route path='/Flowerarrang' element={<Flowerarrang />} />
          <Route path='/Planter' element={<Planter />} />
          <Route path='/Tabletopdecor' element={<Tabletopdecor />} />
          <Route path='/Clock' element={<Clock />} />
          <Route path='/Animal' element={<Animal />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Castiron' element={<Castiron />} />
          <Route path='/Incenseholder' element={<Incenseholder />} />
          <Route path='/Newarrive' element={<Newarrive />} />
          <Route path='/Newdecor' element={<Newdecor />} />
          <Route path='/Homenew' element={<Homenew />} />
          <Route path='/Newligting' element={<Newligting />} />
          <Route path='/Newkitchen' element={<Newkitchen />} />
          <Route path='/Kitchen' element={<Kitchen />} />
          <Route path='/Cakestand' element={<Cakestand />} />
          <Route path='/Dinnerplates' element={<Dinnerplates />} />
          <Route path='/Mug' element={<Mug />} />
          <Route path='/Teaware' element={<Teaware />} />
          <Route path='/Drinkglass' element={<Drinkglass />} />
          <Route path='/Jar' element={<Jar />} />
          <Route path='/Doubleglass' element={<Doubleglass />} />
          <Route path='/Homekitchen' element={<Homekitchen />} />
          <Route path='/Light' element={<Light />} />
          <Route path='/Bedlight' element={<Bedlight />} />
          <Route path='/Ceilinglight' element={<Ceilinglight />} />
          <Route path='/Crystallamp' element={<Crystallamp />} />
          <Route path='/Livinglight' element={<Livinglight />} />
          <Route path='/Tablelamp' element={<Tablelamp />} />
          <Route path='/Woodlamp' element={<Woodlamp />} />
          <Route path='/Wallsconses' element={<Wallsconses />} />
          <Route path='/Homelight' element={<Homelight />} />
          <Route path='/Walldecor' element={<Walldecor />} />
          <Route path='/Wallplates' element={<Wallplates />} />
          <Route path='/Framedart' element={<Framedart />} />
          <Route path='/Olipaint' element={<Olipaint />} />
          <Route path='/Wallmirror' element={<Wallmirror />} />
          <Route path='/Wallvases' element={<Wallvases />} />
          <Route path='/Homewall' element={<Homewall />} />
          <Route path='/Furniture' element={<Furniture />} />
          <Route path='/Homefurniture' element={<Homefurniture />} />
          <Route path='/Chair' element={<Chair />} />
          <Route path='/Table' element={<Table />} />
          <Route path='/Ottomans' element={<Ottomans />} />
          <Route path='/Homebathdecor' element={<Homebathdecor />} />
          <Route path='/Bathset' element={<Bathset />} />
          <Route path='/Basin' element={<Basin />} />
          <Route path='/Cart' element={<Cartpage />} />
          <Route path='/About' element={<About />} />
          <Route path='/Condition' element={<Condition />} />
          <Route path='/Privacy' element={<Privacy />} />
          <Route path='/Return' element={<Return />} />
          <Route path='/Refund' element={<Refund />} />
          <Route path='/Blocks' element={<Blocks />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Stores' element={<Stores />} />
          <Route path='/Search' element={<Searchpages />} />
          <Route path='/Success' element={<Success />} />
          <Route path='/Cancle' element={<Cancle />} />
          <Route path='/Wishlist' element={<Wishlist />} />
          <Route path='/Checkout' element={<Userorderpage />} />
          <Route path='/Forgotpswd' element={<Forgotpswd />} />
          <Route path='/product/:id' element={<Productdetails />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/Dashboard' element={<Privateroute />}>
            <Route path='user' element={<Userdashboard />} />
            <Route path='user/edit' element={<Edituser />} />
            <Route path='user/order' element={<Userorderbill />} />
          </Route>
          <Route path='/Dashboard' element={<Privateroute />}>
            <Route path='admin' element={<Admindashboard />} />
            <Route path='admin/Addproduct' element={<Addproduct />} />
            <Route path='admin/Productlist' element={<Productlist />} />
            <Route path='admin/Editproduct/:id' element={<Editproduct />} />
            <Route path='admin/Userlist' element={<Userlist />} />
            <Route path='admin/Orderlist' element={<Orderlist />} />
          </Route>
        </Routes>
        {userauth?.user?.Role === 1 ? null : <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;

