import { useEffect, useState } from "react"
import { apiKey } from "./lib/constants"
import { Main } from "./components/main"
import { HeaderNavigation } from "./components/header-navigation"
import toast, { Toaster } from "react-hot-toast"
import { capitalizeMovieName } from "./lib/utils"

const App = () => {
  const [movies, setMovies] = useState([])

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
        toast.error('Algo deu errado')
      }
    }

    fetchMovies()
  }, [])

  const handleSearchMovie = async (e) => {
    e.preventDefault()

    const { searchMovie } = e.target.elements

    try {
      const response = await fetch(`https://omdbapi.com/?apikey=${apiKey}&s=${searchMovie.value}`)
      const data = await response.json()

      const moviesData = data.Search.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
      }))

      setMovies(moviesData) 
      toast.success('10 resultados encontrados')
    } catch (error) {
      toast.error(`Nenhum resultado encontrado para ${capitalizeMovieName(searchMovie.value)}`)
    }
  }

  return (
    <>
      <Toaster />
      <HeaderNavigation movies={movies} handleSearchMovie={handleSearchMovie} />
      <Main movies={movies} />
    </>
  )
}

export { App }

