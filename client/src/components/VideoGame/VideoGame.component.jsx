import styles from "./VideoGame.module.css";

function VideoGame(props) {
  const { name, image, platforms } = props.videoGame;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt={name} />
        <h6 className={styles.title}>{name}</h6>
      </div>
    </div>
  );
}

export default VideoGame;
