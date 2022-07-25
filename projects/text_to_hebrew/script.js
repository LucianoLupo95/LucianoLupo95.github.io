let text = document.querySelector("#textarea");
let hebrewTraduction = document.querySelector("#hebrew");

const translate = () =>{
    textToTranslate = text.value;
    hebrewTraduction.innerHTML = hebrew(textToTranslate);
}


text.addEventListener("keyup", translate);

const hebrew = (text) =>{
    text = normalize(text);
    //N final
    let hebrewNFinal = /n$|n\b/gi;
    text = text.replace(hebrewNFinal, "ן");
    //Ni
    let hebrewNi = /ni/gi;
    text = text.replace(hebrewNi, "נִ");
    //Ne
    let hebrewNe = /ne/gi;
    text = text.replace(hebrewNe, "נֵ");
    //Na
    let hebrewNa = /na/gi;
    text = text.replace(hebrewNa, "נַ");

    //Di
    let hebrewDi = /di/gi;
    text = text.replace(hebrewDi, "דִ");
    //De
    let hebrewDe = /de/gi;
    text = text.replace(hebrewDe, "דֵ");
    //Da
    let hebrewDa = /da/gi;
    text = text.replace(hebrewDa, "דַ");

    //Gi
    let hebrewGi = /gi/gi;
    text = text.replace(hebrewGi, "גִ");
    //Ge
    let hebrewGe = /ge/gi;
    text = text.replace(hebrewGe, "גֵ");
    //Ga
    let hebrewGa = /ga/gi;
    text = text.replace(hebrewGa, "גַ");

    //Bi
    let hebrewBi = /bi/gi;
    text = text.replace(hebrewBi, "בִ");
    //Be
    let hebrewBe = /be/gi;
    text = text.replace(hebrewBe, "בֵ");
    //Ba
    let hebrewBa = /ba/gi;
    text = text.replace(hebrewBa, "בַ");

    //B
    let hebrewB = /b/gi;
    text = text.replace(hebrewB, "ב");
    //G
    let hebrewG = /g/gi;
    text = text.replace(hebrewG, "ג");
    //D   
    let hebrewD = /d/gi;
    text = text.replace(hebrewD, "ד");
    //N
    let hebrewN = /n/gi;
    text = text.replace(hebrewN, "נ");

    return text;
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