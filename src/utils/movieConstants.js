export const OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTEyNTYzMzJhN2VhNmUxM2E0MTgyZGJkZTA1YTg2MiIsInN1YiI6IjY2Njg4MThlZWRlMDc5MzdhZDFhMGEzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EaHNlFq9U9eGg_Qq2E_Kab773v6HfsC7r2wYybzFNlY'
    }
}

export const NOW_PLAYING_API = 'https://api.themoviedb.org/3/movie/now_playing?page=1'

export const POPULAR_MOVIES_API = 'https://api.themoviedb.org/3/movie/popular?page=1'

export const UPCOMMING_MOVIES_API = 'https://api.themoviedb.org/3/movie/upcoming?page=1'

export const TOP_RATED_API = 'https://api.themoviedb.org/3/movie/top_rated?page=1'

export const TRAILER_API = 'https://api.themoviedb.org/3/movie/'

export const SUPPORTED_LANGUAGES = [{identifier:'en',name:'English'}, {identifier:'kannada',name:'Kannada'}, {identifier:'tamil',name:'Tamil'}]