function typeWriter(i) {
    let speed = 75;
    var txt = 'HighFive is effective CV creater and generator. CV is the most important thing when you are looking for new job.';
    if (i < txt.length) {
        document.querySelector(".index-title").innerHTML += txt.charAt(i);
        setTimeout(typeWriter.bind(null, i+=1), speed);
    }
}
typeWriter(0);

