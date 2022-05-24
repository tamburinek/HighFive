window.addEventListener('resize', changeCanvasSize, true);
window.addEventListener('load', changeCanvasSize, true);
let canvas = document.querySelector("canvas.canvas");
let cHeight = 0;
let cWidthSize = 0;
let color = "FF0000"

function changeCanvasSize() {
    cHeight = canvas.clientHeight;
    cWidthSize = canvas.style.width = (210/297)*cHeight + "px";
    // console.log(cHeight + " " + cWidthSize)
    drawRec()
}

function drawRec(){
    let context = canvas.getContext("2d")
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = color
        ctx.fillRect(0, 0, 150, cHeight);
    }
}
