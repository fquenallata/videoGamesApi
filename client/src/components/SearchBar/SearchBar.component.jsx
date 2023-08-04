import styles from "./SearchBar.module.css";
import { useNavigate } from "react-router-dom";

function SearchBar(props) {
  const navigate = useNavigate();

  const handlePost = () => {
    navigate("/post");
  };

  const { handleSubmit, handleChange } = props;

  return (
    <div className={styles.searchBar}>
      <form className={styles.formContainer}>
        <input
          className={styles.searchInput}
          placeholder="Search..."
          type="search"
          onChange={handleChange}
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
