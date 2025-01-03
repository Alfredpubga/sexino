const movieContainer = document.getElementById('movieContainer');
const paymentPopup = document.getElementById('paymentPopup');

function renderMovies() {
    movieContainer.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${movie.img}" alt="Movie Poster">
            <div class="details">
                <h2>${movie.title}</h2>
                <p>Genre: ${movie.genre}</p>
                <p>Duration: ${movie.duration} mins</p>
                <p>Actor: <a href="${movie.profileLink}" style="color: #ffd700; text-decoration: underline;">${movie.actor}</a></p>
                <button onclick="startStream('${movie.title}')">Watch Now</button>
                <button onclick="downloadMovie('${movie.title}')">Download</button>
            </div>
        `;
        movieContainer.appendChild(movieElement);
    });
}

function startStream(title) {
    showPaymentPopup();
}

function downloadMovie(title) {
    showPaymentPopup();
}

function showPaymentPopup() {
    paymentPopup.classList.add('active');
}

function closePaymentPopup() {
    paymentPopup.classList.remove('active');
}

function showLogin() {
    alert("Redirecting to Login Page...");
}

function showSignUp() {
    alert("Redirecting to Sign-Up Page...");
}

renderMovies();