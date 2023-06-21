import ArticleItem from '@/components/molecules/ArticleItem';
import SectionHeader from '@/components/molecules/SectionHeader';
import EsportsHero from '@/components/organisms/EsportsHero';

export default function Page() {
  return (
    <>
      <SectionHeader title='E.SPORTS' backgroundColor='var(--esports-red)' />
      <EsportsHero />
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
    </>
  );
}
