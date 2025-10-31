document.addEventListener("DOMContentLoaded", () => {
  const movies = [
    // =======================
    // 🎥 DEV's Movies
    // =======================
    { title: "Khadaan", genre: "Action", rating: 8.1 },
    { title: "Raghu Dakat", genre: "Action", rating: 8.3 },
    { title: "Amazon Obhijaan", genre: "Adventure", rating: 7.5 },
    { title: "Paglu", genre: "Romance", rating: 7.0 },
    { title: "Challenge", genre: "Romance", rating: 7.2 },
    { title: "Champ", genre: "Drama", rating: 7.4 },
    { title: "Bagha Jatin", genre: "Action", rating: 8.2 },
    { title: "Tonic", genre: "Drama", rating: 8.0 },
    { title: "Khokababu", genre: "Comedy", rating: 7.6 },
    { title: "Chander Pahar", genre: "Adventure", rating: 8.1 },
    { title: "Projapoti", genre: "Drama", rating: 7.9 },
    { title: "Pradhan", genre: "Action", rating: 7.8 },
    { title: "Tekka", genre: "Action", rating: 7.0 },
    { title: "Kidnap", genre: "Thriller", rating: 6.8 },
    { title: "Zulfiqar", genre: "Action", rating: 7.1 },
    { title: "Hoichoi Unlimited", genre: "Comedy", rating: 6.9 },
    { title: "Kabir", genre: "Thriller", rating: 7.2 },
    { title: "Buno Haansh", genre: "Thriller", rating: 7.0 },
    { title: "Yoddha: The Warrior", genre: "Action", rating: 7.3 },
    { title: "Dhumketu", genre: "Drama", rating: 6.7 },

    // =======================
    // 🎬 JEET's Movies
    // =======================
    { title: "Sathi", genre: "Romance", rating: 7.1 },
    { title: "Yuddho", genre: "Action", rating: 7.0 },
    { title: "Kranti", genre: "Action", rating: 7.3 },
    { title: "Game", genre: "Thriller", rating: 7.2 },
    { title: "Boss: Born to Rule", genre: "Action", rating: 7.4 },
    { title: "Power", genre: "Action", rating: 7.3 },
    { title: "Josh", genre: "Romance", rating: 7.2 },
    { title: "Awara", genre: "Romance", rating: 7.5 },
    { title: "Revolver Rani", genre: "Comedy", rating: 6.9 },
    { title: "Badsha: The Don", genre: "Action", rating: 7.2 },

    // =======================
    // 🌟 PROSENJIT's Movies
    // =======================
    { title: "Autograph", genre: "Drama", rating: 8.3 },
    { title: "Moner Manush", genre: "Biography", rating: 8.5 },
    { title: "Chokher Bali", genre: "Drama", rating: 8.0 },
    { title: "Jaatishwar", genre: "Musical", rating: 8.2 },
    { title: "Drishtikone", genre: "Thriller", rating: 7.6 },
    { title: "Gumnaami", genre: "Mystery", rating: 8.0 },
    { title: "Baishe Srabon", genre: "Thriller", rating: 8.4 },
    { title: "Sesh Theke Shuru", genre: "Romance", rating: 7.3 },
    { title: "Shesh Belay", genre: "Drama", rating: 7.8 },

    // =======================
    // 🎞️ OTHER POPULAR BENGALI MOVIES
    // =======================
    { title: "Dracula Sir", genre: "Thriller", rating: 7.5 },
    { title: "Bibaho Obhijaan", genre: "Comedy", rating: 7.0 },
    { title: "Belashuru", genre: "Drama", rating: 8.2 },
    { title: "Haami", genre: "Family", rating: 7.8 },
    { title: "Posto", genre: "Drama", rating: 7.7 },
    { title: "Open Tee Bioscope", genre: "Coming-of-age", rating: 7.9 },
    { title: "Dwitiyo Purush", genre: "Thriller", rating: 8.0 },
    { title: "Egaro", genre: "Historical", rating: 8.1 },
    { title: "Hemlock Society", genre: "Dark Comedy", rating: 8.0 }
  ];

  const movieList = document.getElementById('movieList');
  const genreSelect = document.getElementById('genreSelect');

  function displayMovies(filteredMovies) {
    movieList.innerHTML = "";
    filteredMovies.forEach(movie => {
      const card = document.createElement('div');
      card.classList.add('movie-card');
      card.innerHTML = `
        <h3>${movie.title}</h3>
        <p>🎭 Genre: ${movie.genre}</p>
        <p>⭐ Rating: ${movie.rating}</p>
      `;
      movieList.appendChild(card);
    });
  }

  // Display all movies initially
  displayMovies(movies);

  // Filter by genre
  genreSelect.addEventListener('change', (e) => {
    const selectedGenre = e.target.value;
    if (selectedGenre === "all") {
      displayMovies(movies);
    } else {
      const filtered = movies.filter(movie => movie.genre === selectedGenre);
      displayMovies(filtered);
    }
  });
});