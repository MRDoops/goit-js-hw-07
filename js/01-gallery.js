import { galleryItems } from "./gallery-items.js";

const galleryContainerRef = document.querySelector(".gallery");
const cardsMarkupRef = createGalleryList(galleryItems);
galleryContainerRef.insertAdjacentHTML("beforeend", cardsMarkupRef);
galleryContainerRef.addEventListener("click", onImgClick);

function createGalleryList(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
            <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
            `;
    })
    .join("");
}

let lightbox = basicLightbox.create(`<img width="1280" height="auto" src="">`, {
  onShow: (lightbox) => {
    window.addEventListener("keydown", onEscKeyPress);
  },
  onClose: (lightbox) => {
    window.removeEventListener("keydown", onEscKeyPress);
  },
});

function onImgClick(e) {
  e.preventDefault();
  const imgSrc = e.target.dataset.source;
  if (!imgSrc) return;

  lightbox.element().querySelector("img").src = imgSrc;
  lightbox.show();
}

function onEscKeyPress(e) {
  if (e.code !== "Escape") return;
  lightbox.close();
}
