const cardBackgroundColor = document.getElementById("cardBackgroundColor");
const inputColor = document.getElementById("inputColor");

function submit() {
    cardBackgroundColor.style.backgroundColor = inputColor.value;
}