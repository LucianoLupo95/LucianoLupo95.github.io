let text = document.querySelector("#textarea");
let ukrainianTraduction = document.querySelector("#ukrainian");

const translate = () =>{
    textToTranslate = text.value;
    ukrainianTraduction.innerHTML = ukrainian(textToTranslate);
}


text.addEventListener("keyup", translate);

const ukrainian = (text) =>{
    text = normalize(text);
    //SHCH Mayuscula
    let ukrainianSHCHMayus = /^SHCH|\bSHCH/gi;
    text = text.replace(ukrainianSHCHMayus, "Щ");
    //Shch
    let ukrainianShch = /SHCH/gi;
    text = text.replace(ukrainianShch, "щ");
    //SH Mayuscula
    let ukrainianSHMayus = /^SH|\bSH/gi;
    text = text.replace(ukrainianSHMayus, "Ж");
    //SH
    let ukrainianSH = /SH/gi;
    text = text.replace(ukrainianSH, "ж");
    //CH Mayuscula
    let ukrainianCHMayus = /^CH|\bCH/gi;
    text = text.replace(ukrainianCHMayus, "Ч");
    //CH
    let ukrainianCH = /CH/gi;
    text = text.replace(ukrainianCH, "ч");
    //TS Mayuscula
    let ukrainianTSMayus = /^TS|\bTS/gi;
    text = text.replace(ukrainianTSMayus, "Ц");
    //TS
    let ukrainianTS = /TS/gi;
    text = text.replace(ukrainianTS, "ц");


    //S Mayuscula
    let ukrainianSMayus = /^S|\bS/gi;
    text = text.replace(ukrainianSMayus, "С");
    //S
    let ukrainianS = /S/gi;
    text = text.replace(ukrainianS, "с");
    //B Mayuscula
    let ukrainianBMayus = /^b|\bb|^w|\bw/gi;
    text = text.replace(ukrainianBMayus, "Б");
    //B
    let ukrainianB = /b|w/gi;
    text = text.replace(ukrainianB, "б");
    //J Mayuscula
    let ukrainianJMayus = /^J|\bJ/gi;
    text = text.replace(ukrainianJMayus, "Г");
    //J
    let ukrainianJ = /J/gi;
    text = text.replace(ukrainianJ, "г");
    //G Mayuscula
    let ukrainianGMayus = /^G|\bG/gi;
    text = text.replace(ukrainianGMayus, "Ґ");
    //G
    let ukrainianG = /G/gi;
    text = text.replace(ukrainianG, "ґ");
    //D Mayuscula
    let ukrainianDMayus = /^D|\bD/gi;
    text = text.replace(ukrainianDMayus, "Д");
    //D
    let ukrainianD = /D/gi;
    text = text.replace(ukrainianD, "д");
    //F Mayuscula
    let ukrainianFMayus = /^F|\bF/gi;
    text = text.replace(ukrainianFMayus, "Ф");
    //F
    let ukrainianF = /F/gi;
    text = text.replace(ukrainianF, "ф");


    //IA Mayuscula
    let ukrainianIAMayus = /^IA|\bIA/gi;
    text = text.replace(ukrainianIAMayus, "Я");
    //IA
    let ukrainianIA = /IA/gi;
    text = text.replace(ukrainianIA, "я");
    //IE Mayuscula
    let ukrainianIEMayus = /^IE|\bIE/gi;
    text = text.replace(ukrainianIEMayus, "Є");
    //IE
    let ukrainianIE = /IE/gi;
    text = text.replace(ukrainianIE, "є");
    //II Mayuscula
    let ukrainianIIMayus = /^II|\bII/gi;
    text = text.replace(ukrainianIIMayus, "І");
    //II
    let ukrainianII = /II/gi;
    text = text.replace(ukrainianII, "і");
    //IU Mayuscula
    let ukrainianIUMayus = /^IU|\bIU/gi;
    text = text.replace(ukrainianIUMayus, "Ю");
    //IU
    let ukrainianIU = /IU/gi;
    text = text.replace(ukrainianIU, "ю");


    //Z Mayuscula
    let ukrainianZMayus = /^Z|\bZ/gi;
    text = text.replace(ukrainianZMayus, "З");
    //Z
    let ukrainianZ = /Z/gi;
    text = text.replace(ukrainianZ, "з");
    //K Mayuscula
    let ukrainianKMayus = /^K|\bK/gi;
    text = text.replace(ukrainianKMayus, "К");
    //K
    let ukrainianK = /K/gi;
    text = text.replace(ukrainianK, "к");
    //L Mayuscula
    let ukrainianLMayus = /^L|\bL/gi;
    text = text.replace(ukrainianLMayus, "Л");
    //L
    let ukrainianL = /L/gi;
    text = text.replace(ukrainianL, "л");
    //M Mayuscula
    let ukrainianMMayus = /^M|\bM/gi;
    text = text.replace(ukrainianMMayus, "М");
    //M
    let ukrainianM = /M/gi;
    text = text.replace(ukrainianM, "м");
    //N Mayuscula
    let ukrainianNMayus = /^N|\bN/gi;
    text = text.replace(ukrainianNMayus, "Н");
    //N
    let ukrainianN = /N/gi;
    text = text.replace(ukrainianN, "н");
    //P Mayuscula
    let ukrainianPMayus = /^P|\bP/gi;
    text = text.replace(ukrainianPMayus, "П");
    //P
    let ukrainianP = /P/gi;
    text = text.replace(ukrainianP, "п");
    //R Mayuscula
    let ukrainianRMayus = /^R|\bR/gi;
    text = text.replace(ukrainianRMayus, "Р");
    //R
    let ukrainianR = /R/gi;
    text = text.replace(ukrainianR, "р");

    //U Mayuscula
    let ukrainianUMayus = /^U|\bU/gi;
    text = text.replace(ukrainianUMayus, "У");
    //U
    let ukrainianU = /U/gi;
    text = text.replace(ukrainianU, "у");
    //A
    let ukrainianA = /A/gi;
    text = text.replace(ukrainianA, "a");
    //E
    let ukrainianE = /E/gi;
    text = text.replace(ukrainianE, "e");
   //I
    let ukrainianI = /I/gi;
    text = text.replace(ukrainianI, "i");
   //O
    let ukrainianO = /O/gi;
    text = text.replace(ukrainianO, "o");
   //T
    let ukrainianT = /T/gi;
    text = text.replace(ukrainianT, "t");


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