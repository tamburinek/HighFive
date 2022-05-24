window.addEventListener('resize', changeCanvasSize, true);
window.addEventListener('load', changeCanvasSize, true);
let canvas = document.querySelector("canvas.canvas");
let cHeight = canvas.height;
let cWidthSize = canvas.width;
let colorToCanvas = "3f3fcf"

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
        ctx.fillRect(0, 0, cWidthSize / 3, cHeight);
        console.log(cHeight)
    }
}
