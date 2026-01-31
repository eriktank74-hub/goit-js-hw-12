import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export default {
  createGallery: images => {
    const iamgesMarkup = images.map(img => {
      return `
            <li class="gallery-item">
            <a class="gallery-link" href="${img.largeImageURL}">
                <img class="gallery-img" src="${img.webformatURL}" alt="${img.tags}">
                <ul class="gallery-text-container">
                <li class="gallery-text">
                    <div class="gallery-title">
                    Likes
                    </div>
                    <div class="gallery-sub-title">
                    ${img.likes}
                    </div>
                </li>
                <li class="gallery-text">
                    <div class="gallery-title">
                    Views
                    </div>
                    <div class="gallery-sub-title">
                    ${img.views}
                    </div>
                </li>
                <li class="gallery-text">
                    <div class="gallery-title">
                    Comments
                    </div>
                    <div class="gallery-sub-title">
                    ${img.comments}
                    </div>
                </li>
                <li class="gallery-text">
                    <div class="gallery-title">
                    Downloads
                    </div>
                    <div class="gallery-sub-title">
                    ${img.downloads}
                    </div>
                </li>
                </ul>
            </a>
            </li>
        `;
    });
    const gallery = document.querySelector('.gallery');
    gallery.insertAdjacentHTML('beforeend', iamgesMarkup.join(''));

    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(galleryItem => {
      galleryItem.addEventListener('click', e => {
        e.preventDefault();

        const simpleLightbox = new SimpleLightbox('.gallery-link', {
          captionsData: 'alt',
          captionDelay: 250,
        });

        simpleLightbox.refresh();
      });
    });
  },
  clearGallery: () => {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
  },
  showLoader: () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('visible');
  },
  hideLoader: () => {
    const loader = document.querySelector('.loader');
    loader.classList.remove('visible');
  },
  showLoadMoreButton: () => {
    const loadMoreButton = document.querySelector('.load-more');
    loadMoreButton.classList.add('visible');
    
  },
  hideLoadMoreButton: () => {
    const loadMoreButton = document.querySelector('.load-more');
    loadMoreButton.classList.remove('visible');
  }
};
