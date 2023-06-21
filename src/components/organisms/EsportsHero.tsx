'use client';
import BigItem from '@/components/molecules/Bigitem';
import styles from './EsportsHero.module.scss';
import ArticleItem from '@/components/molecules/ArticleItem';

export default function EsportsHero() {
  return (
    <div className={styles.Hero}>
      <div className={styles.BigItem}>
        <BigItem
          img='/assets/test.jpg'
          category='2023 MSI'
          title='[5/30] 인포그래픽 정리'
          description='대웇엊ㅇ리'
          link='/'
        />
      </div>
      <div className={styles.Articles}>
        <ArticleItem
          img='/assets/test.jpg'
          category='2023 MSI'
          title='[5/30] 인포그래픽 정리'
          description='대웇엊ㅇ리'
          link='/'
        />
        <ArticleItem
          img='/assets/test.jpg'
          category='2023 MSI'
          title='[5/30] 인포그래픽 정리'
          description='대웇엊ㅇ리'
          link='/'
        />
      </div>
    </div>
  );
}
