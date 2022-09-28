import axios from 'axios';
import genres from '../genres.json';
import { onClickCard } from '..';

const gallery = document.querySelector('.card-list');

export function renderGallery(data) {
  const markupGallery = data
    .map(card => {
      const genre = genres
        .map(item => {
          if (card.genre_ids.includes(item.id)) {
            return item.name;
          }
        })
        .filter(genreItem => {
          return genreItem !== undefined;
        });

      return `
      <li data-id="${card.id}">
      <img src="https://image.tmdb.org/t/p/w500/${[card.backdrop_path]}" alt="${
        card.title
      }" data-id="${card.id}"/>
        <p>${card.title}<p/>
        <p>${genre} | ${card.release_date}<p/>
    </li>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markupGallery);
}
