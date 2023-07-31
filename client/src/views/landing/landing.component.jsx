import styles from "./Landing.module.css";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/home");
  };

  return (
    <div className={styles.landing}>
      <div className={styles.landingImages}>
        <div className={styles.mainImage}>
          <div className={styles.contentWrapper}>
            <div className={styles.slogan}>
              Immerse in Epic Adventures, Choose Your Own Experience.
            </div>
            <button
              className={styles.getStartedButton}
              onClick={handleGetStarted}
            >
              Get Started
            </button>
          </div>
        </div>
        <div className={styles.peopleImages}>
          <div className={styles.manImage} />
          <div className={styles.womanImage} />
        </div>
        <div className={styles.consolesImages}></div>
      </div>
    </div>
  );
}

export default Landing;
