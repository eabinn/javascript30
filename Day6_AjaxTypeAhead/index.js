const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => cities.push(...data));

function findMatches(cities, word) {
  return cities.filter((place) => {
    const regex = new RegExp(word, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  const matches = findMatches(cities, this.value);
  const html = matches
    .map((item) => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = item.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = item.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `<li>
    <span class="name">${cityName} , ${stateName}</span>
    <span class="population">${item.population}</span>
    </li>`;
    })
    .join('');

  suggestions.innerHTML = html;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
