import { Clapperboard as ClapperboardIcon, Watch as WatchIcon } from "lucide-react"
import { WatchMovieItem } from "./watch-movie-item"

const WatchHeader = () => {
  return (
    <div className="p-5 bg-violet-900/20 border">
        <div className="flex items-center justify-between mb-2">
          <span className="text-base uppercase font-medium">Filmes Assistidos</span>
          <button className="underline font-medium">Limpar</button>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <ClapperboardIcon size={20} strokeWidth={1.5} />
            <span>2 filmes</span>
          </div>
          <div className="flex items-center gap-2">
            <WatchIcon size={20} strokeWidth={1.5} />
            <span>142 min</span>
          </div>
        </div>
      </div>
  )
}

const WatchList = () => {
  return (
    <div className="w-full h-auto border rounded-md overflow-y-auto">
      <WatchHeader/>
      <WatchMovieItem />
    </div>
  )
}

export { WatchList }