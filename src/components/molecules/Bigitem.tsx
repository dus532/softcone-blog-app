import Image from 'next/image';
import styles from './BigItem.module.scss';

export default function BigItem({
  img,
  title,
  category,
  description,
  link,
}: {
  img: string;
  title: string;
  category?: string;
  description?: string;
  link?: string;
}) {
  return (
    <div className={styles.Item}>
      <Image
        className={styles.IMG}
        alt={title}
        src={img}
        width={588}
        height={588}
      />
      <h6 className={styles.Category}>{category}</h6>
      <h3 className={styles.Title}>{title}</h3>
      <h5 className={styles.Description}>{description}</h5>
    </div>
  );
}
