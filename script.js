let estadoSeleccionado = document.getElementById("estadoSeleccionado");
let estado = document.getElementById("estado");
let boton = document.getElementById("btn");

boton.addEventListener("click", () => {
    estadoSeleccionado.value = estado.value;
});

