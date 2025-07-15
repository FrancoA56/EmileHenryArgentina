import { Roboto, Montserrat } from 'next/font/google';
import './globals.css';

// Roboto como fuente principal
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: 'Emile Henry',
  description: 'Sitio oficial Emile Henry Argentina',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${roboto.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
