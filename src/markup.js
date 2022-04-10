import Notiflix from 'notiflix/build/notiflix-notify-aio';
const refCountries = document.querySelector(".country-list");
const refCountryInfo = document.querySelector(".country-info");

// import list  from './fetchCountries';
export function markup(list) {
  console.log(list);
  if (list.length > 10) {
    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
      return;
  } else if (list.length <= 10 && list.length >= 2) {
    renderListOfCountries(list);
  } else if (list.length === 1) {
    renderOneCountry(list)
  } else if (list==='') {refCountries.innerHTML = '';
  refCountryInfo.innerHTML = '';
  return;}
};
function renderListOfCountries(list) {
  refCountries.innerHTML = list.map(item =>
    `<li class="item"><img src="${item.flags.svg}" alt="flag" width=40/>
    <span class="country-name">${item.name.official}</span></li>`).join()
};
function renderOneCountry(list) {
  refCountryInfo.innerHTML =
    `<div class="country-wrapper">
      <img src="${list.flags.svg}" alt="flag" width=40/>
      <span class="country-name-separate">${list.name.official}</span>
    </div>
    <div class="country-wrapper">
      <span class="country-separate"><strong>Capital:</strong></span>
      <span class="country-separate">${list.capital}</span>
    </div>
    <div class="country-wrapper">
      <span class="country-separate"><strong>Population:</strong></span>
      <span class="country-separate">${list.population}</span>
    </div>
    <div class="country-wrapper">
      <span class="country-separate"><strong>Languages:</strong></span>
      <span class="country-separate">${list.languages}</span>
    </div>`
};