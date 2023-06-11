import Container from '@/components/templates/Container';
import React from 'react';
import styles from './NotFound.module.scss';

export default function NotFound() {
  return (
    <Container>
      <div className={styles.Box}>
        <h2 className={styles.UnderlineBox}>404</h2>
        <h1>NOT FOUND</h1>
        <p>
          페이지가 존재하지 않습니다
          <br />
          다시한번 확인해주세요
        </p>
      </div>
    </Container>
  );
}
