import { getApi } from './js/searchApi';
import { renderGallery } from './js/renderList';
import axios from 'axios';

const form = document.querySelector('.search-form');

form.addEventListener('submit', onSubmitForm);

export async function onSubmitForm(evt) {
  evt.preventDefault();
  const searchName = evt.currentTarget.elements.searchQuery.value;
  const response = await getApi(searchName);
  console.log(response.data.results);
  renderGallery(response.data.results);
}
