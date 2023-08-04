import styles from "./SearchBar.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getVideoGames,
  getVideoGamesByName,
} from "../../redux/actions/actions.js";

function SearchBar(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");

  const handlePost = () => {
    navigate("/post");
  };

  const handleSearchChange = (e) => {
    const inputValue = e.target.value;
    const regex = /^[a-zA-Z0-9 ]*$/;
    if (regex.test(inputValue)) {
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

  return (
    <div className={styles.searchBar}>
      <form className={styles.formContainer}>
        <input
          className={styles.searchInput}
          placeholder="Search..."
          type="search"
          value={searchString}
          onChange={handleSearchChange}
        ></input>
        <button
          className={styles.searchButton}
          type="submit"
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
      <button onClick={handlePost}>add a Game</button>
    </div>
  );
}

export default SearchBar;
