import Container from '@/components/templates/Container';
import { TITLE } from '@/constants/meta';

export const metadata = {
  title: `SOFTCONE WORKSHOP : ${TITLE}`,
  description: '소프트콘 공작소',
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}
