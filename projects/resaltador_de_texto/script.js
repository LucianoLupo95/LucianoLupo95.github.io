
let texto = document.querySelector("#texto");
let textoTransformado = document.querySelector("#texto-transformado");
let silabas = ["MA","ME", "MI","MO","MU","PA","PE","PI","PO","PU","NA","NE","NI","NO","NU","SA","SE","SI","SO","SU", "LA","LE","LI","LO","LU","DA","DE","DI","DO","DO","FA","FE","FI","FO","FU","TA","TE","TI","TO","TU","RA","RE","RI","RO","RU","RRA","RRE","RRI","RRO","RRU","BA","BE","BI","BO","BU"];
let textoPorResaltar = "";

const resaltarTexto = () =>{
    textoPorResaltar = texto.value;
    textoPorResaltar = normalize(textoPorResaltar);
    silabas.forEach(resaltar);
    textoTransformado.innerHTML = textoPorResaltar;
}

texto.addEventListener("keyup", resaltarTexto);

const resaltar = (texto) =>{
    let resaltado = `<b class="resaltado">${texto}</b>`
    textoPorResaltar= textoPorResaltar.replaceAll(texto, resaltado);
}

const normalize = (text) =>{
    text = text.toUpperCase();    
    let acentoA = /á/gi;
    text = text.replace(acentoA, "A");
    let acentoE = /é/gi;
    text = text.replace(acentoE, "E");
    let acentoI = /í/gi;
    text = text.replace(acentoI, "I");
    let acentoO = /ó/gi;
    text = text.replace(acentoO, "O");
    let acentoU = /ú/gi;
    text = text.replace(acentoU, "U");
    return text;
}