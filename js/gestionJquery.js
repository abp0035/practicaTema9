
let imagenes = [
    "../img.png", "../img2.png"
];

function crearElemento() {
    let img = imagenes[Math.floor(Math.random() * imagenes.length)];
    let card = $(`
        <div class="card">
            <img src="${img}">
            <br>
            <button class="cambiar">Cambiar</button>
            <button class="borrar">Borrar</button>
        </div>
    `);
    $("#lista").append(card);
}

$("#nuevo").click(crearElemento);
//Para q no sea tan feo, le aclaramos el color del fondo en vez de usar el mismo.
function aclararColor(hex, porcentaje = 0.7) {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    r = Math.round(r + (255 - r) * porcentaje);
    g = Math.round(g + (255 - g) * porcentaje);
    b = Math.round(b + (255 - b) * porcentaje);

    return `rgb(${r}, ${g}, ${b})`;
}

$("#cambiarColor").click(() => {
    let c = $("#color").val();
    $(".card").css("background", c);
    $("body").css("background", aclararColor(c));
});


$("#lista").on("click", ".cambiar", function () {
    let img = imagenes[Math.floor(Math.random() * imagenes.length)];
    $(this).siblings("img").attr("src", img);
});

$("#lista").on("click", ".borrar", function () {
    $(this).parent().remove();
});

$("#reset").click(() => {
    $("#lista").empty();
});
