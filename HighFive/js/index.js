//animating home page
function typeWriter(i) {
    let speed = 100;
    var txt = `HighFive is effective CV creater and generator. CV is the most important thing when you are looking for new job.
    So u have to spend some time to make it perfect. This app is actually not that perfect but it is what it is.
    `;
    if (i < txt.length) {
        document.querySelector(".index-title").innerHTML += txt.charAt(i);
        setTimeout(typeWriter.bind(null, i+=1), speed);
    }
}
typeWriter(0);


let buttonToToggle = document.getElementById("index-button");
buttonToToggle.addEventListener("click", (e) => {
    e.preventDefault()
    // toglik.style.background = "white"
    let mainik = document.querySelector(".index-title");
    let logik = document.querySelector(".logoLogo")
    logik.style.width = "80vh";
    buttonToToggle.style.display = "none"
    mainik.style.display = "none"
    // buttonToToggle.style.visibility = "hidden"
    // mainik.style.visibility = "hidden"
    let balls = document.querySelector(".loader");
    balls.style.display = "block";

    setTimeout(redirect, 1500)
})

function redirect(){
    document.location.href = "../html/playground.html"
}
