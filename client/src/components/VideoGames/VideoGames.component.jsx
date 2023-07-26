import { useState } from "react";
import VideoGame from "../VideoGame/VideoGame.component.jsx";
import styles from "./VideoGames.module.css";

function VideoGames(props) {
  const { allVideoGames } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const videoGamesPerPage = 15;
  const totalPages = Math.ceil(allVideoGames.length / videoGamesPerPage);

  const getVideoGamesForPage = (page) => {
    const startIndex = (page - 1) * videoGamesPerPage;
    const endIndex = startIndex + videoGamesPerPage;
    return allVideoGames.slice(startIndex, endIndex);
  };

  const handlePage = (page) => {
    setCurrentPage(page);
  };

  const currentVideoGames = getVideoGamesForPage(currentPage);

  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <button key={i} onClick={() => handlePage(i)}>
        {i}
      </button>
    );
  }

  return (
    <div className={styles.videoGamesContainer}>
      <div className={styles.videoGamesList}>
        {currentVideoGames.map((videoGame) => (
          <VideoGame key={videoGame.id} videoGame={videoGame} />
        ))}
      </div>
      <div className={styles.buttonsContainer}>{pageButtons}</div>
    </div>
  );
}

export default VideoGames;
