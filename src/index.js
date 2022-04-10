import './css/styles.css';
import { fetchCountries }  from './fetchCountries';
// import Notiflix from 'notiflix/build/notiflix-notify-aio';
import  debounce  from 'lodash.debounce';
let search;
const DEBOUNCE_DELAY = 300;

// fetchCountries('Sw');
// Notiflix.Notify.failure('Memento te hominem esse');

const refInput = document.querySelector('input#search-box');
refInput.addEventListener('input',debounce(onInput, DEBOUNCE_DELAY));
function onInput(event) {
  search = event.target.value.trim();
  if (search === '') return;
  fetchCountries(search);
// console.dir(search);
};

