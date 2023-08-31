"use client";
import { createContext,useState} from 'react';

export const globalContext = createContext();

const GlobalContext = ({children}) => {

    const [user,setUser] = useState({});
    const [data,setDetails] = useState({});

    const setUserdata = (data)=>{
        setUser(data);
    }

    const setData = (data)=>{
        setDetails(data);
    }
    return (
        <globalContext.Provider value={{
            user,
            setUserdata,
            data,
            setData
        }}
        >
            {children}
        </globalContext.Provider>
    )
}

export default GlobalContext;
