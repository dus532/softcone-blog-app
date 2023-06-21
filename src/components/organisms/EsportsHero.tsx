'use client';
import BigItem from '@/components/molecules/Bigitem';
import styles from './EsportsHero.module.scss';

export default function EsportsHero() {
  return (
    <div className={styles.Hero}>
      <div>
        <BigItem
          img='/assets/test.jpg'
          category='2023 MSI'
          title='[5/30] 인포그래픽 정리'
          description='대웇엊ㅇ리'
          link='/'
        />
      </div>
      <div>1</div>
    </div>
  );
}
