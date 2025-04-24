 // Para animar al cargar la página
 window.addEventListener("load", () => {
    document.body.classList.remove("fade-out");
});

// Añade la clase fade-out al hacer clic en un enlace
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Evita la navegación inmediata
        const targetUrl = this.href; // Guarda la URL de destino

        // Aplica la transición de salida
        document.body.classList.add("fade-out");

        // Espera la duración de la transición y luego redirige
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 1000); // Cambia el valor aquí para coincidir con la duración en CSS
    });
});
