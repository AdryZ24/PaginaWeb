// Audio
const audio = document.getElementById("background-audio");
const muteCheckbox = document.getElementById("mute-checkbox");

// Función para iniciar el audio una vez que el usuario haga clic en la página
function startAudio() {
    audio.play().catch(error => console.log("Autoplay failed:", error)); // Inicia el audio al hacer clic
    document.removeEventListener("click", startAudio); // Remueve el listener una vez iniciado
}

// Detecta clic en la página para iniciar el audio
document.addEventListener("click", startAudio);

// Control del botón de silencio
muteCheckbox.addEventListener("change", () => {
    if (muteCheckbox.checked) {
        audio.pause();
    } else {
        audio.play();
    }
});