import { MoviesList } from "#/components/movies-list"
import { SelectedMovie } from "#/components/selected-movie"
import { WatchList } from "#/components/watch-list"
import { useWatchedMovies } from "#/hooks/use-watched-movies"
import { useSelectedMovies } from "#/hooks/use-selected-movies"

const Main = ({ movies }) => {
  const { watchedMovies, setWatchedMovies, handleClickDelete} = useWatchedMovies()
  const { 
    selectedMovie,
    handleCleanWatchedMovieList, 
    handleRating, 
    handleSelectBack, 
    handleSelectMovie 
  } = useSelectedMovies(setWatchedMovies)
  
  return (
    <div className="grid sm:grid-cols-2 gap-6 w-full h-full max-w-5xl mx-auto lg:px-24 mt-6">
      <MoviesList movies={movies} onSelected={handleSelectMovie}/>
      {selectedMovie 
        ? <SelectedMovie movie={selectedMovie} onBack={handleSelectBack} onRating={handleRating} /> 
        : <WatchList 
            movies={watchedMovies} 
            onDeleteMovie={handleClickDelete} 
            onClean={handleCleanWatchedMovieList}
          />
      }
    </div>
  )
}

export { Main }