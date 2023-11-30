import { CornerDownLeft as CornerDownLeftIcon, Star as StarIcon } from "lucide-react"
import { getPosterFallback } from "../lib/utils"

const SelectedMovie = ({ movie, onBack, onRating }) => {
  return (
    <div className="border rounded-md pb-5">
      <div className="relative flex items-center gap-6 text-emerald-50 bg-emerald-900 rounded-t">
        <img
          src={getPosterFallback(movie.poster)}
          alt={movie.title}
          className="w-36 h-44 rounded-md object-cover"
        />
        <div>
          <p className="w-[75%] line-clamp text-xl font-semibold mb-3">{movie.title}</p>
          <p className="text-sm mb-1">
            <span>{movie.released} &bull; {movie.runtime}</span>
          </p>
          <p className="text-sm mb-2">{movie.genre}</p>
          <p className="flex gap-2 items-center text-sm mb-1">
            <StarIcon size={16} strokeWidth={1.5} fill="#facc15" stroke="none" />
            <span>{movie.imdbRating} IMDb rating</span>
          </p>
        </div>
        <button 
          onClick={onBack}
          className="absolute top-4 right-4 p-1 rounded border bg-emerald-500 md:bg-none hover:bg-emerald-500 group"
        >
          <CornerDownLeftIcon size={20} strokeWidth={2} />
          <span className="backtip">
            Voltar
          </span>
        </button>
      </div>
      <div>
        <form 
          onSubmit={onRating}
          className="flex flex-col items-center justify-center gap-4 m-5 p-5 rounded border bg-emerald-50">
          <div className="rating-stars">
            <select name="rating" defaultValue={0}>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            {/* <StarIcon size={20} strokeWidth={1.5} />
            <StarIcon size={20} strokeWidth={1.5} />
            <StarIcon size={20} strokeWidth={1.5} />
            <StarIcon size={20} strokeWidth={1.5} />
            <StarIcon size={20} strokeWidth={1.5} />
            <StarIcon size={20} strokeWidth={1.5} />
            <StarIcon size={20} strokeWidth={1.5} />
            <StarIcon size={20} strokeWidth={1.5} />
            <StarIcon size={20} strokeWidth={1.5} />
            <StarIcon size={20} strokeWidth={1.5} /> */}
            <span className="ml-2 text-emerald-800">0/10</span>
          </div>
          <button className="btn bg-emerald-500 text-emerald-50 md:bg-transparent md:text-emerald-800">
            + Adicionar a lista
          </button>
        </form>
        <div className="grid gap-4 px-5 text-sm text-zinc-500">
          <p>{movie.plot}</p>
          <p><strong>Elenco</strong>: {movie.actors}</p>
          <p><strong>Direção</strong>: {movie.director}</p>
        </div>
      </div>
    </div>
  )
}

export { SelectedMovie }