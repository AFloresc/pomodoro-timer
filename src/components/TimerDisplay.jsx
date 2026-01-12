import React from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { usePomodoroContext } from "../context/PomodoroProvider";
import { formatTime } from "../utils/formatTime";

export default function TimerDisplay() {
    const { timeLeft } = usePomodoroContext();

    return (
        <Typography
        component={motion.div}
        key={timeLeft} // fuerza animación en cada cambio
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        variant="h2"
        fontWeight="bold"
        sx={{ fontSize: "4rem", textAlign: "center" }}
        >
        {formatTime(timeLeft)}
        </Typography>
    );
}