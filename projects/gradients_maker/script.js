let firstColor = "white";
let secondColor = "white";
let firstStop = "50%";
let secondStop = "100%";

const updateColor = () =>{
    firstColor = color1.value;
    secondColor = color2.value;
    firstStop = stop1.value;
    secondStop = stop2.value;
    document.querySelector("#output1").innerHTML = firstColor;
    document.querySelector("#output2").innerHTML = secondColor;
    document.querySelector("#output3").innerHTML = firstStop;
    document.querySelector("#output4").innerHTML = secondStop;
    document.body.style.background = `linear-gradient(${firstColor} ${firstStop}%, ${secondColor} ${secondStop}%)`;
    document.querySelector("#css-code").innerHTML = `background:linear-gradient(${firstColor} ${firstStop}%, ${secondColor} ${secondStop}%);`;
}

let color1 = document.querySelector("#color1");
color1.addEventListener("change", updateColor);

let color2 = document.querySelector("#color2");
color2.addEventListener("change", updateColor);


let stop1 = document.querySelector("#stop1");
stop1.addEventListener("change", updateColor);

let stop2 = document.querySelector("#stop2");
stop2.addEventListener("change", updateColor);