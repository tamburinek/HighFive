//animating home page
function typeWriter(i) {
    let speed = 75;
    var txt = `HighFive is effective CV creater and generator. CV is the most important thing when you are looking for new job.
    So u have to spend some time to make it perfect. This app is actually not that perfect, but it is what it is.
    `;
    if (i < txt.length) {
        document.querySelector(".index-title").innerHTML += txt.charAt(i);
        setTimeout(typeWriter.bind(null, i+=1), speed);
    }
}
typeWriter(0);

