const list = document.querySelector('#results');
const form = document.querySelector('#search-movies');

const fetchMovies = (keyword) => {
  fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      data.Search.forEach((result) => {
        const movieTag = `<li>
          <img src="${result.Poster}">
          <p>${result.Title}</p>
          </li>`;
        list.insertAdjacentHTML("beforeend", movieTag);
      });
    });
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  list.innerHTML = "";
  const input = document.querySelector('#keyword');
  fetchMovies(input.value);
});

fetchMovies('Batman');
