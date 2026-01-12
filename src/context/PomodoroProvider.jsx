import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { usePomodoro } from "../hooks/usePomodoro";

const PomodoroContext = createContext(null);

export function PomodoroProvider({ children }) {
    // Configuración editable por el usuario
    const [config, setConfig] = useState({
        work: 25,
        short: 5,
        long: 15
    });

    // Lógica principal del temporizador
    const pomodoro = usePomodoro(config);

    // Persistencia opcional (si quieres activarla más adelante)
    useEffect(() => {
        const saved = localStorage.getItem("pomodoroConfig");
        if (saved) {
            setConfig(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("pomodoroConfig", JSON.stringify(config));
    }, [config]);

    return (
        <PomodoroContext.Provider value={{ ...pomodoro, config, setConfig }}>
        {children}
        </PomodoroContext.Provider>
    );
}

export const usePomodoroContext = () => useContext(PomodoroContext);