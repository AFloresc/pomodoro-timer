import { useState } from "react";
import SettingsDialog from "../components/SettingsDialog";
import { IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

export default function MainLayout({ children }) {
    const [open, setOpen] = useState(false);

    return (
        <>
        <IconButton onClick={() => setOpen(true)}>
            <SettingsIcon />
        </IconButton>

        <SettingsDialog open={open} onClose={() => setOpen(false)} />

        {children}
        </>
    );
}