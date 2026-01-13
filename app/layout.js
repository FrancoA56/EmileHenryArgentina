import { Roboto, Montserrat } from "next/font/google";
import "./globals.css";

// Roboto como fuente principal
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Emile Henry Argentina",
    template: "%s | Emile Henry Argentina",
  },
  description:
    "Descubrí los productos Emile Henry en Argentina. Dónde comprar, preguntas frecuentes y toda la línea de cerámica francesa.",
  keywords: [
    "Emile Henry",
    "cerámica francesa",
    "fuentes de cerámica",
    "productos Emile Henry Argentina",
  ],
  metadataBase: new URL("https://www.emilehenry.com.ar"),

  openGraph: {
    title: "Emile Henry Argentina",
    description:
      "Productos Emile Henry en Argentina. Cerámica francesa de alta calidad.",
    url: "https://www.emilehenry.com.ar",
    siteName: "Emile Henry Argentina",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Emile Henry Argentina",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
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
