import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const gallerey = createGallerey(galleryItems);

function createGallerey(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<li>
                <a class="gallery__item" href="${original}">
		            <img class="gallery__image" src="${preview}" alt="${description}"/>
                </a>
            </li>`;
		})
		.join("");
}

galleryRef.innerHTML = gallerey;

const lightbox = new SimpleLightbox(".gallery a", { scrollZoom: false, captionsData: "alt", captionDelay: 250 });
