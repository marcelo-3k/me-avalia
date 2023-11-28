import { 
  Star as StarIcon,
  ThumbsUp as ThumbsUpIcon ,
  Hourglass as HourglassIcon,
  Trash2 as Trash2Icon
} from "lucide-react"

const WatchMovieItem = () => {
  return (
    <div className="flex items-center justify-between gap-5 item">
      <div className="flex items-center gap-4">
        <img
          src="https://i.ebayimg.com/images/g/XSkAAMXQ0pNQ90S4/s-l500.jpg"
          alt=""
          className="w-16 h-20 rounded-md border"
        />
        <div className="grid gap-2">
          <p className="text-lg font-medium">The Matrix</p>
          <div className="flex items-center gap-2">
            <p className="flex items-center gap-2">
              <StarIcon size={20} strokeWidth={1.5} />
              <span>7.9</span>
            </p>
            <p className="flex items-center gap-2">
              <ThumbsUpIcon size={20} strokeWidth={1.5} />
              <span>8</span>
            </p>
            <p className="flex items-center gap-2">
              <HourglassIcon size={20} strokeWidth={1.5} />
              <span>136 min</span>
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