import React from 'react';
import styles from './SectionHeader.module.scss';

export default function SectionHeader({
  title,
  backgroundColor,
}: {
  title?: React.ReactNode;
  backgroundColor?: string;
}) {
  return (
    <div className={styles.Box}>
      <h5 className={styles.SubTitle}>SOFTCONE</h5>
      <h1>{title}</h1>
      <div style={{ backgroundColor }} className={styles.Underline}></div>
    </div>
  );
}
