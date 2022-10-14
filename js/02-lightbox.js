import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItems(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", galleryItemsMarkup);

function createGalleryItems(items) {
  return items
    .map(({ description, original, preview }) => {
      return `<li><a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a></li>`;
    })
    .join("");
}

// =============================================================================

// galleryRef.append(...galleryItemsMarkup);

// function createGalleryItems(items) {
//   const arr = [];

//   items.map(({ description, original, preview }) => {
//     const li = document.createElement("li");
//     const a = document.createElement("a");
//     const img = document.createElement("img");

//     a.classList.add("gallery__item");
//     a.href = original;
//     img.classList.add("gallery__image");
//     img.src = preview;
//     img.alt = description;

//     a.append(img);
//     li.append(a);

//     arr.push(li);
//   });

//   return arr;
// }

// =============================================================================

const slider = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
