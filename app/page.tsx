"use client";

import Image from "next/image";
import Link from "next/link";

export default function UnderConstruction() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between px-4 py-8">

      {/* Conteúdo */}
      <section className="flex flex-col items-center justify-center flex-1 text-center gap-6">
        <Image
          src="/oreah_logo.png"
          alt="Logo do Projeto"
          width={220}
          height={220}
          priority
        />

        <h1 className="text-3xl md:text-4xl font-bold">
          Loja em Construção
        </h1>

        <p className="text-white max-w-md">
          Estamos trabalhando para entregar uma experiência incrível.
          Em breve você poderá acessar todas as funcionalidades.
        </p>
      </section>

      {/* Rodapé */}
      <footer className="flex flex-col items-center gap-2 text-xs text-white">
        <span>Desenvolvimento power by</span>

        <Link
          href="https://kaiiro.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition duration-300"
        >
          <Image
            src="/logo-kaiiro-branco.png"
            alt="Logo da Kaiiro"
            width={120}
            height={60}
          />
        </Link>
      </footer>
    </main>
  );
}
