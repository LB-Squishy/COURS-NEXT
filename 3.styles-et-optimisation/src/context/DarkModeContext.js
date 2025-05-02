"use client";
import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark", "pink");
        document.documentElement.classList.add(theme);
    }, [theme]);

    return (
        <DarkModeContext.Provider value={{ theme, setTheme }}>{children}</DarkModeContext.Provider>
    );
}
