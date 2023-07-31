import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { getVideoGamesById } from "../../redux/actions/actions.js";

function Detail() {
  const dispatch = useDispatch();
  const { detailId } = useParams();
  const videoGame = useSelector((state) => state.allVideoGames);

  useEffect(() => {
    dispatch(getVideoGamesById(detailId));
  }, []);

  const { description, genres, image, name, platforms, rating, release_date } =
    videoGame[0];

  const genresFormated = genres.join(" - ");
  const platformsFormated = platforms.join(" - ");

  return (
    <div className={styles.detailContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={image} alt={name} />
        </div>
        <div className={styles.dataContainer}>
          <div className={styles.extraInfo}>
            <div>{release_date}</div>
            <div>{rating}</div>
          </div>
          <div className={styles.principalInfo}>
            <div className={styles.title}>
              <h1>{name}</h1>
            </div>

            <div>
              <b>
                <u>platforms:</u>
              </b>
              {` ${platformsFormated}`}
            </div>
            <br />

            <div>
              <b>
                <u>genres:</u>
              </b>
              {` ${genresFormated}`}
            </div>
            <br />

            <div>
              <b>
                <u>description:</u>
              </b>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
