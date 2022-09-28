import { getApi } from './js/searchApi';
import { renderGallery } from './js/renderList';
import { getApiDetails } from './js/modal';
import { modal } from './js/modal';
import axios from 'axios';
// const cardList = document.querySelector('.card-list');
const form = document.querySelector('.search-form');

form.addEventListener('submit', onSubmitForm);
// cardList.addEventListener('click', onClickCard);

export async function onSubmitForm(evt) {
  evt.preventDefault();
  const searchName = evt.currentTarget.elements.searchQuery.value;
  const response = await getApi(searchName);
  console.log(response.data.results);
  renderGallery(response.data.results);
}

// export async function onClickCard(evt) {
//   const cardId = evt.target.dataset.id;
//   if (cardId) {
//     const responseCardDetails = await getApiDetails(cardId);
//     console.log(responseCardDetails.data);
//     modal(responseCardDetails.data);
//   }
// }
