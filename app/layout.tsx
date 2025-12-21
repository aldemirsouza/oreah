import "./globals.css";

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
      <body className="bg-zinc-950">
        {children}
      </body>
    </html>
  );
}
