import './css/styles.css';
import { fetchCountries }  from './fetchCountries';
import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;

const refInput = document.querySelector('input#search-box');
refInput.addEventListener('input',debounce(fetchCountries, DEBOUNCE_DELAY));

