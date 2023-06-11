import Container from '@/components/templates/Container';
import React from 'react';
import styles from './Header.module.scss';
import LOGO from '@/assets/svgs/logo_full.svg';
import Link from 'next/link';
import HeaderMenu from '@/components/organisms/HeaderMenu';

export default function Header() {
  return (
    <header className={styles.Header}>
      <Container>
        <div className={styles.HeaderContainer}>
          <Link href='/'>
            <div className={styles.Logo}>
              <LOGO />
            </div>
          </Link>
          <div className={styles.Menu}>
            <HeaderMenu />
          </div>
          <div className={styles.Right} />
        </div>
      </Container>
    </header>
  );
}
