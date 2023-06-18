'use client';

import React from 'react';
import { MENU } from '@/config/menu';

import styles from './MobileMenu.module.scss';
import { useMobileMenu } from '@/states/mobileMenu';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function MobileMenu() {
  const pathname = usePathname();

  const { state, toggle } = useMobileMenu();

  if (!state) return null;
  return (
    <div className={styles.Container}>
      <ul className={styles.Menu}>
        {MENU.map((item) => {
          const isSelected = !!(pathname?.indexOf(item.href) === 0);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                toggle();
              }}
            >
              <li
                className={`${styles.MenuItem} ${
                  isSelected ? styles.MenuItem__Active : ''
                }`}
              >
                {item.children}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
