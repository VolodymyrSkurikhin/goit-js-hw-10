import Notiflix from 'notiflix/build/notiflix-notify-aio';
const refCountries = document.querySelector(".country-list");
const refCountryInfo = document.querySelector(".country-info");
export function erase() {
  refCountries.innerHTML = '';
  refCountryInfo.innerHTML = ''
};

export function markup(list) {
  console.log(list);
  if (list.length > 10) {
    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
      return;
  } else if (list.length <= 10 && list.length >= 2) {
    renderListOfCountries(list);
  } else if (list.length === 1) {
    renderOneCountry(list)
  } else if (list==='') {
  return}
};
function renderListOfCountries(list) {
  refCountryInfo.innerHTML = '';
  refCountries.innerHTML = list.map(item =>
    `<li class="item"><img src="${item.flags.svg}" alt="flag" width=40/>
    <span class="country-name">${item.name.official}</span></li>`).join()
};
function renderOneCountry(list) {
  refCountries.innerHTML = '';
  refCountryInfo.innerHTML =list.map(item =>
    `<div class="country-wrapper">
      <img src="${item.flags.svg}" alt="flag" width=40/>
      <span class="country-name-separate">${item.name.official}</span>
    </div>
    <div class="country-wrapper">
      <span class="country-separate"><strong>Capital:</strong></span>
      <span class="country-separate r">${item.capital}</span>
    </div>
    <div class="country-wrapper">
      <span class="country-separate"><strong>Population:</strong></span>
      <span class="country-separate r">${item.population}</span>
    </div>
    <div class="country-wrapper">
      <span class="country-separate"><strong>Languages:</strong></span>
      <span class="country-separate r">${Object.values(item.languages)}</span>
    </div>`).join()
};
