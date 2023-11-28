import { useEffect, useState } from "react"
import { Logo } from "./components/logo"
import { SearchForm } from "./components/search-input"
import { MoviesList } from "./components/movies-list"
import { SelectedMovie } from "./components/selected-movie"
import { WatchList } from "./components/watch-list"
import { apiKey } from "./lib/constants"

const App = () => {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [watchedMovies, setWatchedMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=loki`
        const response = await fetch(url)
        const data = await response.json()
    
        const initialMovies = data.Search.map(movie => ({
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          poster: movie.Poster,
        }))
    
        setMovies(initialMovies)
      } catch (error) {
        console.log(error)
      }
    }

    fetchMovies()
  }, [])

  const handleCleanWatchedMovieList = () => setWatchedMovies([])
  const handleClickDelete = (id) => setWatchedMovies((prev) => prev.filter(movie => movie.id !== id))
  const handleSelectBack = () => setSelectedMovie(null)
  const handleSelectMovie = async (currentSelectedMovie) => {
    const prevSelectedMovie = selectedMovie

    if (prevSelectedMovie?.id === currentSelectedMovie.id) {
      setSelectedMovie(null)
      return
    }

    const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${currentSelectedMovie.id}`
    const response = await fetch(url)
    const movie = await response.json()

    setSelectedMovie({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      imdbRating: movie.imdbRating,
      runtime: movie.Runtime,
      plot: movie.Plot,
      actors: movie.Actors,
      director: movie.Director,
      released: movie.Released,
      genre: movie.Genre
    })
  }

  const handleSearchMovie = async (e) => {
    e.preventDefault()

    const { searchMovie } = e.target.elements

    const response = await fetch(`https://omdbapi.com/?apikey=${apiKey}&s=${searchMovie.value}`)
    const data = await response.json()

    const moviesData = data.Search.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))

    setMovies(moviesData) 
  }

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
          <SearchForm handleSearchMovie={handleSearchMovie}/>
        </div>
      </header>
      <div className="grid grid-cols-2 gap-6 w-full h-full max-w-5xl mx-auto px-24 mt-6">
        <MoviesList movies={movies} onSelected={handleSelectMovie}/>
        {selectedMovie 
          ? <SelectedMovie 
            movie={selectedMovie} 
            onBack={handleSelectBack} 
            onRating={handleRating}
          /> 
          : <WatchList 
              movies={watchedMovies} 
              onDeleteMovie={handleClickDelete} 
              onClean={handleCleanWatchedMovieList}
            />
        }
      </div>
    </>
  )
}

export { App }
