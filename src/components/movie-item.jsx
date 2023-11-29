import { Calendar as CalendarIcon } from "lucide-react"

const MovieItem = ({ poster, title, year, onSelected }) => {
  return (
    <li 
      onClick={onSelected}
      className="flex flex-col items-start gap-5 md:flex-row md:items-center item" 
    >
      <img 
        src={poster} 
        alt=""
        className="w-full md:w-16 md:h-20 rounded-md border" 
      />
      <div className="grid gap-2">
        <p className="text-lg font-medium">{title}</p>
        <p className="flex items-center gap-2">
          <CalendarIcon size={20} strokeWidth={1.5} />
          <span>{year}</span>
        </p>
      </div>
    </li>
  )
}

export { MovieItem }