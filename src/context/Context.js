import React, { useState } from 'react'

export const ContextData = React.createContext()
export default function ContextFunc({ children }) {

    const [son, setSon] = useState(0)
    return (
        <ContextData.Provider
            value={{
                son,
                setSon
            }}
        >
            {children}
        </ContextData.Provider>
    )
}
