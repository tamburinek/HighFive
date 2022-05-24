let profilePic = document.getElementById("test-drop")
let inputPic = document.getElementById("photo-input")
let testPic = document.getElementById("test-pic")

inputPic.onchange = function(e) {
	let file = inputPic.files[0];
	let url = URL.createObjectURL(file);
    testPic.src = url;
}

// let picArea = document.getElementsByClassName("photo-container")

// picArea.ondrop = function(e) {
// 	e.preventDefault()
// 	e.stopPropagation()
// 	let dropped = e.dataTransfer
// 	console.log("i was here")
// }