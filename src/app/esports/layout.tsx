import Container from '@/components/templates/Container';
import { TITLE } from '@/constants/meta';

export const metadata = {
  title: `SOFTCONE E.SPORTS : ${TITLE}`,
  description: '소프트콘 이스포츠',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}
