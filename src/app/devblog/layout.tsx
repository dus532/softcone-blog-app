import Container from '@/components/templates/Container';
import { TITLE } from '@/constants/meta';

export const metadata = {
  title: `SOFTCONE DEV BLOG : ${TITLE}`,
  description: '소프트콘 개발 블로그',
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}
