import axios from 'axios';
import genres from '../genres.json';
import { onClickCard } from '..';

const gallery = document.querySelector('.card__list');

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
        })
        .join(', ');

      return `
      <li class="card__item" data-id="${card.id}">
      <img  src="https://image.tmdb.org/t/p/w500/${[card.poster_path]}" alt="${
        card.title
      }" data-id="${card.id}"/>
       
       <h2 data-id="${card.id}">${card.title}</h2>
        <p data-id="${card.id}">${genre.length ? genre : 'Unknown'} | ${
        card.release_date
      } </p>
    </li>`;
    })
    .join('');
  gallery.innerHTML = markupGallery;
}
