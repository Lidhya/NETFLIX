export const baseUrl='https://api.themoviedb.org/3'
export const API_KEY="a05efd51a4d104444a565fb8c11dd519"
export const imageUrl='https://image.tmdb.org/t/p/original'

export const originals =`discover/tv?api_key=${API_KEY}&with_ne213`
export const trending =`trending/all/week?api_key=${API_KEY}&lang-US`

export const action =`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`

export const ComedyMovies = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`

export const HorrorMovies = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate`

export const RomanceMovies = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate`

export const Documentaries = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99&with_watch_monetization_types=flatrate`
