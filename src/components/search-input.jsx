import { Search as SearchIcon } from "lucide-react"

const SearchInput = ({ handleSearchMovie }) => {
  return (
    <form className="relative" onSubmit={handleSearchMovie}>
      <label htmlFor="search" className="sr-only"></label>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Buscar filmes..."
        className="w-72 h-12 pl-3 pr-10 rounded-md border"
      />
      <button>
        <SearchIcon size={20} strokeWidth={1.5} className="absolute top-3 right-3 text-violet-500"/>
      </button>
    </form>
  )
}

export { SearchInput }