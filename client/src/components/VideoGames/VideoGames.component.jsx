import React from "react";
import VideoGame from "../VideoGame/VideoGame.component.jsx";
import styles from "./VideoGames.module.css";

function VideoGames(props) {
  const { allVideoGames, pageButtons, currentPage, onPageChange } = props;

  const videoGamesPerPage = 15;
  const startIndex = (currentPage - 1) * videoGamesPerPage;
  const endIndex = startIndex + videoGamesPerPage;
  const currentVideoGames = allVideoGames.slice(startIndex, endIndex);

  return (
    <div className={styles.videoGamesContainer}>
      <div className={styles.videoGamesList}>
        {currentVideoGames.map((videoGame) => (
          <VideoGame key={videoGame.id} videoGame={videoGame} />
        ))}
      </div>
      <div className={styles.buttonsContainer}>
        {pageButtons.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={pageNumber === currentPage ? styles.activePage : ""}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
}

export default VideoGames;
