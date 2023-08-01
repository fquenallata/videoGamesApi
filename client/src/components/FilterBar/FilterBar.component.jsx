import React, { useRef } from "react";
import styles from "./FilterBar.module.css";
import { useDispatch } from "react-redux";
import {
  filterVideoGamesByRating,
  resetFilters,
} from "../../redux/actions/actions.js";

function FilterBar(props) {
  const dispatch = useDispatch();
  const selectRefs = useRef([]);

  const handleRatingChange = (event) => {
    const option = parseInt(event.target.value);
    dispatch(filterVideoGamesByRating(option));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
    selectRefs.current.forEach((select) => (select.value = "DEFAULT"));
  };

  return (
    <div className={styles.filterBarContainer}>
      <div className={styles.filterBarContent}>
        <h4>Filters</h4>
        <p>Filter by Origin</p>
        <select
          ref={(el) => (selectRefs.current[0] = el)}
          className={styles.select}
          name="origin"
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled hidden>
            --
          </option>
          <option value="api">api</option>
          <option value="created">created</option>
        </select>
        <p>Filter by Gender</p>
        <select
          ref={(el) => (selectRefs.current[1] = el)}
          className={styles.select}
          name="genders"
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled hidden>
            --
          </option>
        </select>
        <p>Order by Name</p>
        <select
          ref={(el) => (selectRefs.current[2] = el)}
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
        <select
          ref={(el) => (selectRefs.current[3] = el)}
          className={styles.select}
          name="rating"
          defaultValue={"DEFAULT"}
          onChange={handleRatingChange}
        >
          <option value="DEFAULT" disabled hidden>
            --
          </option>
          <option value="0">high rating</option>
          <option value="1">low rating</option>
        </select>
      </div>
      <button onClick={handleResetFilters}>Reset Filters</button>
    </div>
  );
}

export default FilterBar;
