import axios from 'axios';

export const API_BASE = 'https://sound-wave.b.goit.study/api';

export let currentPage = 1;
export const limit = 8;

export async function fetchArtists(page = currentPage, perPage = limit) {
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
    throw new Error('Failed to load feedbacks');
  }
}
