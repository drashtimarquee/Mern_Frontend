import { useState, createContext, useContext } from 'react';

const searchcontext = createContext();

function Searchcontax({ children }) {
    const [userauth, setUserauth] = useState({
        keyword: " ",
        result: [],
    });

    return (
        <div>
            <searchcontext.Provider value={[userauth, setUserauth]} >
                {children}
            </searchcontext.Provider>
        </div>
    )
}

const useSearch = () => useContext(searchcontext);

export { useSearch , Searchcontax };