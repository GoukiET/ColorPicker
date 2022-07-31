const inputColor = document.getElementById("inputColor");
const boton = document.getElementById("btnVisualizar");
const colorHexa = document.getElementById("colorHexa");
const card = document.getElementById("card");

boton.addEventListener("click", () => {
    /* inputColor.value */
    colorHexa.textContent = inputColor.value
    card.style.backgroundColor = inputColor.value
    /* console.log(inputColor.value); */
})

