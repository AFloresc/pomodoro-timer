import React from "react";
import { Typography } from "@mui/material";
import { usePomodoroContext } from "../context/PomodoroProvider";
import { formatTime } from "../utils/formatTime";

export default function TimerDisplay() {
    const { timeLeft } = usePomodoroContext();

    return (
        <Typography variant="h2" align="center">
        {formatTime(timeLeft)}
        </Typography>
    );
}