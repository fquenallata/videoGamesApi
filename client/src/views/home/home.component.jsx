import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideoGames,
  getVideoGamesByName,
  getGenres,
} from "../../redux/actions/actions.js";
import FilterBar from "../../components/FilterBar/FilterBar.component.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.component.jsx";
import VideoGames from "../../components/VideoGames/VideoGames.component.jsx";
import styles from "./Home.module.css";

function Home() {
  const dispatch = useDispatch();
  const allVideoGames = useSelector((state) => state.allVideoGames);

  const [searchString, setSearchString] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    const regex = /^[a-zA-Z0-9]*$/;
    if (!regex.test(inputValue)) {
      setSearchString(inputValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchString === "") {
      dispatch(getVideoGames());
    } else {
      dispatch(getVideoGamesByName(searchString));
    }
  };

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
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
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
