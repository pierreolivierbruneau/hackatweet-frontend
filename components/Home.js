import styles from "../styles/Home.module.css";
import backgroundImage from "../public/background.png"; // Assurez-vous que le chemin est correct
import react from "react";

const Home = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
        }}
      >
        <img src="white-logo.webp" className={styles.whiteLogo} />
        {/* Le contenu de votre site va ici */}
      </div>
      <div className={styles.secondBlack}>
        {/* Utilisation de la propriété style pour appliquer le style d'écriture au titre */}
        <img
          src="white-logo.webp"
          className={styles.whiteLogo}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100px",
          }}
        />

        <h1
          className={styles.title}
          style={{
            fontFamily: "'Segoe UI', sans-serif",
            fontSize: "100px",
            fontWeight: "bold",
          }}
        >
          See What's <br />
          happening
        </h1>
        <h2
          style={{
            fontWeight: "bold",
            fontFamily: "'Segoe UI', sans-serif",
            fontSize: "40px",
            marginLeft: "25px",
          }}
        >
          Join Hackatweet today.
        </h2>

        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-primary btn-lg">
            Sign up
          </button>

          <h3> Already have an account ? </h3>
          <div className="d-flex justify-content-center">
            <button type="button" className={styles.button}>
              sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
