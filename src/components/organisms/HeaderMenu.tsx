'use client';

import React from 'react';
import styles from './HeaderMenu.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import { usePathname } from 'next/navigation';
import { MENU } from '@/config/menu';

export default function HeaderMenu() {
  return (
    <div className={styles.Menu}>
      {MENU.map((item) => (
        <MenuItem href={item.href} key={item.href}>
          {item.children}
        </MenuItem>
      ))}
    </div>
  );
}

function MenuItem({
  children,
  href = '/',
}: {
  children?: React.ReactNode;
  href?: string;
}) {
  const pathname = usePathname();
  const isSelected = !!(pathname?.indexOf(href) === 0);

  return (
    <div className={styles.Menu}>
      <Link href={href}>
        <div className={cn(styles.MenuItem, { [styles.Active]: isSelected })}>
          <div>{children}</div>
          <div
            className={cn(styles.BorderBottom, {
              [styles.BorderBottomActive]: isSelected,
            })}
          ></div>
        </div>
      </Link>
    </div>
  );
}
