let texto = document.querySelector("#textarea");
let traduccion = document.querySelector("#hiragana");

const translate = () =>{
    traduccion.innerHTML = texto.value;
}




texto.addEventListener("keyup", translate);