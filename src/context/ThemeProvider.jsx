import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const ColorModeContext = createContext(null);

export function AppThemeProvider({ children }) {
    const [mode, setMode] = useState("light");

    // Load saved theme
    useEffect(() => {
        const saved = localStorage.getItem("themeMode");
        if (saved) setMode(saved);
    }, []);

    // Save theme
    useEffect(() => {
        localStorage.setItem("themeMode", mode);
    }, [mode]);

    const toggleTheme = () => {
        setMode(prev => (prev === "light" ? "dark" : "light"));
    };

    const theme = useMemo(
        () =>
        createTheme({
            palette: {
            mode,
            ...(mode === "dark"
                ? {
                    background: {
                    default: "#121212",
                    paper: "#1e1e1e"
                    }
                }
                : {})
            },
            typography: {
            fontFamily: "Inter, sans-serif"
            }
        }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={{ mode, toggleTheme }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export const useColorMode = () => useContext(ColorModeContext);