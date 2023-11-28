import { MovieItem } from "./movie-item"

const MoviesList = ({ movies }) => {
  return (
    <div className="w-full h-auto border rounded-md">
      <p className="p-5 bg-violet-900/20"><strong>2</strong> resultados encontrados.</p>
      <div className="">
        {movies.length > 0 && movies.map(movie => (
          <MovieItem 
            key={movie.id}
            poster={movie.poster}
            title={movie.title}
            year={movie.year}
          />
        ))}
      </div>
    </div>
  )
}

export { MoviesList }