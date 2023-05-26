const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".navbar ul");

menuButton.addEventListener("click", showMenu);

function showMenu() {
	menu.classList.toggle("responsive-active");
	menuButton.classList.toggle("menu-button-active");
}

const modal = document.getElementById("modalWrap");
let galleryItem;

function showInModal(e) {
	//let img = e.querySelector("img");
	//console.log(img);
	modal.style.display = "block";
	modal
		.querySelector("img")
		.setAttribute("src", e.querySelector("img").getAttribute("src"));
	galleryItem = e;
}

function hideModal() {
	modal.style.display = "none";
}

function galleryBack() {
	if (galleryItem.previousElementSibling) {
		modal
			.querySelector("img")
			.setAttribute(
				"src",
				galleryItem.previousElementSibling
					.querySelector("img")
					.getAttribute("src")
			);
		galleryItem = galleryItem.previousElementSibling;
	}
}

function galleryForw() {
	if (galleryItem.nextElementSibling) {
		modal
			.querySelector("img")
			.setAttribute(
				"src",
				galleryItem.nextElementSibling.querySelector("img").getAttribute("src")
			);
		galleryItem = galleryItem.nextElementSibling;
	}
}
