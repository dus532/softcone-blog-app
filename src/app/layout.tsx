import ReactQueryProvider from '@/components/providers/ReactQueryProvider';
import './globals.css';
import XStyledProvider from '@/components/providers/XStyledProvider';
import { TITLE } from '@/constants/meta';

export const metadata = {
  title: `workshop by SOFTCONE : ${TITLE}`,
  description: '소프트콘의 자유로운 공작소',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <XStyledProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </XStyledProvider>
      </body>
    </html>
  );
}
