import localforage from "localforage"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const useWatchedMovies = () => {
  const [watchedMovies, setWatchedMovies] = useState([])  

  useEffect(() => {
    try {
      localforage.setItem('watched-movies', watchedMovies)
    } catch (error) {
      toast.error(error.message)
    }
  }, [watchedMovies])

  useEffect(() => {
    try {
      const getLocalforageItem = async () => {
        const value = await localforage.getItem('watched-movies')

        if (value) {
          setWatchedMovies(value)
        }
      }

      getLocalforageItem()
    } catch (error) {
      toast.error(error.message)
    }
  }, [])

  const handleClickDelete = id => setWatchedMovies(prev => prev.filter(p => p.id !== id))
  return { watchedMovies, setWatchedMovies, handleClickDelete }
}

export { useWatchedMovies }