import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Stack
} from "@mui/material";
import { useState } from "react";
import { usePomodoroContext } from "../context/PomodoroProvider";

export default function SettingsDialog({ open, onClose }) {
    const { config, setConfig } = usePomodoroContext();

    const [values, setValues] = useState({
        work: config.work,
        short: config.short,
        long: config.long
    });

    const handleChange = (field) => (e) => {
        setValues({
        ...values,
        [field]: Number(e.target.value)
        });
    };

    const handleSave = () => {
        setConfig(values);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
        <DialogTitle>Timer Settings</DialogTitle>

        <DialogContent>
            <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
                label="Work session (minutes)"
                type="number"
                value={values.work}
                onChange={handleChange("work")}
                slotProps={{
                    input: {
                        min: 1
                    }
                }}
                fullWidth
            />

            <TextField
                label="Short break (minutes)"
                type="number"
                value={values.short}
                onChange={handleChange("short")}
                slotProps={{
                    input: { min: 1 }
                }}
                fullWidth
            />

            <TextField
                label="Long break (minutes)"
                type="number"
                value={values.long}
                onChange={handleChange("long")}
                slotProps={{
                    input: { min: 1 }
                }}
                fullWidth
            />
            </Stack>
        </DialogContent>

        <DialogActions>
            <Button onClick={onClose} color="inherit">
            Cancel
            </Button>
            <Button onClick={handleSave} variant="contained">
            Save
            </Button>
        </DialogActions>
        </Dialog>
    );
}