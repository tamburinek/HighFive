let profilePic = document.getElementById("test-drop")
let inputPic = document.getElementById("photo-input")
let testPic = document.getElementById("test-pic")

inputPic.onchange = function(e) {
	let file = inputPic.files[0];
	let url = URL.createObjectURL(file);
    testPic.src = url;
}