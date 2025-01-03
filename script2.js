// script.js
const urlParams = new URLSearchParams(window.location.search);

document.getElementById('movieTitle').textContent = urlParams.get('title');
document.getElementById('moviePoster').src = urlParams.get('poster');
document.getElementById('movieDescription').innerHTML = `<strong>Description:</strong> ${urlParams.get('description')}`;
document.getElementById('movieCast').innerHTML = `<strong>Cast:</strong> ${urlParams.get('cast')}`;
document.getElementById('movieDuration').innerHTML = `<strong>Duration:</strong> ${urlParams.get('duration')}`;
