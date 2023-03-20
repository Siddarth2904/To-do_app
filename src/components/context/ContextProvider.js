import { useSnackbar } from '@mui/base';
import React, { Children, createContext, useState } from 'react'
export const DeleteContext = createContext("");
const ContextProvider = ({ children }) => {
    const [dlttask, setdlttask] = useState(false)
    return (
        <>
            <DeleteContext.Provider value={{ dlttask, setdlttask }}>
                {children}
            </DeleteContext.Provider>
        </>
    )
}

export default ContextProvider
