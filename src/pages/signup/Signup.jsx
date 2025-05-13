import React from "react";
import styles from "./Signup.module.css";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.content}>
          <p className={styles.heading}>Create your PopX account</p>
        </div>
        <div className={`${styles.label} ${styles.name}`}>Full Name</div>
        <input
          type="text"
          placeholder="Marry Doe"
          className={`${styles.input} ${styles.first}`}
        ></input>
        <div className={`${styles.label} ${styles.number}`}>Phone number</div>
        <input
          type="text"
          placeholder="Marry Doe"
          className={`${styles.input} ${styles.second}`}
        ></input>
        <div className={`${styles.label} ${styles.email}`}>Email Address</div>
        <input
          type="text"
          placeholder="Marry Doe"
          className={`${styles.input} ${styles.third}`}
        ></input>
        <div className={`${styles.label} ${styles.password}`}>Password</div>
        <input
          type="text"
          placeholder="Marry Doe"
          className={`${styles.input} ${styles.fourth}`}
        ></input>
        <div className={`${styles.label} ${styles.company}`}>Company name</div>
        <input
          type="text"
          placeholder="Marry Doe"
          className={`${styles.input} ${styles.fifth}`}
        ></input>
        <div className={styles.radio}>Are you an Agency?</div>
        <label className={styles.option}>
          <input type="radio" value={"yes"} />
          Yes
          <input type="radio" value={"no"} />
          No
        </label>
        <button onClick={() => navigate("/profile")} className={styles.btn}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Signup;
