import ReactQueryProvider from '@/components/providers/ReactQueryProvider';
import './globals.scss';
import { TITLE } from '@/constants/meta';
import Header from '@/components/organisms/Header';
import Script from 'next/script';
import MobileMenu from '@/components/organisms/MobileMenu';
import RecoilProvider from '@/components/providers/RecoilProvider';

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
      {process.env.ENV === 'prod' ? (
        <>
          <Script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-00DD24441D'
          ></Script>
          <Script id='google-analytics' strategy='afterInteractive'>
            {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-00DD24441D');`}
          </Script>
        </>
      ) : null}
      <body>
        <RecoilProvider>
          <ReactQueryProvider>
            <Header />
            {children}
            <MobileMenu />
          </ReactQueryProvider>
        </RecoilProvider>
      </body>
    </html>
  );
}
