import Notiflix from 'notiflix/build/notiflix-notify-aio';
import { markup }  from './markup';
// import search  from './index';
// export let list;
export function fetchCountries(name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
    // 
  )
    .then(response => {
      if (!response.ok) {
        throw new Error();
      };
      return response.json();
    })
    .then(markup)
    .catch(() => Notiflix.Notify.failure("Oops, there is no country with that name"));
};