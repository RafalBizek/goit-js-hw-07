import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createGalleryItem(items) {
  return items
    .map(
      (item) =>
        `<li>
                <div class="gallery__item">
                    <a class="gallery__link" href="${item.original}">
                        <img
                        class="gallery__image"
                        src="${item.preview}"
                        data-source="${item.original}"
                        alt="${item.description}">
                    </a>
                </div>
            </li>`
    )
    .join("");
}

const addGalleryItem = createGalleryItem(galleryItems);

gallery.innerHTML = addGalleryItem;
gallery.addEventListener("click", onImageClick);

function onImageClick(evt) {
  //
  blockStandardAction(evt);
  //

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  //
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
    `);
  instance.show();
  //
  gallery.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
//
function blockStandardAction(evt) {
  evt.preventDefault();
}
