import { useEffect, useState } from "react"
import { MoviesList } from "./movies-list"
import { SelectedMovie } from "./selected-movie"
import { WatchList } from "./watch-list"

const Panels = () => {
  const [movies, setMovies] = useState([])
  const [isSelectedMovie, setIsSelectedMovie] = useState(false)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url = 'https://raw.githubusercontent.com/roger-melo/fake-data/main/fake-movies.json'
        const response = await fetch(url)
        const data = await response.json()
    
        const initialMovies = data.map(movie => ({
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          imdbRating: movie.imdbRating,
          runtime: movie.Runtime,
          poster: movie.Poster,
          plot: movie.Plot,
          actors: movie.Actors,
          director: movie.Director,
          released: movie.Released,
          genre: movie.Genre
        }))
    
        setMovies(initialMovies)
      } catch (error) {
        console.log(error)
      }
    }

    fetchMovies()
  }, [])

  return (
    <div className="grid grid-cols-2 gap-6 w-full h-full max-w-5xl mx-auto px-24 mt-6">
      <MoviesList movies={movies} />
      {isSelectedMovie ? <SelectedMovie /> : <WatchList />}
    </div>
  )
}

export { Panels }