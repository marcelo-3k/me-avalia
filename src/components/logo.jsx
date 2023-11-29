const Logo = () => {
  return (
    <a href="" className="shrink-0">
      <img src="/logo.svg" alt="Logo Me Avalia" className="hidden md:block"/>
      <img src="/logo-simplified.svg" alt="Logo Me Avalia" className="block md:hidden"/>
    </a>
  )
}

export { Logo }