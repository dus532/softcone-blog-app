import styles from './Menu.module.scss';

interface Menu {
  href: string;
  children: React.ReactNode;
}

export const MENU: Menu[] = [
  {
    href: '/esports',
    children: (
      <>
        E.<span className={styles.Red}>SPORTS</span>
      </>
    ),
  },
  {
    href: '/workshop',
    children: 'WORKSHOP',
  },
  {
    href: '/devblog',
    children: '<DEV>BLOG',
  },
];
