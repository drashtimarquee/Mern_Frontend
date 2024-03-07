import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Usercontax } from './components/Pages/Usercontax';
import { CartProvider } from './components/Pages/Cartcontax';
import { Searchcontax } from './components/Pages/Searchcontax';
import { Wishlistprovider } from './components/Pages/Wishlistcontaxt';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Usercontax>
      <Searchcontax>
        <CartProvider>
          <Wishlistprovider>
            <App />
          </Wishlistprovider>
        </CartProvider>
      </Searchcontax>
    </Usercontax>
  </React.StrictMode>
);


reportWebVitals();