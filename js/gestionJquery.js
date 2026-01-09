
let imagenes=[
"../img.png", "../img2.png"
];

function crearElemento(){
    let img = imagenes[Math.floor(Math.random()*imagenes.length)];
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

$("#cambiarColor").click(()=>{
    let c=$("#color").val();
    $(".card").css("background",c);
});

$("#lista").on("click",".cambiar",function(){
    let img = imagenes[Math.floor(Math.random()*imagenes.length)];
    $(this).siblings("img").attr("src",img);
});

$("#lista").on("click",".borrar",function(){
    $(this).parent().remove();
});

$("#reset").click(()=>{
    $("#lista").empty();
});
