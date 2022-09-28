const container = document.querySelector('.container');

export function modal(data) {
  const genre = data.genres.length
    ? data.genres.map(genre => genre.name).join(', ')
    : 'Unknown';
  const modalMarckUp = `<div class="backdrop">
            <div class="modal">
            <button class="modal-btn" type="button" data-modal-close>
          <svg class="modal-btn__icon" width="30" height="30">
            <use href="./image/icons.svg#close">
            </use>
          </svg>
        </button>
            <div class="modal-picture">
                <img class="modal-picture__image" src=https://image.tmdb.org/t/p/w500/${data.poster_path} alt="Картинка кинофильма">
            </div>
            <div class="modal-info">
                <div>
                <h2 class="modal-info__title">${data.title}</h2>
                <ul>
                     <li class="modal-info__text">
                       <p class="modal-info__text--description"> Vote / Votes</p>
                    <p class="modal-info__text--meaning"><span class=" film__rating--orange">${data.vote_average}</span>
                     <span class="film__rating--divider"> / </span>
                    <span class="film__rating--grey">${data.vote_count}</span></p>     
                 </li>
                <li class="modal-info__text">
                    <p class="modal-info__text--description">Popularity</p> 
                    <p class="modal-info__text--meaning">${data.popularity}</p></li>
                <li class="modal-info__text">
                    <p class="modal-info__text--description">Original Title</p><p class="modal-info__text--meaning">${data.original_title}</p></li>
                <li class="modal-info__text">
                    <p class="modal-info__text--description">Genre</p><p class="modal-info__text--meaning">${genre}</p>
              
            </li>
                </ul>
                </div>
                <div>
               <h2 class="modal-info__about">ABOUT</h2>
               <p class="modal-info__description">${data.overview}</p>
               </div>
            <div class="modal-info__btn">
            <button type="button" class="info-btn">add to Watched</button>
           <button type="button" class="info-btn queue-btn">add to queue</button>
           </div>
        </div>
        
    </div></div>`;

  container.insertAdjacentHTML('afterbegin', modalMarckUp);
  // const modalOverlay = document.querySelector('.backdrop');
  // modalOverlay.addEventListener('click', onClickModal);
  // document.addEventListener('keydown', keyDown);
}
