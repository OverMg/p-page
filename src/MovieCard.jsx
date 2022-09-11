import styles from "./MovieCard.module.css";

export function MovieCard({ movie }) {
  console.log(styles);
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.MovieCard}>
      <img
      className={styles.movieImage} 
      src={imageUrl}
      alt={movie.title} />
      <div>{movie.title}</div>
    </li>
  );
}
