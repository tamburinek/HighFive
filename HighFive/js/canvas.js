window.addEventListener('resize', changeCanvasSize, true);
window.addEventListener('load', changeCanvasSize, true);
let canvas = document.querySelector("canvas.canvas");
let cHeight = canvas.height;
let cWidthSize = canvas.width;
let colorToCanvas = "3f3fcf"
let imageToCanvas = document.getElementById("test-pic")

function changeCanvasSize() {
    // cHeight = canvas.clientHeight;
    // cWidthSize = (210/297)*cHeight 
    // canvas.style.width = (210/297)*cHeight + "px";
    drawRec()
}

function drawRec(){
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = colorToCanvas
        // change boarder only with black color

        //left rectangle
        ctx.fillRect(0, 0, (cWidthSize / 3), cHeight * 3);

        ctx.fillStyle = "#ffffff"
        ctx.font = "30px Calibri";
        ctx.fillText("Skills:", cWidthSize / 8, cHeight /3);

        console.log(imageToCanvas.width + " " + imageToCanvas.height)
        ctx.drawImage(imageToCanvas, cWidthSize / 22, cHeight /10, imageToCanvas.width *2, imageToCanvas.height*2)
    }
}

// setInterval(drawRec, 3000)
