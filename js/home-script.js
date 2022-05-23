
var botonEncriptar = document.querySelector(".boton-encriptar");
var texto_entrada = document.querySelector("#texto-entrada");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var texto_salida = document.querySelector("#texto-salida");
const invisible_munec = document.querySelector(".mune-invisible");

var botonCopiar = document.querySelector(".boton-copiar-texto");


//Filtrar caracteres no permitidos
texto_entrada.addEventListener("keypress", function (e) {
    if (!((e.key.charCodeAt(0) >= 97) && (e.key.charCodeAt(0) <= 122) ||
        (e.key.charCodeAt(0) == 32) || (e.key.charCodeAt(0) == 241))) {
        alert('Favor insertar solo letras minúsculas y sin acentos');
        e.preventDefault();
    }

});


botonEncriptar.addEventListener("click", function () {
    let texto = texto_entrada.value;

    if (evaluarEntrada(texto)) {
        alert("Favor ingresar texto");
    }
    else {
        let texto_encrip = "";
        for (let i = 0; i < texto.length; i++) {
            /*   La letra "e" es convertida para "enter"
               La letra "i" es convertida para "imes"
               La letra "a" es convertida para "ai"
               La letra "o" es convertida para "ober"
               La letra "u" es convertida para "ufat"*/
            if (texto[i] == 'e') { texto_encrip += 'enter'; }
            else if (texto[i] == 'i') { texto_encrip += 'imes'; }
            else if (texto[i] == 'a') { texto_encrip += 'ai'; }
            else if (texto[i] == 'o') { texto_encrip += 'ober'; }
            else if (texto[i] == 'u') { texto_encrip += 'ufat'; }
            else { texto_encrip += texto[i] }

        }
        texto_salida.value = texto_encrip;
        mostrarMensajeNoDatos();
    }

}
);


botonDesencriptar.addEventListener("click", function () {
    let texto = texto_entrada.value;

    if (evaluarEntrada(texto)) {
        alert("Favor ingresar texto");
    }
    else {
        let texto_desencrip = "";

        texto_desencrip = texto.replace(/enter/g, "e");
        texto_desencrip = texto_desencrip.replace(/imes/g, "i");
        texto_desencrip = texto_desencrip.replace(/ai/g, "a");
        texto_desencrip = texto_desencrip.replace(/ober/g, "o");
        texto_desencrip = texto_desencrip.replace(/ufat/g, "u");
        texto_salida.value = texto_desencrip;
        mostrarMensajeNoDatos();
    }

});

function evaluarEntrada(texto) {
    let result = texto.trim();
    if (result == '') {

        return true;
    }
    else {
        return false;

    }
}


botonCopiar.addEventListener("click", function limpiarCajaTexto() {

    var copiaTexto = texto_salida.value;
    navigator.clipboard.writeText(copiaTexto);
    texto_salida.value = "";
    mostrarMensajeNoDatos();

});




function mostrarMensajeNoDatos() {

    if (texto_salida.value.length == 0) {
        invisible_munec.classList.remove("invisible");
    }
    else {
        invisible_munec.classList.add("invisible");
    }

}

