import styles from "./VideoGame.module.css";
import { Link } from "react-router-dom";
import image_not_found from "./image_not_found.jpg";

function VideoGame(props) {
  const { id, name, image, genres } = props.videoGame;

  const handleImageError = (event) => {
    event.target.src = image_not_found; // Usa la imagen de emergencia en caso de error
  };

  return (
    <Link to={`/detail/${id}`} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={image}
            alt={name}
            onError={handleImageError}
          />
          <h5 className={styles.title}>{name}</h5>
        </div>
        <div className={styles.genres}>{genres.join(" | ")}</div>
      </div>
    </Link>
  );
}

export default VideoGame;
