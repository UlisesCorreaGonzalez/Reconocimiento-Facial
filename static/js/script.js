function actualizarInfo() {
    fetch("/info")
        .then(response => response.json())
        .then(data => {
            const status = document.getElementById("status");
            const details = document.getElementById("details");

            if (data.name === "Ulises Correa") {
                status.textContent = "Persona reconocida";
                status.classList.add("reconocido");
                status.classList.remove("desconocido");
                details.innerHTML = "<strong>Nombre:</strong> Ulises Correa<br><strong>Área:</strong> Practicante de Procesos";
            } else {
                status.textContent = "Rostro desconocido";
                status.classList.add("desconocido");
                status.classList.remove("reconocido");
                details.textContent = "";
            }
        });
}

setInterval(actualizarInfo, 1000);
