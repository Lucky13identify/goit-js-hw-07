import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

// Получаем доступ к div gallery, вешаем слушателей, добавляем разметку

const containerGallery = document.querySelector(".gallery");
const photosCards = createMarkup(galleryItems);
containerGallery.insertAdjacentHTML("afterbegin", photosCards);
// containerGallery.addEventListener("click", onCardImgClickTarget);

// Функция перебирает масив и создает новый масив элементов + содает разметку

var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

function createMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

// function onCardImgClickTarget(evt) {
//   evt.preventDefault();
//   if (!evt.target.classList.contains("gallery__image")) {
//     return;
//   }
//   console.log("sss");
// }
