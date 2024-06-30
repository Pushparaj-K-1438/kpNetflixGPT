export const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_GEMINI_API_KEY
  }
}

export const NOW_PLAYING_API = 'https://api.themoviedb.org/3/movie/now_playing?page=1'

export const POPULAR_MOVIES_API = 'https://api.themoviedb.org/3/movie/popular?page=1'

export const UPCOMMING_MOVIES_API = 'https://api.themoviedb.org/3/movie/upcoming?page=1'

export const TOP_RATED_API = 'https://api.themoviedb.org/3/movie/top_rated?page=1'

export const TRAILER_API = 'https://api.themoviedb.org/3/movie/'

export const SUPPORTED_LANGUAGES = [{ identifier: 'en', name: 'English' }, { identifier: 'kannada', name: 'Kannada' }, { identifier: 'tamil', name: 'Tamil' }]