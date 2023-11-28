import { Clapperboard as ClapperboardIcon, Watch as WatchIcon } from "lucide-react"
import { WatchMovieItem } from "./watch-movie-item"
import { getTotalMinutes } from "../lib/utils"

const WatchHeader = ({ movies, onClean }) => {
  return (
    <div className="p-5 bg-violet-900/20 border">
        <div className="flex items-center justify-between mb-2">
          <span className="text-base uppercase font-medium">Filmes Assistidos</span>
          <button onClick={onClean} className="underline font-medium">Limpar</button>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <ClapperboardIcon size={20} strokeWidth={1.5} />
            <span><strong>{movies?.length}</strong> filmes</span>
          </div>
          <div className="flex items-center gap-2">
            <WatchIcon size={20} strokeWidth={1.5} />
            <span>{getTotalMinutes(movies)}</span>
          </div>
        </div>
      </div>
  )
}

const WatchList = ({ movies, onDeleteMovie, onClean }) => {
  return (
    <div className="w-full h-auto border rounded-md overflow-y-auto">
      <WatchHeader movies={movies} onClean={onClean}/>
      {movies.length > 0 && movies.map(movie => (
        <WatchMovieItem 
          key={movie.id} 
          movie={movie} 
          onDeleteMovie={() => onDeleteMovie(movie.id)} 
        />)
      )}
    </div>
  )
}

export { WatchList }