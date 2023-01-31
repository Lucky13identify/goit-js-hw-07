import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

// Получаем доступ к div gallery, вешаем слушателей, добавляем разметку

const containerGallery = document.querySelector(".gallery");
const body = document.querySelector("body");
const photosCards = createMarkup(galleryItems);
containerGallery.insertAdjacentHTML("afterbegin", photosCards);
containerGallery.addEventListener("click", onCardImgClickTarget);

// Функция перебирает масив и создает новый масив элементов + содает разметку

function createMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>`;
    })
    .join("");
}

// Функция возвращает ссылку на большой URL картинки и заменяет его при клики на выбранное img

function onCardImgClickTarget(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">

`);

  instance.show();

  body.addEventListener("keydown", onButtonEscClick);

  function onCloseModal() {
    body.removeEventListener("keydown", onButtonEscClick);
  }

  function onButtonEscClick(event) {
    if (event.code === "Escape") {
      onCloseModal();
      instance.close();
    }
  }
}

// Функция закрыват модалку по клику ESC
