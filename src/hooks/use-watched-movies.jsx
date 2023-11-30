import { useState } from "react"

const useWatchedMovies = () => {
  const [watchedMovies, setWatchedMovies] = useState([])  
  const handleClickDelete = id => setWatchedMovies(prev => prev.filter(p => p.id !== id))
  return { watchedMovies, setWatchedMovies, handleClickDelete }
}

export { useWatchedMovies }