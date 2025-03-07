"use client";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
    const [darkMode, setDarkMode] = useState<boolean>(true);

    useEffect(() => {
        const check = localStorage.getItem("darkMode");
        if (check === null) {
            document.documentElement.classList.toggle("dark", true);
        } else if (check === "true") {
            document.documentElement.classList.toggle("dark", true);
        } else {
            document.documentElement.classList.remove("dark");
            setDarkMode(false);
        }
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="flex text-white hover:bg-violet-900 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5 h-14 w-14 justify-center items-center"
        >
            {darkMode ? (
                <svg
                    id="theme-toggle-light-icon"
                    className="w-6 h-6 justify-center"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
                </svg>
            ) : (
                <svg
                    id="theme-toggle-dark-icon"
                    className="w-6 h-6 justify-center"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
            )}
        </button>
    );
};

export default ThemeSwitcher;
