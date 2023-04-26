import bannerImg from "../../assets/images/banner.jpg";
import styles from "./banner.module.css";

export function Banner() {
  return (
    <div className={styles.banner}>
      <img src={bannerImg} alt="BannerImg" />
    </div>
  );
}
