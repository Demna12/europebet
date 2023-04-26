import styles from "./Actions.module.css";
import bannerImg from "../../assets/images/banner.jpg";

export function Actions() {
  return (
    <div className={styles.actions}>
      {Array.from({ length: 7 }, (_, i) => i + 1).map((item, i) => (
        <div className={styles["actions-item"]} key={i}>
          <img src={bannerImg} alt="BannerImg" />
        </div>
      ))}
    </div>
  );
}
