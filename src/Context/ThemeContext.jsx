import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
    const [Theme,setTheme] = useState('Light')
    const values = {Theme,setTheme}
    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    const context = useContext(ThemeContext)

    return context
}