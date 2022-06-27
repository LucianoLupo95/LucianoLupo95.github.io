let text = document.querySelector("#textarea");
let hiraganaTraduction = document.querySelector("#hiragana");
let copyHiraganaButton = document.querySelector("#copyHiragana")

const translate = () =>{
    textToTranslate = text.value;
    hiraganaTraduction.innerHTML = hiragana(textToTranslate);
}

const copyHiragana = () =>{
    hiraganaTraduction.select();
    textarea.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(hiraganaTraduction.value);
    alert("Copiado\n" + hiraganaTraduction.value);
}


text.addEventListener("keyup", translate);
copyHiraganaButton.addEventListener("click", copyHiragana)

const hiragana = (text) =>{
    text = normalize(text);
    //N
    let hiraganaN = /n\s|n$/gi;
    text = text.replace(hiraganaN, "ん");

    let hiraganaNA = /na/gi;
    text = text.replace(hiraganaNA, "な");

    let hiraganaNE = /ne/gi;
    text = text.replace(hiraganaNE, "ね");

    let hiraganaNI = /ni/gi;
    text = text.replace(hiraganaNI, "に");

    let hiraganaNO = /no/gi;
    text = text.replace(hiraganaNO, "の");

    let hiraganaNU = /nu/gi;
    text = text.replace(hiraganaNU, "ぬ");


    //Wa
    let hiraganaWA = /wa/gi;
    text = text.replace(hiraganaWA, "わ");

    let hiraganaWO = /wo/gi;
    text = text.replace(hiraganaWO, "を");


    //Ya
    let hiraganaYA = /ya/gi;
    text = text.replace(hiraganaYA, "や");

    let hiraganaYO = /yo/gi;
    text = text.replace(hiraganaYO, "よ");

    let hiraganaYU = /yu/gi;
    text = text.replace(hiraganaYU, "ゆ");

    //Ra
    let hiraganaRA = /ra/gi;
    text = text.replace(hiraganaRA, "ら");

    let hiraganaRE = /re/gi;
    text = text.replace(hiraganaRE, "れ");

    let hiraganaRI = /ri/gi;
    text = text.replace(hiraganaRI, "り");

    let hiraganaRO = /ro/gi;
    text = text.replace(hiraganaRO, "ろ");

    let hiraganaRU = /ru/gi;
    text = text.replace(hiraganaRU, "る");

    //Ma
    let hiraganaMA = /Ma/gi;
    text = text.replace(hiraganaMA, "ま");

    let hiraganaME = /Me/gi;
    text = text.replace(hiraganaME, "め");

    let hiraganaMI = /Mi/gi;
    text = text.replace(hiraganaMI, "み");

    let hiraganaMO = /Mo/gi;
    text = text.replace(hiraganaMO, "も");

    let hiraganaMU = /Mu/gi;
    text = text.replace(hiraganaMU, "む");

    //Pa
    let hiraganaPA = /pa/gi;
    text = text.replace(hiraganaPA, "ぱ");

    let hiraganaPE = /pe/gi;
    text = text.replace(hiraganaPE, "ぺ");

    let hiraganaPI = /pi/gi;
    text = text.replace(hiraganaPI, "ぴ");

    let hiraganaPO = /po/gi;
    text = text.replace(hiraganaPO, "ぽ");

    let hiraganaPU = /pu/gi;
    text = text.replace(hiraganaPU, "ぷ");

    //Ba
    let hiraganaBA = /ba|va/gi;
    text = text.replace(hiraganaBA, "ば");

    let hiraganaBE = /be|ve/gi;
    text = text.replace(hiraganaBE, "べ");

    let hiraganaBI = /bi|vi/gi;
    text = text.replace(hiraganaBI, "び");

    let hiraganaBO = /bo|vo/gi;
    text = text.replace(hiraganaBO, "ぼ");

    let hiraganaBU = /bu|vu/gi;
    text = text.replace(hiraganaBU, "ぶ");

    //Ja
    let hiraganaHA = /ja/gi;
    text = text.replace(hiraganaHA, "は");

    let hiraganaHE = /je|ge/gi;
    text = text.replace(hiraganaHE, "へ");

    let hiraganaHI = /ji|gi/gi;
    text = text.replace(hiraganaHI, "ひ");

    let hiraganaHO = /jo/gi;
    text = text.replace(hiraganaHO, "ほ");

    let hiraganaFU = /fu/gi;
    text = text.replace(hiraganaFU, "ふ");

    //Da
    let hiraganaDA = /da/gi;
    text = text.replace(hiraganaDA, "だ");

    let hiraganaDE = /de/gi;
    text = text.replace(hiraganaDE, "で");

    let hiraganaDI = /di/gi;
    text = text.replace(hiraganaDI, "ぢ");

    let hiraganaDO = /do/gi;
    text = text.replace(hiraganaDO, "ど");

    let hiraganaDU = /du/gi;
    text = text.replace(hiraganaDU, "づ");


    //Ta
    let hiraganaTA = /ta/gi;
    text = text.replace(hiraganaTA, "た");

    let hiraganaTE = /te/gi;
    text = text.replace(hiraganaTE, "て");

    let hiraganaTI = /ti|chi/gi;
    text = text.replace(hiraganaTI, "ち");

    let hiraganaTO = /to/gi;
    text = text.replace(hiraganaTO, "と");

    let hiraganaTU = /tu|tsu/gi;
    text = text.replace(hiraganaTU, "つ");

    //Za
    let hiraganaZA = /za/gi;
    text = text.replace(hiraganaZA, "ざ");

    let hiraganaZE = /ze/gi;
    text = text.replace(hiraganaZE, "ぜ");

    let hiraganaZI = /zi/gi;
    text = text.replace(hiraganaZI, "じ");

    let hiraganaZO = /zo/gi;
    text = text.replace(hiraganaZO, "ぞ");

    let hiraganaZU = /zu/gi;
    text = text.replace(hiraganaZU, "ず");

    //Sa
    let hiraganaSA = /sa/gi;
    text = text.replace(hiraganaSA, "さ");

    let hiraganaSE = /se|ce/gi;
    text = text.replace(hiraganaSE, "せ");

    let hiraganaSI = /si|ci/gi;
    text = text.replace(hiraganaSI, "し");

    let hiraganaSO = /so/gi;
    text = text.replace(hiraganaSO, "そ");

    let hiraganaSU = /su/gi;
    text = text.replace(hiraganaSU, "す");

    //Ga
    let hiraganaGA = /ga/gi;
    text = text.replace(hiraganaGA, "が");

    let hiraganaGE = /gue/gi;
    text = text.replace(hiraganaGE, "げ");

    let hiraganaGI = /gui/gi;
    text = text.replace(hiraganaGI, "ぎ");

    let hiraganaGO = /go/gi;
    text = text.replace(hiraganaGO, "ご");

    let hiraganaGU = /gu/gi;
    text = text.replace(hiraganaGU, "ぐ");

    //Ka
    let hiraganaKA = /ka|ca/gi;
    text = text.replace(hiraganaKA, "か");

    let hiraganaKE = /ke|que/gi;
    text = text.replace(hiraganaKE, "け");

    let hiraganaKI = /ki|qui/gi;
    text = text.replace(hiraganaKI, "き");

    let hiraganaKO = /ko|co/gi;
    text = text.replace(hiraganaKO, "こ");

    let hiraganaKU = /ku|cu/gi;
    text = text.replace(hiraganaKU, "く");

    //Vocales

    let hiraganaA = /a/gi;
    text = text.replace(hiraganaA, "あ");

    let hiraganaE = /e/gi;
    text = text.replace(hiraganaE, "え");

    let hiraganaI = /i/gi;
    text = text.replace(hiraganaI, "い");

    let hiraganaO = /o/gi;
    text = text.replace(hiraganaO, "お");

    let hiraganaU = /u/gi;
    text = text.replace(hiraganaU, "う");
    return text
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