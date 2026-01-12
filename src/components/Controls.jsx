import React from "react";
import { Stack, Button } from "@mui/material";
import { usePomodoroContext } from "../context/PomodoroProvider";

export default function Controls() {
    const { isRunning, start, stop, reset } = usePomodoroContext();

    return (
        <Stack direction="row" spacing={2} justifyContent="center">
        {!isRunning && (
            <Button
            variant="contained"
            color="primary"
            onClick={start}
            size="large"
            >
            Start
            </Button>
        )}

        {isRunning && (
            <Button
            variant="outlined"
            color="warning"
            onClick={stop}
            size="large"
            >
            Stop
            </Button>
        )}

        <Button
            variant="text"
            color="inherit"
            onClick={reset}
            size="large"
        >
            Reset
        </Button>
        </Stack>
    );
}