import { 
  Star as StarIcon,
  ThumbsUp as ThumbsUpIcon ,
  Hourglass as HourglassIcon,
  Trash2 as Trash2Icon
} from "lucide-react"

const WatchMovieItem = ({ movie }) => {
  return (
    <div className="flex items-center justify-between gap-5 item">
      <div className="flex items-center gap-4">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-16 h-20 rounded-md border"
        />
        <div className="grid gap-2">
          <p className="text-lg font-medium">{movie.title}</p>
          <div className="flex items-center gap-2">
            <p className="flex items-center gap-2">
              <StarIcon size={20} strokeWidth={1.5} />
              <span>{movie.imdbRating}</span>
            </p>
            <p className="flex items-center gap-2">
              <ThumbsUpIcon size={20} strokeWidth={1.5} />
              <span>8</span>
            </p>
            <p className="flex items-center gap-2">
              <HourglassIcon size={20} strokeWidth={1.5} />
              <span>{movie.runtime} min</span>
            </p>
          </div>
        </div>
      </div>
      <button>
        <Trash2Icon 
          size={20} 
          strokeWidth={1.5} 
          className="hover:text-violet-500 transition-colors" 
        />
      </button>
    </div>
  )
}

export { WatchMovieItem }