import React from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.content}>
          <p className={styles.heading}>Signin to your PopX account</p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <div className={`${styles.label} ${styles.email}`}>Email Address</div>
        <input
          type="text"
          placeholder="Enter email address"
          className={`${styles.input} ${styles.first}`}
        ></input>
        <div className={`${styles.label} ${styles.password}`}>Password</div>
        <input
          type="text"
          placeholder="Enter password"
          className={`${styles.input} ${styles.second}`}
        ></input>

        <button onClick={() => navigate("/profile")} className={styles.btn}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
