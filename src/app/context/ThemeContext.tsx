'use client'
import React, { useState, useEffect, useRef } from 'react';

const usePrevious = (theme) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = theme;
    });
    return ref.current;
}

function useStorageTheme(key) {
    // Check if we're running in the browser (client-side)
    const isBrowser = typeof window !== 'undefined';
    const userPreference = isBrowser && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState(isBrowser ? localStorage.getItem(key) || userPreference : 'light');

    useEffect(() => {
        if (isBrowser) {
            localStorage.setItem(key.toString(), theme.toString());
        }
    }, [theme, key, isBrowser]);

    return [theme.toString(), setTheme];
}

interface IThemeContext {
    theme: string | React.Dispatch<React.SetStateAction<string | boolean>>;
    toggleTheme: () => void;
}

export const ThemeContext = React.createContext<IThemeContext>({ theme: '', toggleTheme: () => { } });

interface IThemeProvider {
    children: React.ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProvider) => {
    const [theme, setTheme] = useStorageTheme('theme');
    const oldTheme = usePrevious(theme.toString());

    useEffect(() => {
        document.documentElement.classList.remove(`${oldTheme}`);
        document.documentElement.classList.add(`${theme}`);
    }, [theme, oldTheme]);

    function toggleTheme() {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    const context = {
        theme,
        toggleTheme,
    };

    return <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>;
};