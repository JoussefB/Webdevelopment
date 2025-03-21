const setup = () => {
	let colorDemos = document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");
	let saveButton = document.querySelector(".buttonSave");
	saveButton.addEventListener("click", save);

	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}

	colorDemos[0].style.backgroundColor = "red";

	update();
}

const update = () => {
	let sliders = document.getElementsByClassName("slider");
	let colorDemos = document.getElementsByClassName("colorDemo");
	let r = sliders[0].value;
	let g = sliders[1].value;
	let b = sliders[2].value;

	colorDemos[0].style.backgroundColor = `rgb(${r},${g},${b})`;

	document.getElementById("redValue").textContent = r;
	document.getElementById("greenValue").textContent = g;
	document.getElementById("blueValue").textContent = b;
}

const save = () => {
	let colorDemos = document.getElementsByClassName("colorDemo");
	let savedSwatches = document.getElementById("savedSwatches");
	let color = colorDemos[0].style.backgroundColor;

	let swatch = document.createElement("div");
	swatch.className = "savedSwatch";
	swatch.style.backgroundColor = color;

	let deleteButton = document.createElement("button");
	deleteButton.className = "deleteButton";
	deleteButton.textContent = "X";
	deleteButton.addEventListener("click", () => {
		savedSwatches.removeChild(swatch);
	});

	swatch.addEventListener("click", () => {
		let rgb = color.match(/\d+/g);
		document.getElementById("red").value = rgb[0];
		document.getElementById("green").value = rgb[1];
		document.getElementById("blue").value = rgb[2];
		update();
	});

	swatch.appendChild(deleteButton);
	savedSwatches.appendChild(swatch);
}

window.addEventListener("load", setup);