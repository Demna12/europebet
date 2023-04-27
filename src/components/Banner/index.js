import React from 'react';
import styles from './banner.module.css';

export function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerText}>
        <span>სლოტები</span> 10 იანვარი - 12 მარტი
        <button className={styles.closeBtn}></button>
      </div>
    </div>
  );
}

export default Banner;
