import './globals.css';
import XStyledProvider from '@/components/providers/XStyledProvider';

export const metadata = {
  title: 'workshop by SOFTCONE : 소프트콘 공작소',
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
        <XStyledProvider>{children}</XStyledProvider>
      </body>
    </html>
  );
}
