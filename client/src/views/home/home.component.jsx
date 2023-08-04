import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideoGames, getGenres } from "../../redux/actions/actions.js";
import FilterBar from "../../components/FilterBar/FilterBar.component.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.component.jsx";
import VideoGames from "../../components/VideoGames/VideoGames.component.jsx";
import styles from "./Home.module.css";

function Home() {
  const dispatch = useDispatch();
  const allVideoGames = useSelector((state) => state.allVideoGames);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getVideoGames());
    dispatch(getGenres());
  }, []);

  const totalPages = Math.ceil(allVideoGames.length / 15);
  const pageButtons = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.homeContainer}>
      <SearchBar />
      <div className={styles.contentContainer}>
        <FilterBar handlePageChange={handlePageChange} />
        <VideoGames
          allVideoGames={allVideoGames}
          pageButtons={pageButtons}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Home;
