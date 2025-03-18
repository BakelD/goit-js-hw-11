import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabey-api';
import { renderMarkUp, simpleLightbox } from './js/render-funcitons';

const refs = {
  form: document.querySelector('.form'),
  gallerylist: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', async e => {
  e.preventDefault();
  refs.gallerylist.innerHTML = '';
  refs.loader.classList.add('is-visible');

  const query = e.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({
      message: 'Please fill out the request!',
      position: 'topRight',
    });
    return;
  }

  try {
    const {
      data: { hits: images },
    } = await fetchImages(query);

    if (!images.length) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      refs.loader.classList.remove('is-visible');

      return;
    }

    refs.loader.classList.remove('is-visible');
    refs.gallerylist.innerHTML = renderMarkUp(images);
    simpleLightbox.refresh();
    4;
  } catch (error) {}
});
