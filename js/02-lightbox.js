import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerRef = document.querySelector(".gallery");
const cardsMarkupRef = createGalleryList(galleryItems);
galleryContainerRef.insertAdjacentHTML("beforeend", cardsMarkupRef);

function createGalleryList(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
				<li>
					<a class="gallery__item"
						href="${original}">
						<img
							class="gallery__image"
							src="${preview}"
							alt="${description}" />
					</a>
        </li>
            `;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
