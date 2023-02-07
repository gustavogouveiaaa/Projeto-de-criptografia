var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");
var buttonCriptografar = document.querySelector("#btn-criptografar")
let buttonDescriptografar = document.querySelector("#btn-descriptografar")



buttonCriptografar.addEventListener('click', ()=>{
    let textoCriptografado = criptografar(textInput.value.toLowerCase())
    outInput.innerHTML = resposta(textoCriptografado)
    console.log(textoCriptografado)
})
buttonDescriptografar.addEventListener('click', ()=>{
    let textoDescriptografado = descriptografar(textInput.value.toLowerCase())
    outInput.innerHTML = resposta(textoDescriptografado)
    console.log(textoDescriptografado)
})
function criptografar(texto){

  var resultCripto = texto

    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

    return resultCripto
}

function descriptografar(texto){

    var resultDescripto = texto

    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    return resultDescripto
  
   
}
    
function resposta(texto){

    return '<textarea readonly id="input-texto">' + texto + '</textarea>'
}
