
let start, timeout;

$("#panel").click(function () {

    if ($(this).hasClass("esperando")) {
        clearTimeout(timeout);
        $(this).text("Has hecho click antes de tiempo").css("background", "black").removeClass("esperando");
        return;
    }

    if ($(this).hasClass("rojo")) {
        let t = Date.now() - start;
        $(this).text("Tiempo: " + t + " ms").css("background", "grey").removeClass("rojo");
        return;
    }

    $(this).text("Espera...").css("background", "green");

    $(this).addClass("esperando");

    timeout = setTimeout(() => {

        $(this).removeClass("esperando").addClass("rojo");
        $(this).text("¡YA! pulsa").css("background", "red");
        start = Date.now();

    }, Math.random() * 3000 + 1000);

});
