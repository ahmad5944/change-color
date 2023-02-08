const cardBackgroundColor = document.getElementById("cardBackgroundColor");
const inputColor = document.getElementById("inputColor");

function submit() {
    cardBackgroundColor.style.backgroundColor = inputColor.value;
}

inputColor.addEventListener("keydown", function (e) {
    if (e.code === "ControlLeft" || e.code === "Enter") {
        submit();
    }
});
