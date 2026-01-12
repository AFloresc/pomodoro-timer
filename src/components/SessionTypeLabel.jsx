import React from "react";
import { Chip } from "@mui/material";
import { usePomodoroContext } from "../context/PomodoroProvider";

export default function SessionTypeLabel() {
    const { sessionType } = usePomodoroContext();

    const labelMap = {
        work: "Work Session",
        short: "Short Break",
        long: "Long Break"
    };

    const colorMap = {
        work: "primary",
        short: "success",
        long: "warning"
    };

    return (
        <Chip
        label={labelMap[sessionType]}
        color={colorMap[sessionType]}
        size="medium"
        sx={{ fontSize: "1rem", px: 2 }}
        />
    );
}