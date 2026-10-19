const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');

function setMenu(open, restoreFocus = false) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  navigation.classList.toggle('is-open', open);
  if (restoreFocus) menuButton.focus();
}

menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.header-inner')) setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false, true);
  }
});
window.matchMedia('(min-width: 901px)').addEventListener('change', () => setMenu(false));

const lightbox = document.querySelector('#lightbox');
const galleryButtons = [...document.querySelectorAll('[data-gallery]')];
const image = document.querySelector('#lightbox-image');
const caption = document.querySelector('#lightbox-caption');
const counter = document.querySelector('#gallery-counter');
let currentPhoto = 0;
let lastTrigger;

function showPhoto(index) {
  currentPhoto = (index + galleryButtons.length) % galleryButtons.length;
  const item = galleryButtons[currentPhoto];
  image.src = item.dataset.src;
  image.alt = item.querySelector('img').alt;
  caption.textContent = item.dataset.caption;
  counter.textContent = `${currentPhoto + 1} / ${galleryButtons.length}`;
}

galleryButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    lastTrigger = button;
    showPhoto(index);
    lightbox.showModal();
    document.documentElement.classList.add('dialog-open');
    lightbox.querySelector('[data-close-gallery]').focus();
  });
});

document.querySelector('[data-close-gallery]').addEventListener('click', () => lightbox.close());
document.querySelector('[data-gallery-prev]').addEventListener('click', () => showPhoto(currentPhoto - 1));
document.querySelector('[data-gallery-next]').addEventListener('click', () => showPhoto(currentPhoto + 1));
lightbox.addEventListener('click', (event) => {
  if (event.target !== lightbox) return;
  const bounds = lightbox.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) lightbox.close();
});
lightbox.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    showPhoto(currentPhoto + (event.key === 'ArrowRight' ? 1 : -1));
  }
});
lightbox.addEventListener('close', () => {
  document.documentElement.classList.remove('dialog-open');
  lastTrigger?.focus({ preventScroll: true });
});

document.querySelector('#current-year').textContent = new Date().getFullYear();
document.documentElement.classList.add('js-ready');
