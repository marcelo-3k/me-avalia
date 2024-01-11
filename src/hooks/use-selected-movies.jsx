import toast from "react-hot-toast"
import { useState } from "react"
import { apiKey } from "#/lib/constants"

const useSelectedMovies = (setWatchedMovies) => {
  const [selectedMovie, setSelectedMovie] = useState(null)

  const handleCleanWatchedMovieList = () => setWatchedMovies([])
  const handleSelectBack = () => setSelectedMovie(null)

  const handleSelectMovie = async (currentSelectedMovie) => {
    const prevSelectedMovie = selectedMovie

    if (prevSelectedMovie?.id === currentSelectedMovie.id) {
      setSelectedMovie(null)
      return
    }

    try {
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

    } catch (error) {
      console.log(error)
      toast.error('Algo deu errado')
    }
  }

  const handleRating = userRating => {
    setWatchedMovies(prev => {
      const isDuplicated = prev.some(movie => movie.id === selectedMovie.id)

      if (isDuplicated) {
        return prev.map(m => m.id === selectedMovie.id ? { ...selectedMovie, userRating } : m)
      }

      return [...prev, { ...selectedMovie, userRating }]
    })

    setSelectedMovie(null)
  }

  return { 
    selectedMovie, 
    handleCleanWatchedMovieList, 
    handleSelectBack, 
    handleSelectMovie, 
    handleRating
  }
}
 

export { useSelectedMovies }