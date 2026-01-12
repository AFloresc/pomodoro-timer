import { useState, useEffect, useRef } from "react";

export function usePomodoro(config) {
    const [timeLeft, setTimeLeft] = useState(config.work * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [sessionType, setSessionType] = useState("work"); // work | short | long
    const [sessionCount, setSessionCount] = useState(0);

    const intervalRef = useRef(null);

    useEffect(() => {
        if (!isRunning) return;

        intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
            if (prev === 1) {
            handleSessionEnd();
            return 0;
            }
            return prev - 1;
        });
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    const start = () => setIsRunning(true);
    const stop = () => setIsRunning(false);
    const reset = () => {
        setIsRunning(false);
        setTimeLeft(config.work * 60);
        setSessionType("work");
    };

    const handleSessionEnd = () => {
        setIsRunning(false);

        if (sessionType === "work") {
        const newCount = sessionCount + 1;
        setSessionCount(newCount);

        if (newCount % 4 === 0) {
            setSessionType("long");
            setTimeLeft(config.long * 60);
        } else {
            setSessionType("short");
            setTimeLeft(config.short * 60);
        }
        } else {
        setSessionType("work");
        setTimeLeft(config.work * 60);
        }
    };

    return {
        timeLeft,
        isRunning,
        sessionType,
        sessionCount,
        start,
        stop,
        reset
    };
}