buttonEl = document.getElementById("index-button");
buttonEl.addEventListener("click", () => {
    mainEl = document.getElementById("index-main");
    mainEl.innerHTML = " ";
    mainEl.className = "cv-main";
    mainEl.innerHTML = '<div class="left center"><div id="names"><label for="first-name">First Name</label><input id="first-name" type="text"><label for="last-name">Last Name</label><input id="last-name" type="text"></div><div><label>Profile pic</label><input type="file"></div><div><label>First Name</label><input type="text"><label>Last Name</label><input type="text"></div><div><label>First Name</label><input type="text"><label>Last Name</label><input type="text"></div><div><button class="glow-on-hover" type="button">GENERATE PDF</button></div></div><div class="right center"><svg width="420" height="594" viewbox="0 0 100 100"></svg></div>';

    headerEl = document.getElementById("header");
    headerEl.insertAdjacentHTML("afterbegin",'<div id="logo"><img id="logo-right" src="../resources/logosmall.svg" alt="logoOfHighFive" height="50vh" width="50vh"></img></div>' )
})

