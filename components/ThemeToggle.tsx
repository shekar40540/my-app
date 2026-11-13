"use client";

import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const saved = localStorage.getItem("theme") as Theme | null;
        const initialTheme = saved === "dark" ? "dark" : "light";
        setTheme(initialTheme);
        document.documentElement.setAttribute("data-theme", initialTheme);
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    }

    return (
        <button onClick={toggleTheme} className="border px-1 py-1 rounded-lg w-48">
            Switch to theme {theme === "light" ? "dark" : "light"}
        </button>
    )
}