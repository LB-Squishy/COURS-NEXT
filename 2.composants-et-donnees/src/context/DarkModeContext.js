"use client";

import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    function toggleTheme() {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.remove("light");
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
            root.classList.add("light");
        }
    }, [theme]);

    return (
        <DarkModeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </DarkModeContext.Provider>
    );
}
