import axios from 'axios';
import {API_BASE, DEFAULT_PAGE, ARTISTS_PAGE_LIMIT} from './config.js';

export async function fetchArtists(page = DEFAULT_PAGE, perPage = ARTISTS_PAGE_LIMIT) {
  const response = await axios.get(`${API_BASE}/artists`, {
    params: {
      page,
      limit: perPage,
    },
  });

  return response.data;
}

export async function fetchArtistById(id) {
  if (!id) throw new Error('Artist id is required');

  const response = await axios.get(`${API_BASE}/artists/${id}`);
  return response.data;
}

export async function fetchGenres() {
  const response = await axios.get(`${API_BASE}/genres`);
  return response.data;
}

export async function fetchFeedbacks() {
  try {
    const response = await axios.get(`${API_BASE}/feedbacks`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to load feedbacks', {cause: error});
  }
}
