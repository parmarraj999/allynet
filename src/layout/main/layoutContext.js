import { createContext, useState } from "react";

export const LayoutContext = createContext();

export const LayoutContextProvider = ({ children }) => {

    const [collapse, setCollapse] = useState(false);

    return (
        <LayoutContext.Provider value={{collapse,setCollapse}}>
            {children}  
        </LayoutContext.Provider>
    )
}