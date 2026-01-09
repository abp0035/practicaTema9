
const imagenes = [
    "../img.png",
    "../img2.png",

];

const lista = document.getElementById("lista");
const btnNuevo = document.getElementById("nuevo");
const btnCambiarColor = document.getElementById("cambiarColor");
const btnReset = document.getElementById("reset");
const inputColor = document.getElementById("color");

function imagenAleatoria() {
    const i = Math.floor(Math.random() * imagenes.length);
    return imagenes[i];
}

function crearElemento() {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = imagenAleatoria();

    const br = document.createElement("br");

    const btnCambiar = document.createElement("button");
    btnCambiar.textContent = "Cambiar";
    btnCambiar.className = "cambiar";

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar";
    btnBorrar.className = "borrar";

    card.appendChild(img);
    card.appendChild(br);
    card.appendChild(btnCambiar);
    card.appendChild(btnBorrar);

    lista.appendChild(card);
}

btnNuevo.addEventListener("click", crearElemento);

btnCambiarColor.addEventListener("click", () => {
    const color = inputColor.value;
    document.querySelectorAll(".card").forEach(card => {
        card.style.background = color;
    });
});

btnReset.addEventListener("click", () => {
    lista.innerHTML = "";
    inputColor.value = "#ffffff";
});

lista.addEventListener("click", e => {
    const target = e.target;

    if (target.classList.contains("cambiar")) {
        const img = target.parentElement.querySelector("img");
        img.src = imagenAleatoria();
    }

    if (target.classList.contains("borrar")) {
        target.parentElement.remove();
    }
});
