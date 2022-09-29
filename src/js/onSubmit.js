// import { getApi } from './js/searchApi';
import { renderGallery } from './renderList';
import { getApi } from './searchApi';
import { onClickCard } from './modalJs/modalListeners';

const cardList = document.querySelector('.card__list');
const form = document.querySelector('.search-form');
form.addEventListener('submit', onSubmitForm);
cardList.addEventListener('click', onClickCard);

export async function onSubmitForm(evt) {
  evt.preventDefault();
  const searchName = evt.currentTarget.elements.searchQuery.value;
  const response = await getApi(searchName);
  console.log(response.data.results);
  renderGallery(response.data.results);
}
