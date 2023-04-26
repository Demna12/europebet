import styles from "./Actions.module.css";
import Banner from "../Banner/index";

export function Actions() {
  return (
    <div className={styles.actions}>
      {Array.from({ length: 7 }, (_, i) => i + 1).map((item, i) => (
        <div className={styles["actions-item"]} key={i}>
          <img src={Banner} alt="Banner" />
        </div>
      ))}
    </div>
  );
}


