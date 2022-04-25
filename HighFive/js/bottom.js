function volumeChanger() {
    imageEl = document.getElementById("settingsImage");
    imageEl.addEventListener("click", (e) => {
        if (e.target.className == "up") {
            e.target.src = "../resources/volume-down.svg";
            e.target.className = "down"
        } else {
            e.target.src = "../resources/volume-up.svg";
            e.target.className = "up"
        }
    })
}

window.addEventListener('resize', changeCanvasSize, true);
function changeCanvasSize() {
    var canvas = document.querySelector("canvas.canvas");
    var cHeight = canvas.clientHeight;
    var cWidthSize = canvas.style.width = (210/297)*cHeight + "px";
}



// let test = document.getElementById("skill-button");
// test.addEventListener("click", (e) => {
//     e.preventDefault();
// })

// let test2 = document.getElementById("section-button");
// test2.addEventListener("click", (e) => {
//     e.preventDefault();
// })

// let test3 = document.getElementById("test-drop");
// test3.style.mask = "url(../resources/image004.png) no-repeat center / contain"



volumeChanger();