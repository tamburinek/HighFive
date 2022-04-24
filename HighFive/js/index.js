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

function typeWriter(i) {
    let speed = 75;
    var txt = 'HighFive is effective CV creater and generator. CV is the most important thing when you are looking for new job.';
    if (i < txt.length) {
        document.querySelector(".index-title").innerHTML += txt.charAt(i);
        setTimeout(typeWriter.bind(null, i+=1), speed);
    }
}

window.addEventListener('resize', changeCanvasSize, true);
function changeCanvasSize() {
    var canvas = document.querySelector("svg.canvas");
    var cHeight = canvas.clientHeight;
    var cWidthSize = canvas.style.width = (210/297)*cHeight + "px";
}
