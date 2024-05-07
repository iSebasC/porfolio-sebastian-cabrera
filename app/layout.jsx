import { Outfit } from "next/font/google";
import Head from 'next/head';  // Importa Head
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// ThemeProvider
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Sebastian",
  description: "Back end Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>{metadata.title}</title>  // Puedes configurar el título aquí
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/app/favicon.ico" />
      </Head>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
