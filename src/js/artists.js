import axios from "axios";
import { API_BASE, DEFAULT_PAGE, ARTISTS_PAGE_LIMIT } from "./config.js";

const API_URL = `${API_BASE}/artists`;

const list = document.getElementById('artistsList');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const loader = document.getElementById('artistsLoader');

let page = DEFAULT_PAGE;

async function fetchArtists() {
    try {
        showLoader();

        const response = await fetch(
            `${API_URL}?page=${page}&limit=${ARTISTS_PAGE_LIMIT}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch artists');
        }

        const data = await response.json();

        renderArtists(data.artists);

        if (data.artists.length < ARTISTS_PAGE_LIMIT) {
            loadMoreBtn.classList.add('is-hidden');
        } else {
            loadMoreBtn.classList.remove('is-hidden');
        }

        page += 1;
    } catch (error) {
        console.error(error);
    } finally {
        hideLoader();
    }
    
}



export function renderArtists(artists) {
  if (!Array.isArray(artists)) return;

  const markup = artists
    .map(({ _id, strArtist, strArtistThumb, genres, strBiographyEN}) => {
        const genresMarkup = genres
            .map(
                genre => `<span class="artist-genre">${genre}</span>`
            )
            .join('');

      
      return `
        <li class="artist-card" data-id="${_id}">

          <div class="artist-thumb">
          <img src="${strArtistThumb}" alt="${strArtist}" class="artist-img" />
          </div>

          <p class="artist-genres">${genresMarkup}</p>

          <h3 class="artist-name">${strArtist}</h3>
          <p class="artist-bio">${strBiographyEN}</p>
          <button class="artist-more">Learn more</button>
        </li>
      `;
    })
    .join('');

  list.insertAdjacentHTML('beforeend', markup);
}

function showLoader() {
    loader.classList.remove('is-hidden');
}

function hideLoader() {
    loader.classList.add('is-hidden');
}

loadMoreBtn.addEventListener('click', fetchArtists);

fetchArtists();