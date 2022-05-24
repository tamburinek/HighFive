let colorButtons = ["blueLabel", "lightBlueLabel", "whiteLabel", "purpleLabel", "redLabel", "greenLabel", "yellowLabel", "orangeLabel",
"brownLabel", "blakcLabel"]

const colorButtonsHex = {
    blueLabel : "3f3fcf",
    lightBlueLabel : "add8e6", 
    whiteLabel : "ffffff", 
    purpleLabel:"ff8fa2", 
    redLabel : "ff0000", 
    greenLabel:"34ad34",
    yellowLabel:  "ffff00", 
    orangeLabel : "edaa2f",
    brownLabel : "a52a2a", 
    blakcLabel : "000000"
}

for (const button of colorButtons) {
    let helperButton = document.getElementById(button)
    helperButton.addEventListener("click", (e) => {
        colorToCanvas = colorButtonsHex[button]
        drawRec()
    })
}