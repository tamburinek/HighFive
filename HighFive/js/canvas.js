window.addEventListener('resize', changeCanvasSize, true);
window.addEventListener('load', changeCanvasSize, true);
let canvas = document.querySelector("canvas.canvas");
let cHeight = canvas.height;
let cWidthSize = canvas.width;
let colorToCanvas = "3f3fcf"
let imageToCanvas = document.getElementById("test-pic")
let ctx = canvas.getContext('2d');

function changeCanvasSize() {
    // cHeight = canvas.clientHeight;
    // cWidthSize = (210/297)*cHeight 
    // canvas.style.width = (210/297)*cHeight + "px";
    drawRec()
}

function drawRec(){
    if (canvas.getContext) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = colorToCanvas
        // change boarder only with black color

        //left rectangle
        ctx.fillRect(0, 0, (cWidthSize / 3), cHeight * 3);

        //skills
        ctx.fillStyle = "#ffffff"
        ctx.font = "30px Calibri";
        ctx.fillText("Skills:", cWidthSize / 8, cHeight /2.5);

        drawSkills();
        drawSections();

        //profile pic
        ctx.drawImage(imageToCanvas, cWidthSize / 22, cHeight /15, imageToCanvas.width *2, imageToCanvas.height*2)
    }
}

function drawSkills(){
    let helperHeight = 50
    ctx.fillStyle = "#ffffff"
    ctx.font = "24px Calibri";
    for (const skill of initialState.skills) {
        if(skill.checked){
            ctx.fillText(skill.text, cWidthSize / 13, (cHeight /2.5) + helperHeight);
            helperHeight = helperHeight+30;
        }
    }
}

function drawSections(){
    let helperHeight = 0
    ctx.fillStyle = "#000000"
    for (const skill of initialStateSection.sections) {
        let justForNow = document.getElementById(skill.text + "-area")
        ctx.font = "bold 30px Calibri";
        ctx.fillText(skill.text, (cWidthSize / 2.7), (cHeight /2.8) + helperHeight);
        ctx.font = "20px Calibri";
        for (let index = 0; index < 8; index++) {
            ctx.fillText(justForNow.value.substr(index*60,60), (cWidthSize / 2.7), (cHeight /2.8) + helperHeight + 30 + index*20);
        }
        helperHeight = helperHeight + 250
    }
}

setInterval(drawRec, 1000)
