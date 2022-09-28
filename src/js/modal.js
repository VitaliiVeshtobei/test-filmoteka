import axios from 'axios';

const container = document.querySelector('.container');

export async function getApiDetails(id) {
  const BASE_URL = `https://api.themoviedb.org/3/movie/${id}`;
  const params = {
    api_key: '7f524807c48f906ff0108130fa25f727',
  };

  const resolve = await axios(BASE_URL, { params });
  return resolve;
}

export function modal(data) {
  const modalMarckUp = `<div class="overlay">
      <div class="modal">
        <img src=https://image.tmdb.org/t/p/w500/${data.backdrop_path} alt={altTags} />
      </div>
    </div>`;

  container.insertAdjacentHTML('afterbegin', modalMarckUp);
  const modalOverlay = document.querySelector('.overlay');
  modalOverlay.addEventListener('click', onClickModal);
  document.addEventListener('keydown', keyDown);
}

function onClickModal(evt) {
  console.log(evt.target);
  const modalOverlay = document.querySelector('.overlay');
  if (evt.target === modalOverlay) {
    return modalOverlay.remove();
  }

  document.removeEventListener('keydown', keyDown);
}
function keyDown(evt) {
  const modalOverlay = document.querySelector('.overlay');
  if (evt.key === 'Escape') {
    modalOverlay.remove();
    document.removeEventListener('keydown', keyDown);
  }
}
