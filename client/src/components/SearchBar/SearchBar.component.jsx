import styles from "./SearchBar.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchBar(props) {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handlePost = () => {
    navigate("/post");
  };

  const handleSearchChange = (e) => {
    e.preventDefault();
  };

  const { handleChange, handleSubmit } = props;
  return (
    <div className={styles.searchBar}>
      <form className={styles.formContainer} onChange={handleChange}>
        <input
          className={styles.searchInput}
          placeholder="Search..."
          type="search"
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
