"use client";
import { useContext } from "react";
import { DarkModeContext } from "@/context/DarkModeContext";

function SwitchThemeBtn() {
    const { theme, toggleTheme } = useContext(DarkModeContext);
    return (
        <button
            onClick={toggleTheme}
            className="fixed cursor-pointer top-5 right-5 border border-violet-500 p-3"
        >
            Mode : {theme === "light" ? "Clair" : "Sombre"}
        </button>
    );
}

export default SwitchThemeBtn;
