import Notiflix from 'notiflix/build/notiflix-notify-aio';
import { markup } from './markup';
import { erase } from './markup';

export function fetchCountries(event) {
  let name = event.target.value.trim();
  if (name === '') {
    erase(name);
    return;
  }
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
    .catch(() => { Notiflix.Notify.failure("Oops, there is no country with that name"),
    erase()});
};