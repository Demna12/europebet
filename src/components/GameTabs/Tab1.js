import React from 'react';
import styles from './GameTabs.module.css';

export function Tab1() {
  return (
    <div className={styles.tabContainer}>
      <div className={styles.mainHeader}>
        <div className={styles.divider}></div>
        1₾ რეიკი = 1 ქულას
      </div>
      <div className={styles.description}>
        ჰოლდემის <span>top20</span> ლიდერბორდი
      </div>
      <div className={styles.containerOne}>
        <div className={styles.containerOneTitle}>
          <span>ადგილი</span> <span>ვაუჩერი</span> <span>პრიზი</span>
        </div>
        <div className={styles.containerOneItem}>
          <div className={styles.numOne}>1</div>
        </div>
        <div className={styles.containerOneItem}>
          <div className={styles.numTwo}>2</div>
        </div>
        <div className={styles.containerOneItem}>
          <div className={styles.numThree}>3</div>
        </div>
        <div className={styles.containerOneItem}>
          <div className={styles.numFour}>4</div>
        </div>
        <div className={styles.containerOneItem}>
          <div className={styles.numFive}>5</div>
        </div>
        <div className={styles.containerOneItem}>
          <div className={styles.numSix}>6</div>
        </div>
      </div>
    </div>
  );
}
