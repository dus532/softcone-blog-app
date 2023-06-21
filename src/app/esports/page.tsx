import SectionHeader from '@/components/molecules/SectionHeader';
import EsportsHero from '@/components/organisms/EsportsHero';

export default function Page() {
  return (
    <>
      <SectionHeader title='E.SPORTS' backgroundColor='var(--esports-red)' />
      <EsportsHero />
    </>
  );
}
