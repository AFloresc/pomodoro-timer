import { createContext, useContext, useState } from "react";
import { usePomodoro } from "../hooks/usePomodoro";

const PomodoroContext = createContext();

export function PomodoroProvider({ children }) {
    const [config, setConfig] = useState({
        work: 25,
        short: 5,
        long: 15
    });

    const pomodoro = usePomodoro(config);

    return (
        <PomodoroContext.Provider value={{ ...pomodoro, config, setConfig }}>
        {children}
        </PomodoroContext.Provider>
    );
}

export const usePomodoroContext = () => useContext(PomodoroContext);