import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Componentes
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export const metadata = {
  title: "Portfólio - Matheus",
  description: "Meu portfólio pessoal",
  icons: {
    icon: '/file.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='pt-BR'>
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
