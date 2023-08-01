import { useState } from "react";
import styles from "./Create.module.css";
import { useDispatch } from "react-redux";
import { postVideoGame } from "../../redux/actions/actions.js";
import { useNavigate } from "react-router-dom";

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    image: "",
    description: "",
    platforms: [],
    release_date: "",
    rating: 0,
    genres: [],
  });

  const [error, setError] = useState({
    name: "Please, enter the name",
    image: "Please, enter the image",
    description: "Please, enter the description",
    platforms: "Please, select at least one option",
    release_date: "Please, enter the release date",
    rating: "The rating is 1-5",
    genres: "Please, select at least one option",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postVideoGame(input));
    navigate("/");
  };

  const handlHome = () => {
    navigate("/home");
  };

  return (
    <div className={styles.createContainer}>
      <div className={styles.navTitle}>
        <h3>Create a Video Game</h3>
        <button onClick={handlHome}>Home</button>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.data}>
          <div className={styles.smallInputs}>
            <div className={styles.input_label}>
              <label>name:</label>
              <input
                type="text"
                name="name"
                value={input.name}
                className={styles.textInputs}
              />
            </div>
            {error.name && <span>{error.name}</span>}
          </div>
          <div className={styles.smallInputs}>
            <div className={styles.input_label}>
              <label>release date:</label>
              <input
                type="text"
                name="release_date"
                value={input.release_date}
                className={styles.textInputs}
              />
            </div>
            {error.release_date && <span>{error.release_date}</span>}
          </div>
          <div className={styles.smallInputs}>
            <div className={styles.input_label}>
              <label>rating:</label>
              <input
                type="text"
                name="rating"
                value={input.rating}
                className={styles.textInputs}
              />
            </div>
            {error.rating && <span>{error.rating}</span>}
          </div>
          <div className={styles.bigDatas}>
            <label>description:</label>
            <textarea
              id=""
              cols="20"
              rows="5"
              type="textArea"
              name="description"
              value={input.description}
              className={styles.textInputs}
            />
            {error.description && <span>{error.description}</span>}
          </div>
        </div>
        <div className={styles.data}>
          <div className={styles.lists}>
            <div className={styles.bigDatas}>
              <label>genres:</label>
              <input
                type="text"
                name="genres"
                value={input.genres.join(", ")}
                className={styles.textInputs}
              />
              {error.genres && <span>{error.genres}</span>}
            </div>
            <div className={styles.bigDatas}>
              <label>platforms:</label>
              <input
                type="text"
                name="genres"
                value={input.genres.join(", ")}
                className={styles.textInputs}
              />
              {error.platforms && <span>{error.platforms}</span>}
            </div>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.input_label}>
              <label>image:</label>
              <input
                type="text"
                name="image"
                value={input.image}
                className={styles.textInputs}
              />
            </div>
            {error.image && <span>{error.image}</span>}
            <button type="submit" style={{ width: "60px" }}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
