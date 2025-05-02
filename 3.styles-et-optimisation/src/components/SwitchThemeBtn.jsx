"use client";
import { useContext } from "react";
import { DarkModeContext } from "@/context/DarkModeContext";

const THEMES = ["light", "dark", "pink"];

function SwitchThemeBtn() {
    const { theme, setTheme } = useContext(DarkModeContext);

    const toggleTheme = () => {
        const currentIndex = THEMES.indexOf(theme);
        const nextTheme = THEMES[(currentIndex + 1) % THEMES.length];
        setTheme(nextTheme);

        // Mettre à jour la classe sur <html>
        document.documentElement.classList.remove(...THEMES);
        document.documentElement.classList.add(nextTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed z-50 top-5 right-5 flex items-center gap-2 border rounded-full shadow-lg px-4 py-2 backdrop-blur-sm bg-[var(--color-background)]/80 text-[var(--color-titre1)] border-[var(--color-titre1)] transition-all hover:scale-105"
        >
            🎨 Thème : <span className="capitalize">{theme}</span>
        </button>
    );
}

export default SwitchThemeBtn;
