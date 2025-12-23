import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Site em Construção",
  description: "Estamos preparando algo incrível",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`bg-zinc-950 ${inter.className} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
