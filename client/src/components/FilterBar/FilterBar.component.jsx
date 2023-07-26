import styles from "./FilterBar.module.css";

function FilterBar(props) {
  return (
    <div className={styles.filterBarContainer}>
      <h4>Filters</h4>

      <p>Filter by Origin</p>
      <select className={styles.select} name="origin" defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled hidden>
          --
        </option>
        <option value="api">api</option>
        <option value="created">created</option>
      </select>
      <p>Filter by Gender</p>
      <select className={styles.select} name="genders" defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled hidden>
          --
        </option>
      </select>
      <p>Order by Name</p>
      <select
        className={styles.select}
        name="orderByName"
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled hidden>
          --
        </option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
      <p>Order by Rating</p>
      <select className={styles.select} name="rating" defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled hidden>
          --
        </option>
        <option value="high">high rating</option>
        <option value="low">low rating</option>
      </select>
    </div>
  );
}

export default FilterBar;
