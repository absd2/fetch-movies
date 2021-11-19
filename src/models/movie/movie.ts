export interface MovieList {
  page?: number
  results?: Movie[]
  total_results?: number
  total_pages?: number
}

export interface Movie {
  poster_path?: string | null
  adult?: boolean
  overview?: string
  release_date?: string
  genre_ids?: string
  id?: number
  original_title?: string
  original_language?: string
  title?: string
  backdrop_path?: string
  popularity?: number
  vote_count?: number
  video?: boolean
  vote_average?: number
}