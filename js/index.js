const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const result = document.getElementById("result");

let rech = "";
let tabFilm = [];

const fetchMovies = async () => {
  tabFilm = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=5601d7029e5545c3a0dcd1c49e850a94&query=${rech}`
  ).then((res) => res.json());
  console.log(tabFilm);
};

const moviesDisplay = async () => {
  await fetchMovies();


  result.innerHTML = tabFilm.results
    .map(
      (tabFilm) =>
        `
      <li>
       
        <div class="card-content"> 
          <h2>${tabFilm.original_title}</h2>
          <p>${tabFilm.overview}</p>
          <img src="https://image.tmdb.org/t/p/w500${tabFilm.poster_path}"></img>
        </div>
      </li>
    `
    )
    .join("");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  rech = input.value;
  moviesDisplay();
});
