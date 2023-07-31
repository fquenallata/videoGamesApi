import FilterBar from "../../components/FilterBar/FilterBar.component.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.component.jsx";
import VideoGames from "../../components/VideoGames/VideoGames.component.jsx";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideoGames,
  getVideoGamesByName,
} from "../../redux/actions/actions.js";

function Home() {
  const dispatch = useDispatch();
  const allVideoGames = useSelector((state) => state.allVideoGames);
  const [searchString, setSearchString] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchString(e.target.value);
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
  }, []);

  return (
    <div className={styles.homeContainer}>
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className={styles.contentContainer}>
        <FilterBar allVideoGames={allVideoGames} />
        <VideoGames allVideoGames={allVideoGames} />
      </div>
    </div>
  );
}

export default Home;
