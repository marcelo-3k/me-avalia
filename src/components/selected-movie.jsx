import { Star as StarIcon} from "lucide-react"

const SelectedMovie = () => {
  return (
    <div className="border rounded-md">
      <div className="flex items-center gap-6 text-violet-50 bg-violet-900">
        <img
          src="https://i.ebayimg.com/images/g/XSkAAMXQ0pNQ90S4/s-l500.jpg"
          alt=""
          className="w-36 h-44 rounded-md object-cover"
        />
        <div>
          <p className="text-xl font-semibold mb-3">The Matrix</p>
          <p className="text-sm mb-1">
            <span>31 Mar 1999 - 136 min</span>
          </p>
          <p className="text-sm mb-1">Action, Sci-Fi</p>
          <p className="text-sm mb-1">8.7 IMDb Rating</p>
        </div>
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
          <p>Young programmer Thomas Anderson is tormented by strange nightmares in which he is always connected by cables to a huge computer system from the future. As the dream repeats itself, he begins to distrust reality. Thomas meets the mysterious Morpheus and Trinity world creates and discovers that he is the victim of an intelligent and artificial system called the Matrix, which manipulates people&apos;s minds and the illusion of a real one while using the brains and bodies of individuals to produce energy</p>
          <p><strong>Elenco</strong>: Keanu Reeves, Laurence Fishburne, Carrie-Annie Moss</p>
          <p><strong>Direção</strong>: Lana Wachowski, Lilly Wachowski</p>
        </div>
      </div>
    </div>
  )
}

export { SelectedMovie }