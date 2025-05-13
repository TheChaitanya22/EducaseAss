import React from "react";
import styles from "./Profile.module.css";
import profilePhoto from "../../assets/photo.png";
import cameraPhoto from "../../assets/camera.png";

const ProfileCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.navbar}>
          <h2 className={styles.heading}>Account Settings</h2>
        </div>
        <div className={styles.card}>
          <div className={styles.profile}>
            <img src={profilePhoto} className={styles.avatar} />
            <img src={cameraPhoto} className={styles.icon} />
            <div className={styles.info}>
              <p className={styles.name}>Marry Doe</p>
              <p className={styles.email}>Marry@Gmail.Com</p>
            </div>
          </div>
          <div className={styles.content}>
            <p>
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
