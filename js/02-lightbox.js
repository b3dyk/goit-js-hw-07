import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

galleryRef.append(...createGalleryItems(galleryItems));

function createGalleryItems(items) {
  return items.reduce((arr, { description, original, preview }) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");

    a.classList.add("gallery__item");
    a.href = original;
    img.classList.add("gallery__image");
    img.src = preview;
    img.alt = description;

    a.append(img);
    li.append(a);

    arr = [...arr, li];
    return arr;
  }, []);
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
