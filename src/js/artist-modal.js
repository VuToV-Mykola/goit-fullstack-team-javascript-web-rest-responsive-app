import {fetchArtistById} from './api-artists';
import {fetchArtistAlbums} from './api-artists';

const modalContent = document.querySelector('.modal-content');
const closeModalBtn = document.querySelector('.modal-close-btn');
const backdrop = document.querySelector('.backdrop');
const modalLoader = document.getElementById('modalLoader');

function createArtistMarkup(artist, albums = []) {
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
    <h2 class="artist-title">${artistName}</h2>

<div class="artist-container">
  <div class="artist-image">
    <img src="${artistImage}" alt="${artistName || 'Artist'}">
  </div>

  <div class="artist-info">
    <div class="info-row">
      <span class="label">Years active</span>
      <span class="value">${formatYears(formedYear, endedYear)}</span>
    </div>

    <div class="info-row">
      <span class="label">Sex</span>
      <span class="value">${gender ?? '—'}</span>
    </div>

    <div class="info-row">
      <span class="label">Members</span>
      <span class="value">${membersCount ?? '—'}</span>
    </div>

    <div class="info-row">
      <span class="label">Country</span>
      <span class="value">${country ?? '—'}</span>
    </div>

    <div class="info-row info-row--bio">
      <span class="label">Biography</span>
      <span class="value">${biography ?? '—'}</span>
    </div>

       <div class="info-row info-row--genres">
    <ul class="info-genres">
      ${(genres || []).map(genre => `<li class="info-genre">${genre || ''}</li>`).join('')}
    </ul>
   </div>
  </div>
</div>

    ${createAlbumsSectionMarkup(albums)}

  `;
}

function isMissingValue(val) {
  if (val == null || val === '') return true;
  const s = String(val).trim().toLowerCase();
  return s === '' || s === 'information missing';
}

function formatYears(formedYear, endedYear) {
  const hasStart = !isMissingValue(formedYear);
  const hasEnd = !isMissingValue(endedYear);
  if (!hasStart && !hasEnd) return 'Information missing';
  if (hasStart && !hasEnd) return `${formedYear}–present`;
  if (!hasStart && hasEnd) return `until ${endedYear}`;
  return `${formedYear}–${endedYear}`;
}

export async function openArtistModal(artistId) {
  backdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  addModalEventListeners();

  try {
    showModalLoader();
    const artist = await fetchArtistById(artistId);
    const albumsData = await fetchArtistAlbums(artistId);
    const rawAlbums = albumsData.albumsList || [];
    const albums = [...rawAlbums].sort((a, b) => {
      const yearA = a.intYearReleased ?? 0;
      const yearB = b.intYearReleased ?? 0;
      return yearB - yearA;
    });
    modalContent.innerHTML = createArtistMarkup(artist, albums);
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
  removeModalEventListeners();

  backdrop.classList.add('is-hidden');
  document.body.style.overflow = '';

  modalContent.innerHTML = '';
}

function onEscKeydown(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

function onBackdropClick(e) {
  if (e.target === backdrop) {
    closeModal();
  }
}

function addModalEventListeners() {
  closeModalBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', onEscKeydown);
  backdrop.addEventListener('click', onBackdropClick);
}

function removeModalEventListeners() {
  closeModalBtn.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', onEscKeydown);
  backdrop.removeEventListener('click', onBackdropClick);
}

export function showModalLoader() {
  modalLoader.classList.remove('is-hidden');
}

function hideModalLoader() {
  modalLoader.classList.add('is-hidden');
}

const list = document.getElementById('artistsList');

list.addEventListener('click', async e => {
  if (e.target.classList.contains('artist-more')) {
    const artistCard = e.target.closest('.artist-card');
    if (!artistCard) return;

    const artistId = artistCard.dataset.id;

    try {
      await openArtistModal(artistId);
    } catch (error) {
      console.log(error);
    }
  }
});

// ALBUM

function formatDuration(ms) {
  if (!ms) return '--:--';
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function getYoutubeUrl(track) {
  const url =
    track.movie || track.strMusicVid || track.strVideo || null;
  if (!url || typeof url !== 'string') return null;
  const trimmed = url.trim();
  return trimmed ? trimmed : null;
}

function createTrackMarkup(track, showLinkColumn = true) {
  const {strTrack, intDuration} = track;
  const youtubeUrl = getYoutubeUrl(track);

  return `
    <li class="track${showLinkColumn ? '' : ' track--no-link'}">
      <span class="track-name">${strTrack}</span>
      <span class="track-time">${formatDuration(intDuration)}</span>

      ${
        showLinkColumn && youtubeUrl
          ? `
        <a
          class="track-link"
          href="${youtubeUrl}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open ${strTrack || 'track'} on YouTube">
          <svg class="youtube-icon" width="20" height="14" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M23.5 6.2s-.2-1.7-.8-2.4c-.7-.8-1.5-.8-1.9-.9C17.9 2.5 12 2.5 12 2.5h0s-5.9 0-8.8.4c-.4.1-1.2.1-1.9.9-.6.7-.8 2.4-.8 2.4S0 8.1 0 10v1.9c0 1.9.2 3.8.2 3.8s.2 1.7.8 2.4c.7.8 1.6.8 2 .9 1.5.2 6.8.4 8.9.4s5.9 0 8.8-.4c.4-.1 1.2-.1 1.9-.9.6-.7.8-2.4.8-2.4s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8zM9.5 14.7V7.3l6.3 3.7-6.3 3.7z"
              fill="currentColor"></path>
          </svg>
        </a>`
          : ''
      }
    </li>
  `;
}

function albumHasYoutubeLinks(tracks) {
  return (tracks || []).some(t => getYoutubeUrl(t));
}

function createAlbumMarkup(album) {
  const {strAlbum, intYearReleased, tracks = []} = album;
  const hasLinks = albumHasYoutubeLinks(tracks);

  return `
    <div class="album-card">
      <h3 class="album-title">
        ${strAlbum}
        <span class="album-year">(${intYearReleased})</span>
      </h3>

      <div class="tracks-header${hasLinks ? '' : ' tracks-header--no-link'}">
        <span>Track</span>
        <span>Time</span>
        ${hasLinks ? '<span>Link</span>' : ''}
      </div>

      <ul class="tracks-list">
        ${tracks.map(t => createTrackMarkup(t, hasLinks)).join('')}
      </ul>
    </div>
  `;
}

function createAlbumsSectionMarkup(albums) {
  if (!albums || !albums.length) return '';

  return `
    <section class="albums">
      <h2 class="albums-title">Albums</h2>
      <div class="albums-list">
        ${albums.map(createAlbumMarkup).join('')}
      </div>
    </section>
  `;
}
