import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FooterAlphabetNavigation from "@/components/ui/FooterAlphabetNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Color con J - Jade, Jaspe, Jengibre | ConLéxico",
  description: "Descubre todos los colores que empiezan con J en español. Jade, Jaspe, Jengibre y más colores únicos con la letra J. Aprende vocabulario de colores con ConLéxico.",
  keywords: ["color con j", "colores con j", "jade", "jaspe", "jengibre", "colores español", "vocabulario colores", "palabras con j"],
  authors: [{ name: "ConLéxico" }],
  creator: "ConLéxico",
  publisher: "ConLéxico",
  robots: "index, follow",
  alternates: {
    canonical: "https://conlexico.com"
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://conlexico.com",
    siteName: "ConLéxico",
    title: "Color con J - Jade, Jaspe, Jengibre | ConLéxico",
    description: "Descubre todos los colores que empiezan con J en español. Jade, Jaspe, Jengibre y más colores únicos.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Color con J - Colores que empiezan con J",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Color con J - Jade, Jaspe, Jengibre | ConLéxico",
    description: "Descubre todos los colores que empiezan con J en español. Jade, Jaspe, Jengibre y más colores únicos.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8YCQRVY7E7"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8YCQRVY7E7');
            `,
          }}
        />
        <script defer data-domain="conlexico.com" src="https://plausible.io/js/script.js"></script>
      </head>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <FooterAlphabetNavigation />
        <Footer />
      </body>
    </html>
  );
}
