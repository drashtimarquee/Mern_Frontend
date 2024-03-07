import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

const Wishlistcontax = createContext();

function Wishlistprovider({ children }) {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        let existItem = localStorage.getItem("wishlist");
        if (existItem) setWishlist(JSON.parse(existItem));
    }, []);

    return (
        <Wishlistcontax.Provider value={[wishlist, setWishlist]}>
            {children}
        </Wishlistcontax.Provider>
    )
}

const useWishlist = () => useContext(Wishlistcontax)
export { useWishlist, Wishlistprovider };