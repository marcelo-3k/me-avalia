import { Logo } from "#/components/logo"
import { SearchForm } from "#/components/search-form"

const HeaderNavigation = ({ handleSearchMovie, formRef }) => {
  return (
    <header className="block w-full max-w-5xl lg:mx-auto">
      <div className="flex items-center flex-col sm:flex-row justify-between gap-6 sm:gap-0 mt-5 p-5 border rounded-md bg-emerald-900/10">
        <Logo />
        <SearchForm handleSearchMovie={handleSearchMovie} formRef={formRef} />
      </div>
    </header>
  )
}

export { HeaderNavigation }