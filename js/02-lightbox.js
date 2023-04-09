import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createGalleryItem(items) {
  return items
    .map(
      (item) =>
        `<li class="gallery__item">
                <a class="gallery__link" href="${item.original}">
                    <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}">
                </a>
            </li>`
    )
    .join("");
}

const addGalleryItem = createGalleryItem(galleryItems);

gallery.innerHTML = addGalleryItem;

const lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captionsData: "alt",
  captionDelay: 250,
});
