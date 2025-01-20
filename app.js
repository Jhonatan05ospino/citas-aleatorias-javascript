let botonElem = document.getElementById("boton-cambiar-cita");
let citaElem = document.getElementById("cita");
let autorElem = document.getElementById("autor");

function generarEnteroAleatorio(minimo,maximo ){
    return Math.floor(Math.random() * (maximo - minimo) + minimo);
}

function cambiarCita(){
    let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
    citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
    autorElem.innerText = citas[indiceAleatorio].autor;
}

cambiarCita();

botonElem.addEventListener("click",cambiarCita);

