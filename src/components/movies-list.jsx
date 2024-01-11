import { MovieItem } from "#/components/movie-item"

const MoviesList = ({ movies, onSelected }) => {
  return (
    <div className="w-full h-auto border rounded-md overflow-y-auto order-2 border-t">
      <p className="sticky top-0 p-5 bg-emerald-200">
        <strong>{movies.length > 0 ? movies.length : 0}</strong> resultados encontrados.
      </p>
      <ul className="">
        {movies.length > 0 && movies.map(movie => (
          <MovieItem 
            key={movie.id}
            poster={movie.poster}
            title={movie.title}
            year={movie.year}
            onSelected={() => onSelected(movie)}
          />
        ))}
      </ul>
    </div>
  )
}

export { MoviesList }