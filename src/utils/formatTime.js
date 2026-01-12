export function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;

    const mm = String(m).padStart(2, "0");
    const ss = String(s).padStart(2, "0");

    return `${mm}:${ss}`;
}