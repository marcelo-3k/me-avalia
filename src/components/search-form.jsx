import { Search as SearchIcon } from "lucide-react"

const SearchForm = ({ handleSearchMovie, formRef }) => {
  return (
    <form ref={formRef} className="w-fit max-w-full relative" onSubmit={handleSearchMovie}>
      <label htmlFor="search" className="sr-only"></label>
      <input
        type="search"
        name="searchMovie"
        id="search"
        placeholder="Buscar filmes..."
        className="w-fit lg:w-72 h-12 px-2 sm:pl-3 sm:pr-10 rounded-md border"
      />
      <button>
        <SearchIcon 
          size={20} 
          strokeWidth={1.5} 
          className="hidden sm:block absolute top-[13px] right-3 text-emerald-500"
        />
      </button>
    </form>
  )
}

export { SearchForm }