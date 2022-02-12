let array = [];
let ranking = {};
let guia = document.getElementById("guia");
function start() {
    let texto = document.getElementById("area-opciones").value;
    array = texto.split("\n");    
    for (let opcion of array){
        ranking[opcion] = 0;
    }
    array = allOptions(array);
    array = shuffle(array);
    changeButtons(array[0])
    guia.innerHTML = `
        Ya hiciste: ${contador} <br>
        Te faltan: ${array.length} <br>
    `;   

}

/* Función para mezclar arrays */
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    
        return array;
}


/* Función para crear arrays bidimensionales */
const allOptions = (array) =>{
    let biArray = [];
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(j === i){
                continue;
            }
            biArray.push([array[i], array[j]]);
        }
    }
    return biArray;
}


/* Función para modificar valor de botones */
const changeButtons = (array) =>{
    let botones = document.getElementsByClassName("opcion");
    botones[0].innerHTML = array[0];
    botones[1].innerHTML = array[1];
}

/* Función para hacer loop por los botones */

let contador = 0;
const elegir = (opcion) =>{
    ranking[array[contador][opcion]] ++;
    console.log(array[contador][opcion])
    if(contador < array.length -1){        
        contador++;
        changeButtons(array[contador]);
        guia.innerHTML = `
        Ya hiciste: ${contador} <br>
        Te faltan: ${array.length} <br>
        Progreso: ${(contador / array.length * 100).toFixed(0)}%
    `;        
    }else{
        console.log("Fin");
        contador = 0;
        rankingObject(ranking);
    }
}

const rankingObject = (object) =>{
    let resultado = [];
    for (let puesto in ranking){
        resultado.push([puesto, ranking[puesto]]);
    }
    resultado.sort(function(a,b){
        return b[1] - a[1];
    })
    let resultadoString = "";
    for(let i in resultado){
        resultadoString = resultadoString + resultado[i][0] + " " + String(resultado[i][1]) + "<br>";
        console.log(resultadoString)
    }
    document.getElementById("guia").innerHTML = resultadoString;
}

//Keys
document.addEventListener('keyup', (event) => {
    if (event.code == "Numpad1" || event.code == "ArrowLeft"){
        elegir(0)
    }else if(event.code == "Numpad2" || event.code == "ArrowRight"){
        elegir(1)
    }
    // var name = event.key;
    // var code = event.code;
    // // Alert the key name and key code on keydown
    // alert(`Key pressed ${name} \r\n Key code value: ${code}`);
  }, false);
