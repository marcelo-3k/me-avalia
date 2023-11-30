export const getTotalMinutes = (watchedMovies) => {
  const totalMinutes = watchedMovies
    .reduce((acc, movie) => acc + (movie.runtime === 'N/A' ? 0 : +movie.runtime.split(' ')[0]), 0);

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}h ${minutes}m`;
};

export const capitalizeMovieName = (movieName) => {
  const ignoredWords = ['e', 'a', 'do', 'das', 'des', 'de', 'na', 'nas', 'no', 'nos']

  return movieName
    .toLowerCase()
    .split(' ')
    .map((word, index) => 
      index === 0 || !ignoredWords.includes(word) 
        ? word.charAt(0).toUpperCase() + word.slice(1) 
        : word
    )
    .join(' ')
}