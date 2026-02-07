import {fetchArtists} from './api-artists';
// import {openArtistModal} from './artist-modal';

const list = document.getElementById('artistsList');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const loader = document.getElementById('artistsLoader');

let page = 1;
const PER_PAGE = 8;

// LOAD ARTISTS

async function loadArtists() {
  try {
    showLoader();

    const data = await fetchArtists(page, PER_PAGE);
    const artists = data.artists || data;

    renderArtists(artists);

    if (artists.length < PER_PAGE) {
      loadMoreBtn.classList.add('is-hidden');
    } else {
      loadMoreBtn.classList.remove('is-hidden');
    }

    page += 1;
  } catch (error) {
    console.error('Failed to load artists:', error);
  } finally {
    hideLoader();
  }
}

// RENDER

function renderArtists(artists) {
  if (!Array.isArray(artists)) return;

  const markup = artists
    .map(({_id, strArtist, strArtistThumb, genres, strBiographyEN}) => {
      const genresMarkup = genres
        .map(genre => `<span class="artist-genre">${genre}</span>`)
        .join('');

      return `
        <li class="artist-card" data-id="${_id}">
          <div class="artist-thumb">
            <img src="${strArtistThumb}" alt="${strArtist}" class="artist-img" />
          </div>

          <div class="artist-content">
            <div class="artist-genres">${genresMarkup}</div>
            <h3 class="artist-name">${strArtist}</h3>
            <p class="artist-bio">${strBiographyEN}</p>
            <button class="artist-more" type="button">Learn more</button>
          </div>
        </li>
      `;
    })
    .join('');

  artistsList.insertAdjacentHTML('beforeend', markup);
}

// LOADER

function showLoader() {
  loader.classList.remove('is-hidden');
}

function hideLoader() {
  loader.classList.add('is-hidden');
}

// INIT

loadArtists();

// EVENT

loadMoreBtn.addEventListener('click', loadArtists);

artistsList.addEventListener('click', event => {
  const btn = event.target.closest('.artist-more');
  if (!btn) return;

  const card = btn.closest('.artist-card');
  if (!card) return;

  openArtistModal(card.dataset.id);
});
