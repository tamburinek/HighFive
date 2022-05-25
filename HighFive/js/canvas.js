window.addEventListener('resize', changeCanvasSize, true);
window.addEventListener('load', changeCanvasSize, true);
let canvas = document.querySelector("canvas.canvas");
canvas.style.letterSpacing = '0.1rem';
let cHeight = canvas.height;
let cWidthSize = canvas.width;
let colorToCanvas = "#001233"
let isBlackNeeded = false
let imageToCanvas = document.getElementById("test-pic")
let ctx = canvas.getContext('2d');
let fontName = "Trebuchet MS"
let fontBig = "24px"
let fontMedium = "22px"
let fontSmall = "20px"
let fontRegular = "200"
let fontBoldest = "900"

function changeCanvasSize() {
    drawRec()
}

function drawRec(){
    if (canvas.getContext) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = colorToCanvas

        //left rectangle
        ctx.fillRect(0, 0, (cWidthSize / 3), cHeight);

        ctx.fillStyle = "#000000"
        ctx.fillRect((cWidthSize / 3), 0, 2, cHeight);

        //skills
        if(isBlackNeeded){
            ctx.fillStyle = "#000000"
        }else {
            ctx.fillStyle = "#ffffff"
        }

        drawInputs();
        drawSkills();
        drawSections();

        //profile pic
        ctx.drawImage(imageToCanvas, cWidthSize / 22, cHeight /15, imageToCanvas.width *2, imageToCanvas.height*2)
    }
}

function drawInputs(){
    ctx.fillStyle = "#000000"
    ctx.font =  "bold " + fontBig + " " + fontName;
    ctx.fillText("Job title:", cWidthSize / 2.7, cHeight /22);
    ctx.fillText("Name:", cWidthSize / 2.7, cHeight /12);
    ctx.fillText("Surname:", cWidthSize / 1.45, cHeight/12);
    ctx.fillText("Email:", cWidthSize / 2.7, cHeight /6);
    ctx.fillText("Phone:", cWidthSize / 1.45, cHeight /6);
    ctx.fillText("Birth:", cWidthSize / 2.7, cHeight /4);
    ctx.fillText("Country:", cWidthSize / 1.45, cHeight /4);

    ctx.font = fontSmall + " " + fontName;
    ctx.fillText(document.getElementById("job-title-input").value, cWidthSize / 2, cHeight /18);
    ctx.fillText(document.getElementById("first-name-input").value, cWidthSize / 2.7, cHeight /10);
    ctx.fillText(document.getElementById("last-name-input").value, cWidthSize / 1.45, cHeight /10);
    ctx.fillText(document.getElementById("email-input").value, cWidthSize / 2.7, cHeight /5.4);
    ctx.fillText(document.getElementById("phone-input").value, cWidthSize / 1.45, cHeight /5.4);
    ctx.fillText(document.getElementById("birth-input").value, cWidthSize / 2.7, cHeight /3.75);
    ctx.fillText(document.getElementById("placeholder-input").value, cWidthSize / 1.45, cHeight /3.75);

}

function drawSkills(){
    let helperHeight = 50
    if(isBlackNeeded){
        ctx.fillStyle = "#000000"
    }else {
        ctx.fillStyle = "#ffffff"
    }
    ctx.font =  "bold " + fontBig + " " + fontName;

    ctx.fillText("Skills:", cWidthSize / 20, cHeight /2.8);
    ctx.font = fontSmall +" "+fontName;
    for (const skill of initialState.skills) {
        if(skill.checked){
            ctx.fillText(skill.text, cWidthSize / 20, (cHeight /2.8) + helperHeight);
            helperHeight = helperHeight+30;
        }
    }
}

function drawSections(){
    let helperHeight = 0
    ctx.fillStyle = "#000000"
    for (const skill of initialStateSection.sections) {
        let justForNow = document.getElementById(skill.text + "-area")

        ctx.font = "bold " + fontMedium + " " + fontName;
        ctx.fillText(skill.text, (cWidthSize / 2.7), (cHeight /2.8) + helperHeight);

        ctx.font = fontSmall + " " + fontName;
        for (let index = 0; index < 8; index++) {
            ctx.fillText(justForNow.value.substr(index*49,49), (cWidthSize / 2.7), (cHeight /2.8) + helperHeight + 30 + index*20);
        }
        helperHeight = helperHeight + 250
    }
}

setInterval(drawRec, 1000)
