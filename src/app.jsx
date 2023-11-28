import { useEffect, useState } from "react"
import { Logo } from "./components/logo"
import { SearchInput } from "./components/search-input"
import { MoviesList } from "./components/movies-list"
import { SelectedMovie } from "./components/selected-movie"
import { WatchList } from "./components/watch-list"

const App = () => {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [watchedMovies, setWatchedMovies] = useState([])

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

  const handleClickDelete = (id) => setWatchedMovies((prev) => prev.filter(movie => movie.id !== id))
  const handleSelectBack = () => setSelectedMovie(null)
  const handleSelectMovie = (selectedMovie) => 
    setSelectedMovie(prev => prev?.id === selectedMovie.id ? null : selectedMovie)

  const handleRating = (e) => {
    e.preventDefault()
    const { rating } = e.target.elements

    setWatchedMovies(prev => [...prev, { ...selectedMovie, userRating: rating.value }])
    setSelectedMovie(null)
  }

  return (
    <>
      <header className="w-full max-w-5xl mx-auto">
        <div className="flex items-center justify-between mt-5 p-5 border rounded-md bg-violet-900/10">
          <Logo />
          <SearchInput />
        </div>
      </header>
      <div className="grid grid-cols-2 gap-6 w-full h-full max-w-5xl mx-auto px-24 mt-6">
        <MoviesList movies={movies} onSelected={handleSelectMovie}/>
        {selectedMovie 
          ? <SelectedMovie movie={selectedMovie} onBack={handleSelectBack} onRating={handleRating}/> 
          : <WatchList movies={watchedMovies} onDeleteMovie={handleClickDelete} />
        }
      </div>
    </>
  )
}

export { App }
