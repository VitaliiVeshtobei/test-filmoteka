import { modal } from './modalRender';
import { getApiDetails } from './getFilmDetails';

const cardList = document.querySelector('.card__list');
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

export function onClickModal(evt) {
  console.log(evt.target);
  const modalOverlay = document.querySelector('.backdrop');
  modalOverlay.addEventListener('click', onClickModal);
  if (evt.target === modalOverlay) {
    modalOverlay.remove();
    document.removeEventListener('keydown', keyDown);
  }
}

export function keyDown(evt) {
  const modalOverlay = document.querySelector('.backdrop');
  document.addEventListener('keydown', keyDown);
  if (evt.key === 'Escape') {
    modalOverlay.remove();
    document.removeEventListener('keydown', keyDown);
  }
}
