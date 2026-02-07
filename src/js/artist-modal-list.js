import {fetchArtistById} from './api-artists.js';

const API_URL = 'https://sound-wave.b.goit.study/api';

async function fetchArtistByIdModal(id) {
  if (!id) throw new Error('Artist ID is required');

  try {
    const response = await fetch(`${API_URL}/artists/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const artist = await response.json();
    return artist;
  } catch (error) {
    console.error('Error fetching artist:', error);
    return null;
  }
}

const modalContent = document.querySelector('.modal-content');

function createArtistMarkup(artist) {
  const {
    strArtist: artistName,
    strArtistThumb: artistImage,
    intFormedYear: formedYear,
    intDiedYear: endedYear,
    strGender: gender,
    intMembers: membersCount,
    strCountry: country,
    strBiographyEN: biography,
    genres,
  } = artist;

  return `
    <h2 class="artist-name">${artistName}</h2>

  <div class="artist-image">
    <img src="${artistImage}" alt="${artistName || 'Artist'}" />
  </div>

  <div class="artist-info">
    <div class="info-row">
      <span class="label">Years active</span>
      <span class="value">${formedYear}-${endedYear === null ? 'present' : endedYear}</span>
    </div>

    <div class="info-row">
      <span class="label">Sex</span>
      <span class="value">${gender}</span>
    </div>

    <div class="info-row">
      <span class="label">Members</span>
      <span class="value">${membersCount}</span>
    </div>

    <div class="info-row">
      <span class="label">Country</span>
      <span class="value">${country}</span>
    </div>

    <div class="info-row">
      <span class="label">Biography</span>
      <span class="value">${biography}</span>
    </div>
  </div>

    <ul class="info-genres">
      ${genres.map(genre => `<li class="info-genres-item">${genre}</li>`).join('')}
    </ul>
  `;
}

export async function openArtistModal(artistId) {
  try {
    const artist = await fetchArtistById(artistId);
    console.log(artist);

    modalContent.innerHTML = createArtistMarkup(artist);
  } catch (error) {
    console.log(error);
    modalContent.innerHTML = `
      <p class="error">Failed to load artist information</p>
    `;
  }
}

// тимчасово для перевірки
// openArtistModal('65ada5b8af9f6d155db4806b');
