import React from "react";
import { useState } from "react";
import { Container, Stack, IconButton, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

import { PomodoroProvider } from "./context/PomodoroProvider";
import TimerDisplay from "./components/TimerDisplay";
import Controls from "./components/Controls";
import SessionTypeLabel from "./components/SessionTypeLabel";
import SettingsDialog from "./components/SettingsDialog";

export default function App() {
    const [openSettings, setOpenSettings] = useState(false);

    return (
        <PomodoroProvider>
            <Container
            maxWidth="sm"
            sx={{
                py: 6,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4
            }}
            >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ width: "100%" }}
            >
                <Typography variant="h4" fontWeight="bold">
                Pomodoro Timer
                </Typography>

                <IconButton onClick={() => setOpenSettings(true)}>
                <SettingsIcon />
                </IconButton>
            </Stack>

            <SessionTypeLabel />
            <TimerDisplay />
            <Controls />

            <SettingsDialog
                open={openSettings}
                onClose={() => setOpenSettings(false)}
            />
            </Container>
        </PomodoroProvider>
);

    
}