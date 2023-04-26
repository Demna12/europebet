import React from 'react';
import styles from './sticky.module.css';

export function Sticky() {
  return (
    <div className={styles.sticky}>
      <div className={styles.divider}></div>
      <button className={styles.stickyBtn}>ითამაშე</button>
    </div>
  );
}
