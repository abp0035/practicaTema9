
const panel = document.getElementById("panel");

let estado = "inicial";
let timeoutId = null;
let inicio = 0;

panel.addEventListener("click", () => {
    if (estado === "inicial") {
        estado = "esperando";
        panel.textContent = "Espera...";
        panel.style.background = "green";

        const espera = Math.random() * 3000 + 1000;

        timeoutId = setTimeout(() => {
            estado = "rojo";
            panel.textContent = "¡YA! pulsa";
            panel.style.background = "red";
            inicio = Date.now();
        }, espera);
    } else if (estado === "esperando") {
        clearTimeout(timeoutId);
        estado = "inicial";
        panel.textContent = "Has hecho click antes de tiempo. Pulsa para volver a intentar";
        panel.style.background = "black";
    } else if (estado === "rojo") {
        const fin = Date.now();
        const tiempo = fin - inicio;
        estado = "inicial";
        panel.textContent = "Tiempo: " + tiempo + " ms. Pulsa para repetir";
        panel.style.background = "grey";
    }
});
