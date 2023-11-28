import { Calendar as CalendarIcon } from "lucide-react"

const MovieItem = ({ poster, title, year }) => {
  return (
    <div className="flex items-center gap-5 item">
      <img 
        src={poster} 
        alt=""
        className="w-16 h-20 rounded-md border" 
      />
      <div className="grid gap-2">
        <p className="text-lg font-medium">{title}</p>
        <p className="flex items-center gap-2">
          <CalendarIcon size={20} strokeWidth={1.5} />
          <span>{year}</span>
        </p>
      </div>
    </div>
  )
}

export { MovieItem }