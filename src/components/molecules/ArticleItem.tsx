import Image from 'next/image';
import styles from './ArticleItem.module.scss';

export default function ArticleItem({
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
        width={306}
        height={306}
      />
      <div className={styles.Summary}>
        <h6 className={styles.Category}>{category}</h6>
        <h3 className={styles.Title}>{title}</h3>
        <h5 className={styles.Description}>{description}</h5>
      </div>
    </div>
  );
}
