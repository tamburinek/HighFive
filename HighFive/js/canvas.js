window.addEventListener('resize', changeCanvasSize, true);
window.addEventListener('load', changeCanvasSize, true);
function changeCanvasSize() {
    var canvas = document.querySelector("svg.canvas");
    var cHeight = canvas.clientHeight;
    var cWidthSize = canvas.style.width = (210/297)*cHeight + "px";
}

// let test3 = document.getElementById("test-drop");
// test3.style.mask = "url(../resources/image004.png) no-repeat center / contain"