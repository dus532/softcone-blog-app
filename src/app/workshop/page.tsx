import SectionHeader from '@/components/molecules/SectionHeader';
import styles from './Page.module.scss';

export default function Page() {
  return (
    <div className={styles.Box}>
      <SectionHeader title='WORKSHOP' backgroundColor='var(--workshop-blue)' />
      <p>곧 좋은 프로젝트로 찾아뵙겠습니다!</p>
    </div>
  );
}
