import { Logo } from "./logo"
import { SearchInput } from "./search-input"

const Header = () => {
  return (
    <header className="w-full max-w-5xl mx-auto">
      <div className="flex items-center justify-between mt-5 p-5 border rounded-md bg-violet-900/10">
        <Logo />
        <SearchInput />
      </div>
    </header>
  )
}

export { Header }