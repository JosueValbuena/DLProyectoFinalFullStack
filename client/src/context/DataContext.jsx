import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [data, setData] = useState([]);

    const getData = async ()=>{
        const query = await fetch ("./db.json");
        const res = await query.json();
        setData(res);
    }

    useEffect(()=>{
        getData()
    }, [])

    return (
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    )
}