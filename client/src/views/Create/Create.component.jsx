import { useState } from "react";
import styles from "./Create.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postVideoGame, getGenres } from "../../redux/actions/actions.js";
import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import { useEffect } from "react";

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectRefs = useRef([]);
  const allGenres = useSelector((state) => state.allGenres);
  const allPlatforms = [
    "PC",
    "PlayStation 5",
    "Xbox One",
    "PlayStation 4",
    "Xbox Series S/X",
    "Nintendo Switch",
    "iOS",
    "Android",
    "macOs",
    "Linux",
    "Xbox 360",
    "PlayStatios 3",
    "Wii U",
  ];

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
    dispatch(postVideoGame());
    navigate("/");
  };

  const handleGenresChange = (e) => {
    const selectedGenreValue = e.target.value;
    if (!input.genres.includes(selectedGenreValue)) {
      setInput((prevInput) => ({
        ...prevInput,
        genres: [...prevInput.genres, selectedGenreValue],
      }));
    }
  };

  const handlePlatformsChange = (e) => {
    const selectedPlatformValue = e.target.value;
    if (!input.platforms.includes(selectedPlatformValue)) {
      setInput((prevInput) => ({
        ...prevInput,
        platforms: [...prevInput.platforms, selectedPlatformValue],
      }));
    }
  };

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  const handleResetSelects = (e) => {
    e.preventDefault();
    selectRefs.current.forEach((select) => (select.value = "DEFAULT"));
  };

  const handlHome = () => {
    navigate("/home");
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  return (
    <div className={styles.createContainer}>
      <div className={styles.navTitle}>
        <h3>Create a Video Game</h3>
        <button onClick={handlHome}>Home</button>
      </div>
      <form className={styles.form}>
        <div className={styles.data}>
          <div className={styles.smallInputs}>
            <div className={styles.input_label}>
              <label>name:</label>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
              onChange={handleInputChange}
              className={styles.textInputs}
            />
            {error.description && <span>{error.description}</span>}
          </div>
        </div>
        <div className={styles.data}>
          <div className={styles.lists}>
            <div className={styles.bigDatas}>
              <label>genres:</label>
              <select
                ref={(el) => (selectRefs.current[0] = el)}
                className={styles.select}
                name="genders"
                defaultValue={"DEFAULT"}
                onChange={handleGenresChange}
              >
                <option value="DEFAULT" disabled hidden>
                  --
                </option>
                {allGenres.map((genre) => (
                  <option key={genre.id} value={genre.name}>
                    {genre.name}
                  </option>
                ))}
              </select>
              {input.genres.length > 0 && <p>{input.genres.join(" - ")}</p>}
              {error.genres && <span>{error.genres}</span>}
            </div>
            <div className={styles.bigDatas}>
              <label>platforms:</label>
              <select
                ref={(el) => (selectRefs.current[1] = el)}
                className={styles.select}
                name="genders"
                defaultValue={"DEFAULT"}
                onChange={handlePlatformsChange}
              >
                <option value="DEFAULT" disabled hidden>
                  --
                </option>
                {allPlatforms.map((platform, index) => (
                  <option key={index} value={platform}>
                    {platform}
                  </option>
                ))}
              </select>
              {input.platforms.length > 0 && (
                <p>{input.platforms.join(" - ")}</p>
              )}
              {error.platforms && <span>{error.platforms}</span>}
            </div>
          </div>
          <div className={styles.smallInputs}>
            <div className={styles.input_label}>
              <label>image:</label>
              <input
                type="text"
                name="image"
                value={input.image}
                onChange={handleInputChange}
                className={styles.textInputs}
              />
            </div>
            {error.image && <span>{error.image}</span>}
          </div>
          <button onClick={handleResetSelects}>Reset Selects</button>
          <button
            onClick={handleSubmit}
            type="submit"
            style={{ width: "60px" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
