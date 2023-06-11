import ReactQueryProvider from '@/components/providers/ReactQueryProvider';
import './globals.scss';
import { TITLE } from '@/constants/meta';
import Header from '@/components/organisms/Header';

export const metadata = {
  title: `STUDIO SOFTCONE : ${TITLE}`,
  description: '소프트콘의 자유로운 공작소',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>
        <ReactQueryProvider>
          <Header />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
