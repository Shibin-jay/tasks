//secret key: uETw1gx9JJ_BSbe_7VmpevpkjJGe6choqYsSf3nj_Z4 
// access key:xp37k7kWKgDlJPgzYPHWLDGFGtIf2enTALf1HwnxjaY
// Define API endpoint with per_page parameter set to 15
const accessKey = 'xp37k7kWKgDlJPgzYPHWLDGFGtIf2enTALf1HwnxjaY';
const endpoint = `https://api.unsplash.com/search/photos?per_page=30&client_id=${accessKey}`;
const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('form');
const searchInput = document.querySelector('input[type="search"]');

gallery.innerHTML = '<div class="loader"><img src="loader.gif" alt="Loading..."></div>';

function fetchImages(query) {
  const url = `${endpoint}&query=${query}`;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      const photos = response.results;

      let html = '';
      photos.forEach(photo => {
        if (!photo.description) {
          return; 
        }
        html += `
        <div class="card">
        <img src="${photo.urls.regular}" alt="${photo.alt_description}" class="card-img">
        <div class="overlay">
        <h2 class="card-title">${photo.user.name}</h2>
        <p class="card-text">${photo.description}</p>
        </div>
        </div>
        `;
        
      });
      gallery.innerHTML = html;
    } else {
      gallery.innerHTML = '<div class="error">Error loading images.</div>';
    }
  }
  xhr.onerror = function() {
    gallery.innerHTML = '<div class="error">Error loading images.</div>';
  }
  xhr.send();
}
fetchImages('office');

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (query) {
    fetchImages(query);
    searchInput.value = '';
  }
});
searchInput.addEventListener('input', function() {
  const query = this.value.trim();
  if (query === '') {
    fetchImages('office'); 
  }
});

