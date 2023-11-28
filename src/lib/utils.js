export const getTotalMinutes = (watchedMovies) => {
  const totalMinutes = watchedMovies
    .reduce((acc, movie) => acc + (movie.runtime === 'N/A' ? 0 : +movie.runtime.split(' ')[0]), 0);

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}h ${minutes}m`;
};
