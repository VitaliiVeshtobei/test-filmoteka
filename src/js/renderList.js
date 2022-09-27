import axios from 'axios';
import genres from '../genres.json';
console.log(genres);
// const genresFiltered = genres.filter(genre => {
//   return genre.id.includes('card.id');
// });
// console.log(genresFiltered);
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
      console.log(genre);
      return `<li>
      <img src="https://image.tmdb.org/t/p/w500/${[card.backdrop_path]}" alt="${
        card.title
      }"/>
  <p>${card.title}<p/>
  <p>${genre} | ${card.release_date}<p/>
</li>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markupGallery);
}
