// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const list = document.querySelector('.gallery');

for (const { preview, original, description } of galleryItems) {
  const string = `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}n" />
</a>`;
  list.insertAdjacentHTML('afterbegin', string);
}

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
