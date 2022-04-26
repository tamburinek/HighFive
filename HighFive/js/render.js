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

// creating skills
let skillButton = document.getElementById("skill-button");
skillButton.addEventListener("click", (e) => {
    e.preventDefault();
    let helperInput = document.getElementById("new-skill-title");
    let textString = helperInput.value;
    let formToTag = document.querySelector(".skill-tags");

    if(textString == ''){
        return;
    }

    liEl = document.createElement('li');

    inputElementik = document.createElement('input');
    inputElementik.type = "checkbox";
    inputElementik.id = textString;
    inputElementik.value = textString;

    labelEl = document.createElement('label');
    labelEl.htmlFor = textString;
    labelEl.innerText = textString;

    liEl.appendChild(inputElementik);
    liEl.appendChild(labelEl);

    formToTag.appendChild(liEl);

    helperInput.value = '';
})
