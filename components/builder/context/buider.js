import React, {createContext, useContext, useState} from "react";

const BuilderContext = createContext({})
export const useBuilder = () => useContext(BuilderContext)

export const BuilderProvider = ({children}) => {
    const [content, setContent] = useState([])
    const [key, setKey] = useState(0)
    const addSection = (section, index = -1) => {
        if (index === -1) {
            content.push(section)
        } else {
            if (index <= content.length) {
                content.splice(index, 0, section)
            }
        }
        setKey(key + 1)
    }

    const updateView = () => {
        setKey(key + 1)
    }

    return (
        <BuilderContext.Provider value={{content, addSection, updateView}}>
            {children}
        </BuilderContext.Provider>
    )

}