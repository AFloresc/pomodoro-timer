export function playBeep() {
    const audio = new Audio("/sounds/beep.mp3");
    audio.volume = 0.5; 
    audio.play();
}