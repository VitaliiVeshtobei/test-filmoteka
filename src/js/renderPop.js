import axios from 'axios';
import genres from '../genres.json';
import { renderGallery } from './renderList';
const KEY = '77e7936073a1f82fbc0d3a17a985fb5b';

export async function getApPop() {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
  const params = {
    api_key: KEY,
  };

  const resolve = await axios(BASE_URL, { params });
  renderGallery(resolve.data.results);
}
getApPop();
