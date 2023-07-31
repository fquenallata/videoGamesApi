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

  const validate = (input) => {
    let updatedError = { ...error };

    if (!input.name) {
      updatedError.name = "Name cannot be null";
    } else {
      updatedError.name = "";
    }

    if (!input.release_date) {
      updatedError.release_date = "Release date cannot be null";
    } else {
      updatedError.release_date = "";
    }

    if (isNaN(input.rating) || input.rating < 1 || input.rating > 5) {
      updatedError.rating = "Rating must be a number between 1 and 5";
    } else {
      updatedError.rating = "";
    }

    if (!input.description) {
      updatedError.description = "Description cannot be null";
    } else {
      updatedError.description = "";
    }

    if (!input.genres.length) {
      updatedError.genres = "Genres cannot be null";
    } else {
      updatedError.genres = "";
    }

    if (!input.platforms.length) {
      updatedError.platforms = "Platforms cannot be null";
    } else {
      updatedError.platforms = "";
    }

    setError(updatedError);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let updatedItems = [...input[name]];

      if (checked) {
        updatedItems.push(value);
      } else {
        updatedItems = updatedItems.filter((item) => item !== value);
      }

      setInput({
        ...input,
        [name]: updatedItems,
      });
    } else {
      setInput({
        ...input,
        [name]: value,
      });
    }

    validate({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(input);

    const hasErrors = Object.values(error).some((error) => error !== "");

    if (!hasErrors) {
      dispatch(postVideoGame(input));
      navigate("/home");
    } else {
      window.alert("Insufficient data or invalid data");
    }
  };

  return (
    <div className={styles.createContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.data}>
          <label>name:</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
            className={styles.textInputs}
          />
          {error.name && <span>{error.name}</span>}
          <label>release date:</label>
          <input
            type="text"
            name="release_date"
            value={input.release_date}
            onChange={handleChange}
            className={styles.textInputs}
          />
          {error.release_date && <span>{error.release_date}</span>}
          <label>rating:</label>
          <input
            type="text"
            name="rating"
            value={input.rating}
            onChange={handleChange}
            className={styles.textInputs}
          />
          {error.rating && <span>{error.rating}</span>}
          <label>description:</label>
          <textarea
            id=""
            cols="20"
            rows="5"
            type="textArea"
            name="description"
            value={input.description}
            onChange={handleChange}
            className={styles.textInputs}
          />
          {error.description && <span>{error.description}</span>}
        </div>
        <div className={styles.data}>
          <label>genres:</label>
          <input
            type="text"
            name="genres"
            value={input.genres.join(", ")}
            onChange={handleChange}
            className={styles.textInputs}
          />
          {error.genres && <span>{error.genres}</span>}
          <label>platforms:</label>
          <div className={styles.checkboxsContainer}>
            <label>PC</label>
            <input
              style={{ height: "12px" }}
              type="checkbox"
              name="platforms"
              value="PC"
              checked={input.platforms.includes("PC")}
              onChange={handleChange}
            />
            <label>PlayStation 5</label>
            <input
              style={{ height: "12px" }}
              type="checkbox"
              name="platforms"
              value="PlayStation 5"
              checked={input.platforms.includes("PlayStation 5")}
              onChange={handleChange}
            />
            <label>Xbox One</label>
            <input
              style={{ height: "12px" }}
              type="checkbox"
              name="platforms"
              value="Xbox One"
              checked={input.platforms.includes("Xbox One")}
              onChange={handleChange}
            />
            <label>PlayStation 4</label>
            <input
              style={{ height: "12px" }}
              type="checkbox"
              name="platforms"
              value="PlayStation 4"
              checked={input.platforms.includes("PlayStation 4")}
              onChange={handleChange}
            />
            <label>Xbox Series S/X</label>
            <input
              style={{ height: "12px" }}
              type="checkbox"
              name="platforms"
              value="Xbox Series S/X"
              checked={input.platforms.includes("Xbox Series S/X")}
              onChange={handleChange}
            />
            <label>Nintendo Switch</label>
            <input
              style={{ height: "12px" }}
              type="checkbox"
              name="platforms"
              value="Nintendo Switch"
              checked={input.platforms.includes("Nintendo Switch")}
              onChange={handleChange}
            />
            <label>iOS</label>
            <input
              style={{ height: "12px" }}
              type="checkbox"
              name="platforms"
              value="iOS"
              checked={input.platforms.includes("iOS")}
              onChange={handleChange}
            />
            <label>Android</label>
            <input
              style={{ height: "12px" }}
              type="checkbox"
              name="platforms"
              value="Android"
              checked={input.platforms.includes("Android")}
              onChange={handleChange}
            />
            <label>Nintendo 3DS</label>
            <input
              style={{ height: "12px" }}
              type="checkbox"
              name="platforms"
              value="Nintendo 3DS"
              checked={input.platforms.includes("Nintendo 3DS")}
              onChange={handleChange}
            />
            <label>Nintendo DSi</label>
            <input
              style={{ height: "12px" }}
              type="checkbox"
              name="platforms"
              value="Nintendo DSi"
              checked={input.platforms.includes("Nintendo DSi")}
              onChange={handleChange}
            />
          </div>
          {error.platforms && <span>{error.platforms}</span>}
          <label>image:</label>
          <input
            type="text"
            name="image"
            value={input.image}
            onChange={handleChange}
            className={styles.textInputs}
          />
          {error.image && <span>{error.image}</span>}
          <button type="submit" style={{ width: "60px" }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
