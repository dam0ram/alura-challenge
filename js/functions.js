const texto = document.getElementById('text1');
const textoEncriptado = document.getElementById('text2');


console.log(texto.value);



const encriptacion = texto => {
    return texto
    .replace(/a/g, "wrs")
    .replace(/e/g, "gyh")
    .replace(/i/g, "pl")
    .replace(/o/g, "sew")
    .replace(/u/g, "dev")
}
const desencriptacion = textoEncriptado => {
    return textoEncriptado
    .replace(/wrs/g, "a")
    .replace(/gyh/g, "e")
    .replace(/pl/g, "i")
    .replace(/sew/g, "o")
    .replace(/dev/g, "u")
}

let textoFinal = '';
console.log(texto.value);

function encriptar() {
    textoFinal = '';
    let textoInicial = texto.value;

    if( textoInicial != '' )
    {
        textoFinal = encriptacion( textoInicial );
        textoEncriptado.value = textoFinal; 
    }
    }
    console.log(texto.value);

function desencriptar() {
    textoFinal = '';
    let textoInicial = textoEncriptado.value;
    textoFinal = desencriptacion( textoInicial );
    texto.value = textoFinal;

}