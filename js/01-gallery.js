import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItems(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", galleryItemsMarkup);
galleryRef.addEventListener("click", onPictureClick);

function createGalleryItems(items) {
  return items
    .map(({ description, original, preview }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onPictureClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const modal = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
  `);

  modal.show();

  closeModalOnEscBtn(modal);
}

function closeModalOnEscBtn(instance) {
  window.addEventListener("keydown", onEscBtnPress);

  function onEscBtnPress(event) {
    if (event.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscBtnPress);
    }
  }
}
