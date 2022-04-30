// delete basic section
let eli = document.getElementById("delete-button-basic-info");
eli.addEventListener("click", (e)=>{
    e.preventDefault();
    let form = document.getElementById("form");
    let basic = document.getElementById("basic");
    let buttonRemove = document.getElementById("basic-remove-button");
    form.removeChild(basic);
    form.removeChild(buttonRemove);
});
