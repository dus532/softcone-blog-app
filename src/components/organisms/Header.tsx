'use client';

import Container from '@/components/templates/Container';
import React from 'react';
import styles from './Header.module.scss';
import LogoFullDark from '@/assets/svgs/LogoFullDark.svg';
import IconMenu from '@/assets/svgs/IconMenu';
import LogoFullLight from '@/assets/svgs/LogoFullLight.svg';
import Link from 'next/link';
import HeaderMenu from '@/components/organisms/HeaderMenu';

export default function Header() {
  return (
    <header className={styles.Header}>
      <Container>
        <div className={styles.HeaderContainer}>
          <Link href='/' style={{ display: 'contents' }}>
            <div className={`${styles.Logo} ${styles.LogoDark}`}>
              <LogoFullDark />
            </div>
            <div className={`${styles.Logo} ${styles.LogoLight}`}>
              <LogoFullLight />
            </div>
          </Link>
          <div className={styles.Menu}>
            <HeaderMenu />
          </div>
          <div className={styles.Right}></div>
          <div className={styles.MobileRight}>
            <div className={styles.MobileMenu}>
              <IconMenu />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
