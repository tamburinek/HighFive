window.addEventListener('resize', changeCanvasSize, true);
window.addEventListener('load', changeCanvasSize, true);
function changeCanvasSize() {
    var canvas = document.querySelector("svg.canvas");
    var cHeight = canvas.clientHeight;
    var cWidthSize = canvas.style.width = (210/297)*cHeight + "px";
    // console.log(cHeight + " " + cWidthSize)
}