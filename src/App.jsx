import React, { useState } from "react";
import { Container, Stack, IconButton, Typography, Box } from "@mui/material";

import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { PomodoroProvider } from "./context/PomodoroProvider";
import { useColorMode } from "./context/ThemeProvider";

import TimerDisplay from "./components/TimerDisplay";
import Controls from "./components/Controls";
import SessionTypeLabel from "./components/SessionTypeLabel";
import SettingsDialog from "./components/SettingsDialog";

export default function App() {
    const [openSettings, setOpenSettings] = useState(false);

    // Nuevo: control del tema
    const { mode, toggleTheme } = useColorMode();

    return (
        <PomodoroProvider>
        {/* 🔥 Este Box sí cambia con el tema */}
        <Box
            sx={{
            minHeight: "100vh",
            bgcolor: "background.default",
            color: "text.primary",
            transition: "background-color 0.3s ease"
            }}
        >
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

                <Stack direction="row" spacing={1}>
                <IconButton onClick={toggleTheme}>
                    {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>

                <IconButton onClick={() => setOpenSettings(true)}>
                    <SettingsIcon />
                </IconButton>
                </Stack>
            </Stack>

            <SessionTypeLabel />
            <TimerDisplay />
            <Controls />

            <SettingsDialog
                open={openSettings}
                onClose={() => setOpenSettings(false)}
            />
            </Container>
        </Box>
        </PomodoroProvider>
    );
}
