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
    validate(input);

    const hasErrors = Object.values(error).some((error) => error !== "");

    if (!hasErrors) {
      const updatedGenres = input.genres.map((selectedGenre) => {
        const genre = allGenres.find((genre) => genre.name === selectedGenre);
        return genre.id;
      });

      const updatedInput = {
        ...input,
        genres: updatedGenres,
      };

      dispatch(postVideoGame(updatedInput));
      navigate("/home");
      window.alert("Posted successfully");
    } else {
      window.alert("Insufficient data or no data");
    }
  };

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  const handleResetSelects = (e) => {
    e.preventDefault();
    const resetInput = {
      ...input,
      platforms: [],
      genres: [],
    };

    setInput(resetInput);
    setError(validate(resetInput));
    selectRefs.current.forEach((select) => (select.value = "DEFAULT"));
  };

  const validate = (updatedInput) => {
    const validationErrors = { ...error };

    if (updatedInput.name) {
      validationErrors.name = "";
    } else {
      validationErrors.name = "Please, enter the name";
    }

    if (updatedInput.image) {
      validationErrors.image = "";
    } else {
      validationErrors.image = "Please, enter the image";
    }

    if (updatedInput.description) {
      validationErrors.description = "";
    } else {
      validationErrors.description = "Please, enter the description";
    }

    if (updatedInput.release_date) {
      validationErrors.release_date = "";
    } else {
      validationErrors.release_date = "Please, enter the release date";
    }

    if (updatedInput.platforms.length === 0) {
      validationErrors.platforms = "Please, select at least one option";
    } else {
      validationErrors.platforms = "";
    }

    if (updatedInput.genres.length === 0) {
      validationErrors.genres = "Please, select at least one option";
    } else {
      validationErrors.genres = "";
    }

    const ratingRegex = /^([1-5](\.\d{1,2})?)?$/;
    if (updatedInput.rating === "") {
      validationErrors.rating = "The rating is 1-5";
    } else if (ratingRegex.test(updatedInput.rating)) {
      validationErrors.rating = "";
    } else {
      validationErrors.rating = "Invalid rating format";
    }

    return validationErrors;
  };

  const handleChanges = (e, type) => {
    e.preventDefault();

    let updatedInput = { ...input };

    if (type === "genres") {
      const selectedValue = e.target.value;
      if (!updatedInput.genres.includes(selectedValue)) {
        updatedInput.genres = [...updatedInput.genres, selectedValue];
      }
    } else if (type === "platforms") {
      const selectedValue = e.target.value;
      if (!updatedInput.platforms.includes(selectedValue)) {
        updatedInput.platforms = [...updatedInput.platforms, selectedValue];
      }
    } else {
      const { name, value } = e.target;
      updatedInput = {
        ...updatedInput,
        [name]: value,
      };
    }

    setInput(updatedInput);
    setError(validate(updatedInput));
  };

  const handleHome = () => {
    navigate("/home");
  };

  return (
    <div className={styles.createContainer}>
      <div className={styles.navTitle}>
        <h3>Create a Video Game</h3>
        <button onClick={handleHome}>Home</button>
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
                onChange={handleChanges}
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
                onChange={handleChanges}
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
                onChange={handleChanges}
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
              onChange={handleChanges}
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
                onChange={(e) => handleChanges(e, "genres")}
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
                onChange={(e) => handleChanges(e, "platforms")}
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
                onChange={handleChanges}
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
