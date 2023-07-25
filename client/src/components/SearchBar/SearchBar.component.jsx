import styles from "./SearchBar.module.css";

function SearchBar(props) {
  const { handleChange, handleSubmit } = props;
  return (
    <div className={styles.searchBar}>
      <form className={styles.formContainer} onChange={handleChange}>
        <input
          className={styles.searchInput}
          placeholder="Search..."
          type="search"
        ></input>
        <button
          className={styles.searchButton}
          type="submit"
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
