'use client';

import React from 'react';
import styles from './HeaderMenu.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import { usePathname } from 'next/navigation';

export default function HeaderMenu() {
  return (
    <div className={styles.Menu}>
      <MenuItem href='/esports'>
        E.<span className={styles.Red}>SPORTS</span>
      </MenuItem>
      <MenuItem href='/plugin'>PLUG/IN</MenuItem>
      <MenuItem href='/devblog'>DEV.BLOG</MenuItem>
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
  const isSelected = !!(pathname === href);

  return (
    <div className={styles.Menu}>
      <Link href={href}>
        <div className={cn(styles.MenuItem)}>
          <div className={cn({ [styles.Opcaity70]: !isSelected })}>
            {children}
          </div>
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
