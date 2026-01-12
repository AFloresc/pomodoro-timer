export function playBeep() {
    const audio = new Audio("../assets/sounds/beep.mp3");
    audio.volume = 0.5; 
    audio.play();
}