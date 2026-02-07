import {fetchArtistById} from './api-artists';

const modalContent = document.querySelector('.modal-content');
const closeModalBtn = document.querySelector('.modal-close-btn');
const backdrop = document.querySelector('.backdrop');
const modalLoader = document.getElementById('modalLoader');

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

<div class="artist-container">
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

    <div class="info-row info-row--bio">
      <span class="label">Biography</span>
      <span class="value">${biography}</span>
    </div>

       <div class="info-row info-row--genres">
    <ul class="info-genres">
      ${genres.map(genre => `<li class="info-genre">${genre}</li>`).join('')}
    </ul>
   </div>
  </div>
</div>


  `;
}

export async function openArtistModal(artistId) {
  backdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  try {
    showModalLoader();
    const artist = await fetchArtistById(artistId);
    modalContent.innerHTML = createArtistMarkup(artist);
  } catch (error) {
    console.log(error);
    modalContent.innerHTML = `
      <p class="error">Failed to load artist information</p>
    `;
  } finally {
    hideModalLoader();
  }
}

function closeModal() {
  backdrop.classList.add('is-hidden');
  document.body.style.overflow = '';

  modalContent.innerHTML = '';
}

closeModalBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

backdrop.addEventListener('click', e => {
  if (e.target === backdrop) {
    closeModal();
  }
});

export function showModalLoader() {
  modalLoader.classList.remove('is-hidden');
}

function hideModalLoader() {
  modalLoader.classList.add('is-hidden');
}

const list = document.getElementById('artistsList');

artistsList.addEventListener('click', async e => {
  if (e.target.classList.contains('artist-more')) {
    const artistCard = e.target.closest('.artist-card');
    if (!artistCard) return;

    const artistId = artistCard.dataset.id;
    backdrop.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = '';
    showModalLoader();

    try {
      await openArtistModal(artistId);
    } catch (error) {
      console.log(error);
    }
  }
});
