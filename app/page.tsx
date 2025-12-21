"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function UnderConstruction() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);

  const handleStartAudio = () => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.35;

    audioRef.current.play().then(() => {
      setStarted(true);
    }).catch((err) => {
      console.error("Erro ao tocar áudio:", err);
    });
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-between px-4 py-8">

      {/* Áudio */}
      <audio
        ref={audioRef}
        src="/musica.mp3"
        preload="auto"
        loop
      />

      {/* Conteúdo */}
      <section className="flex flex-col items-center justify-center flex-1 text-center gap-6">

        <Image
          src="/kaiiro-logo.png"
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

        {/* Botão de áudio */}
        {!started && (
          <button
            onClick={handleStartAudio}
            className="mt-6 px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition"
          >
            Ativar som
          </button>
        )}
      </section>

      {/* Rodapé */}
      <footer className="flex flex-col items-center gap-2 text-xs text-white">
        <span>Desenvolvimento power by</span>

        <Image
          src="/kaiiro-logo.png"
          alt="Logo da Kairro"
          width={120}
          height={40}
        />
      </footer>
    </main>
  );
}
