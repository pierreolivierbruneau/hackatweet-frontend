import styles from "../styles/Home.module.css";
import backgroundImage from "../public/background.png"; // Assurez-vous que le chemin est correct
import { useState, useEffect } from "react";

const Home = () => {
  const [signUpFirstname, setsignUpFirstname] = useState("");
  const [signUpUsername, setsignUpUsername] = useState("");
  const [signUpPassword, setsignUpPassword] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  let modalContent = (
    <div className={styles.boutonSignup}>
      <p>Sign-up</p>
      <input
        type="firstname"
        placeholder="Firstname"
        id="FIRSTNAME"
        onChange={(e) => setFirstname(e.target.value)}
        value={signUpFirstname}
      />
      <input
        type="textfirst"
        placeholder="Username"
        id="SIGNIN"
        onChange={(e) => setSignUpUsername(e.target.value)}
        value={signUpUsername}
      />
      <input
        type="password"
        placeholder="Password"
        id="SIGNUP"
        onChange={(e) => setSignUpPassword(e.target.value)}
        value={signUpPassword}
      />
      <button id="register" onClick={() => handleRegister()}>
        Signup
      </button>
    </div>
  );

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
