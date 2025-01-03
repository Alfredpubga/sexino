function getRandomMovies(movieList, count) {
    const shuffled = movieList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displayRandomMovies() {
    const randomMovies = getRandomMovies(movies, 4); // نمایش 4 فیلم تصادفی
    const container = document.getElementById('randomMoviesContainer');
    container.innerHTML = '';

    randomMovies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${movie.img}" alt="${movie.title}">
            <div class="details">
                <h2>${movie.title}</h2>
                <p>Genre: ${movie.genre}</p>
                <p>Duration: ${movie.duration} mins</p>
                <p>Actor: ${movie.actor}</p>
            </div>
        `;
        container.appendChild(movieElement);
    });
}

displayRandomMovies();
