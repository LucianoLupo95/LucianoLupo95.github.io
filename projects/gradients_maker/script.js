let firstColor = "white";
let secondColor = "white";
let firstStop = "50%";
let secondStop = "100%";
let angle = "180";


const updateColor = () =>{
    firstColor = color1.value;
    secondColor = color2.value;
    firstStop = stop1.value;
    secondStop = stop2.value;
    angle = angleRange.value;
    document.querySelector("#output1").value = firstColor;
    document.querySelector("#output2").value = secondColor;
    document.querySelector("#output3").value = firstStop;
    document.querySelector("#output4").value = secondStop;
    document.querySelector("#output5").value = angle;
    document.body.style.background = `linear-gradient(${angle}deg, ${firstColor} ${firstStop}%, ${secondColor} ${secondStop}%)`;
    document.querySelector("#css-code").innerHTML = `background:linear-gradient(${angle}deg, ${firstColor} ${firstStop}%, ${secondColor} ${secondStop}%);`;
}

const writeColor = () =>{
    color1.value = output1.value;
    color2.value = output2.value;
    stop1.value = output3.value;
    stop2.value = output4.value;
    angleRange.value = output5.value;
    updateColor()
}

const randomColor = () =>{
    let randomNum = "#";
    for(let i = 0; i < 6; i++){
        num = Math.floor(Math.random()*15);
        switch(num){
            case 10:
                num = "A";
                break;
            case 11:
                num = "B";
                break;
            case 12:
                num = "C";
                break;
            case 13:
                num = "D";
                break;
            case 14:
                num = "E";
                break;
            case 15:
                num = "F";
                break;
        }
        randomNum+=num;
    }
    return randomNum;
}
const randomize = () =>{
    color1.value = randomColor();
    color2.value = randomColor();
    updateColor();
}


let color1 = document.querySelector("#color1");
color1.addEventListener("change", updateColor);


let color2 = document.querySelector("#color2");
color2.addEventListener("change", updateColor);


let stop1 = document.querySelector("#stop1");
stop1.addEventListener("change", updateColor);

let stop2 = document.querySelector("#stop2");
stop2.addEventListener("change", updateColor);

let angleRange = document.querySelector("#angle");
angleRange.addEventListener("change", updateColor);

let output1 = document.querySelector("#output1");
output1.value = "#ffffff";
output1.addEventListener("change", writeColor);

let output2 = document.querySelector("#output2");
output2.value = "#ffffff";
output2.addEventListener("change", writeColor);

let output3 = document.querySelector("#output3");
output3.value = "50";
output3.addEventListener("change", writeColor);

let output4 = document.querySelector("#output4");
output4.value = "100";
output4.addEventListener("change", writeColor);

let output5 = document.querySelector("#output5");
output5.value = "180";
output5.addEventListener("change", writeColor);

//Random color
let randomizeButton = document.querySelector(".randomize");
randomizeButton.addEventListener("click", randomize);






