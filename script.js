let h3 = document.querySelector("h3")
let color1 = document.querySelector(".color1")
let color2 = document.querySelector(".color2") 
let background = document.getElementById("gradient")

console.log(h3);
console.log(color1);
console.log(color2);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function setGradient() {
	background.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + `)`;
	h3.textContent = background.style.background + ";";
}

