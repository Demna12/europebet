import { useState } from "react";
import styles from "./GameTabs.module.css";
import { Tab1 } from "./Tab1";
import { Tab2 } from "./Tab2";
import { Tab3 } from "./Tab3";

export function GameTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles["game-tabs"]}>
      <div className={styles["title-holder"]}>
        <h3>მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი</h3>
        <div>მოხვდი პოკერის ფესტივალზე მალტაში</div>
      </div>
      <div className={styles["tabs-header"]}>
        {Array.from({ length: 3 }, (_, i) => i + 1).map((item, i) => (
          <div
            onClick={() => setActiveTab(i)}
            className={`${styles["tab-header-item"]} ${
              activeTab === i ? "active" : ""
            }`}
            key={i}
          >
            <div className={styles["tab-header-item-in"]}>
              1-29 აპრილი
              <div> Cash Games</div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles["tabs-body-holder"]}>
        {activeTab === 0 && <Tab1 />}
        {activeTab === 1 && <Tab2 />}
        {activeTab === 2 && <Tab3 />}
      </div>
    </div>
  );
}
