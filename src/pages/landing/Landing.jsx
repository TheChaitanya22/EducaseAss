import React from "react";
import styles from "./Landing.module.css";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.content}>
          <p className={styles.heading}>Welcome to PopX</p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <button
          onClick={() => navigate("/signup")}
          className={`${styles.btn} ${styles.primary}`}
        >
          Create Account
        </button>
        <button
          onClick={() => navigate("/login")}
          className={`${styles.btn} ${styles.secondary}`}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Landing;
