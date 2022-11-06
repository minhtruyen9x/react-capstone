import { createContext, useState } from "react";
import styles from './Theme.module.scss'
console.log(styles)
const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light-theme")

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <div className={`${styles.theme} ${styles[theme]}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default ThemeContext