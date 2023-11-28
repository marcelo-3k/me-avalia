import { CornerDownLeft as CornerDownLeftIcon, Star as StarIcon } from "lucide-react"

const SelectedMovie = ({ movie, onBack }) => {
  return (
    <div className="border rounded-md">
      <div className="relative flex items-center gap-6 text-violet-50 bg-violet-900">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-36 h-44 rounded-md object-cover"
        />
        <div>
          <p className="text-xl font-semibold mb-3">{movie.title}</p>
          <p className="text-sm mb-1">
            <span>{movie.released} - {movie.runtime}</span>
          </p>
          <p className="text-sm mb-2">{movie.genre}</p>
          <p className="flex gap-2 items-center text-sm mb-1">
            <StarIcon size={16} strokeWidth={1.5} fill="#facc15" stroke="none" />
            <span>{movie.imdbRating} IMDb rating</span>
          </p>
        </div>
        <button 
          onClick={onBack}
          className="absolute top-4 right-4 p-1 rounded border hover:bg-violet-500 group"
        >
          <CornerDownLeftIcon size={20} strokeWidth={2} />
          <span className="backtip">
            Voltar
          </span>
        </button>
      </div>
      <div>
        <div className="rating-stars">
          <StarIcon size={20} strokeWidth={1.5} />
          <StarIcon size={20} strokeWidth={1.5} />
          <StarIcon size={20} strokeWidth={1.5} />
          <StarIcon size={20} strokeWidth={1.5} />
          <StarIcon size={20} strokeWidth={1.5} />
          <StarIcon size={20} strokeWidth={1.5} />
          <StarIcon size={20} strokeWidth={1.5} />
          <StarIcon size={20} strokeWidth={1.5} />
          <StarIcon size={20} strokeWidth={1.5} />
          <StarIcon size={20} strokeWidth={1.5} />
        </div>
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