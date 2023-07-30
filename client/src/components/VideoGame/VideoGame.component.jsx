import styles from "./VideoGame.module.css";
import { Link } from "react-router-dom";

function VideoGame(props) {
  const { id, name, image, genres } = props.videoGame;

  return (
    <Link to={`/detail/${id}`} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={image} alt={name} />
          <h5 className={styles.title}>{name}</h5>
        </div>
        <div className={styles.genres}>{genres.join(" | ")}</div>
      </div>
    </Link>
  );
}

export default VideoGame;
