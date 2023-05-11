import { galleryItems } from './gallery-items.js';


const gallery = document.querySelector(".gallery")
gallery.addEventListener("click", selectedPicture);

createGallery();

function createGallery() {  
    const items = galleryItems.map(item => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`).join("");
    gallery.insertAdjacentHTML("beforeend", items);
}

function selectedPicture (event) {
    event.preventDefault();

    if(event.target.nodeName !== "IMG") {
      return
    }
   const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source} width="800" height="600">`);
    instance.show();
    if (instance.visible) {        
       document.addEventListener("keydown", (event) => {
            if(event.key === "Escape") {
                instance.close();
            }
        });
    }
}


