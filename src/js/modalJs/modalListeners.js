import { modal } from './modalRenderJs';
import { getApiDetails } from './getFilmDetails';

const cardList = document.querySelector('.card-list');
cardList.addEventListener('click', onClickCard);

export async function onClickCard(evt) {
  const cardId = evt.target.dataset.id;
  if (cardId) {
    const responseCardDetails = await getApiDetails(cardId);
    console.log(responseCardDetails.data);
    modal(responseCardDetails.data);

    const modalOverlay = document.querySelector('.backdrop');
    modalOverlay.addEventListener('click', onClickModal);
    document.addEventListener('keydown', keyDown);
  }
}

function onClickModal(evt) {
  console.log(evt.target);
  const modalOverlay = document.querySelector('.backdrop');
  if (evt.target === modalOverlay) {
    modalOverlay.remove();
    document.removeEventListener('keydown', keyDown);
  }
}

function keyDown(evt) {
  const modalOverlay = document.querySelector('.backdrop');
  if (evt.key === 'Escape') {
    modalOverlay.remove();
    document.removeEventListener('keydown', keyDown);
  }
}
