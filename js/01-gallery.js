import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
galleryRef.addEventListener("click", onGallereyClick);

const gallerey = createGallerey(galleryItems);

function createGallerey(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
		    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
	      </a>
        </div>`;
		})
		.join("");
}

galleryRef.innerHTML = gallerey;
let instance;

function onGallereyClick(event) {
	event.preventDefault();

	instance = basicLightbox.create(`
    <img src=${event.target.dataset.source} width="800" height="600">
`);

	instance.show();

	window.addEventListener("keydown", onEscKeyDown);
}

// Закриття модалки по ESC

function onEscKeyDown(e) {
	const ESC_KEY_CODE = "Escape";

	if (e.code === ESC_KEY_CODE && basicLightbox.visible()) {
		instance.close();
		window.removeEventListener("keydown", onEscKeyDown);
	}
}
