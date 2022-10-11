import React, {createContext, useContext, useState} from "react";

const BuilderContext = createContext({})
export const useBuilder = () => useContext(BuilderContext)

export const BuilderProvider = ({children}) => {
    const [content, setContent] = useState([])

    return (
        <BuilderContext.Provider value={{content}}>
            {children}
        </BuilderContext.Provider>
    )

}