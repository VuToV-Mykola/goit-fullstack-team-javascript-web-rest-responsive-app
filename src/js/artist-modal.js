import {fetchArtistById} from './api-artists';
import {fetchArtists} from './api-artists';

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

async function openArtistModal(artistId) {
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

// для перевірки
// openArtistModal('65ada5b8af9f6d155db4806b');
