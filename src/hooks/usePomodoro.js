import { useState, useEffect, useRef } from "react";

export function usePomodoro(config) {
    const [sessionType, setSessionType] = useState("work"); // work | short | long
    const [sessionCount, setSessionCount] = useState(0);
    const [timeLeft, setTimeLeft] = useState(config.work * 60);
    const [isRunning, setIsRunning] = useState(false);

    const intervalRef = useRef(null);

    // -----------------------------
    // Update timeLeft when config changes
    // -----------------------------
    useEffect(() => {
        if (!isRunning) {
        if (sessionType === "work") setTimeLeft(config.work * 60);
        if (sessionType === "short") setTimeLeft(config.short * 60);
        if (sessionType === "long") setTimeLeft(config.long * 60);
        }
    }, [config, sessionType, isRunning]);

    // -----------------------------
    // Start timer
    // -----------------------------
    const start = () => {
        if (isRunning) return;

        setIsRunning(true);

        intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
            if (prev <= 1) {
            clearInterval(intervalRef.current);
            handleSessionEnd();
            return 0;
            }
            return prev - 1;
        });
        }, 1000);
    };

    // -----------------------------
    // Stop timer
    // -----------------------------
    const stop = () => {
        setIsRunning(false);
        clearInterval(intervalRef.current);
    };

    // -----------------------------
    // Reset timer
    // -----------------------------
    const reset = () => {
        stop();
        if (sessionType === "work") setTimeLeft(config.work * 60);
        if (sessionType === "short") setTimeLeft(config.short * 60);
        if (sessionType === "long") setTimeLeft(config.long * 60);
    };

    // -----------------------------
    // Handle session transitions
    // -----------------------------
    const handleSessionEnd = () => {
        setIsRunning(false);

        // Work session finished → increment count
        if (sessionType === "work") {
        const newCount = sessionCount + 1;
        setSessionCount(newCount);

        // Every 4 work sessions → long break
        if (newCount % 4 === 0) {
            setSessionType("long");
            setTimeLeft(config.long * 60);
        } else {
            setSessionType("short");
            setTimeLeft(config.short * 60);
        }
        }

        // Break finished → back to work
        if (sessionType === "short" || sessionType === "long") {
        setSessionType("work");
        setTimeLeft(config.work * 60);
        }
    };

    // -----------------------------
    // Cleanup interval on unmount
    // -----------------------------
    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    return {
        timeLeft,
        sessionType,
        sessionCount,
        isRunning,
        start,
        stop,
        reset
    };
}