imageEl = document.getElementById("settingsImage");
imageEl.addEventListener("click", (e) => {
    if(e.target.className == "up"){
        e.target.src="../resources/volume-down.svg";
        e.target.className = "down"
    }else{
        e.target.src="../resources/volume-up.svg";
        e.target.className = "up"
    }
})