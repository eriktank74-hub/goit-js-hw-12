import iziToast from 'izitoast';

import pixabayApi from './js/pixabay-api';
import renderFunctions from './js/render-functions';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', e => {
  e.preventDefault();
});

let page = 1;
let images = [];
let searchText = '';

const loadMoreButton = document.querySelector('.load-more');
loadMoreButton.addEventListener('click', async () => {
  page++;
  
  await renderGallery();
  const galleryItem = document.querySelector('.gallery-item');
  const galleryItemRect = galleryItem.getBoundingClientRect();
  
  window.scrollBy({
    top: galleryItemRect.height * 2,
    behavior: 'smooth',
  })
});

const searchButton = document.querySelector('.form-button');
searchButton.addEventListener('click', async () => {
  renderFunctions.clearGallery();
  const searchInput = document.querySelector('.form-input');
  searchText = searchInput.value;

  images = [];
  page = 1;
  renderFunctions.showLoadMoreButton();
  await renderGallery();

  
});

async function renderGallery() {
  renderFunctions.showLoader();

  try {
    const response = await pixabayApi.getImagesByQuery(searchText, page);
    const totalHits = response.data.totalHits;
    const totalImages = page * 15;

    renderFunctions.hideLoader();

    images.push(...response.data.hits);

    if (images.length === 0) {
      iziToast.error({
        message: `Sorry, there are no images matching your search query. Please try again!`,
      });
      renderFunctions.hideLoadMoreButton();
    } else if (totalImages >= totalHits) {
      iziToast.info({
        message: `We're sorry, but you've reached the end of search results.`,
      });
      renderFunctions.createGallery(response.data.hits);
      renderFunctions.hideLoadMoreButton();
    } else {
      renderFunctions.createGallery(response.data.hits);
    }
  } catch (e) {
    console.error(e);
  }
}
