const list = document.querySelector('#results');

const insertMovie = (data) => {
  data.Search.forEach((result) => {
    const movieTag = `<li>
      <img src="${result.Poster}">
      <p>${result.Title}</p>
      </li>`;
    list.insertAdjacentHTML("beforeend", movieTag);
  });
};

console.log('hello from movies');

const fetchMovies = (keyword) => {
  fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then(insertMovie);
};

const fillAllMovies = (event) => {
  event.preventDefault();
  list.innerHTML = "";
  const input = document.querySelector('#keyword');
  fetchMovies(input.value);
};

export { fetchMovies, fillAllMovies };
