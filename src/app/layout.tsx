import ReactQueryProvider from '@/components/providers/ReactQueryProvider';
import './globals.scss';
import { TITLE } from '@/constants/meta';
import Header from '@/components/organisms/Header';
import localFont from 'next/font/local';

const neurimboGothic = localFont({
  src: [
    {
      path: '../assets/fonts/neurimbo-gothic-regular.woff',
      weight: '400',
      style: 'normal',
    },
  ],
});

const Pretendard = localFont({
  src: [
    {
      path: '../assets/fonts/pretendard-variables.woff2',
    },
  ],
});

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
    <html
      lang='en'
      className={`${neurimboGothic.className} ${Pretendard.className}`}
    >
      <body>
        <ReactQueryProvider>
          <Header />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
