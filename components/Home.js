import styles from "../styles/Home.module.css";
import backgroundImage from "../public/background.png"; // Assurez-vous que le chemin est correct

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
        {/* Le contenu de votre site va ici */}
      </div>
      <div className={styles.secondBlack}>
        Partie de droite
        {/* Le contenu de la deuxième partie va ici */}
      </div>
    </div>
  );
};

export default Home;
