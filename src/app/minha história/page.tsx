import Link from "next/link";

export default function Historia() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}

      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link
            href="/"
            className="text-lg font-semibold tracking-[0.25em] text-[#C98A8A]"
          >
            KAREN SALLA STUDIO
          </Link>

          <nav className="hidden items-center gap-8 text-sm md:flex">

            <Link
              href="/"
              className="transition hover:text-[#C98A8A]"
            >
              Início
            </Link>

            <Link
              href="/#sobre"
              className="transition hover:text-[#C98A8A]"
            >
              Sobre
            </Link>

            <Link
              href="/servicos"
              className="transition hover:text-[#C98A8A]"
            >
              Serviços
            </Link>

            <Link
              href="/agendar"
              className="transition hover:text-[#C98A8A]"
            >
              Agendamento
            </Link>

            <Link
              href="/#contato"
              className="transition hover:text-[#C98A8A]"
            >
              Contato
            </Link>

          </nav>

          <Link
            href="/agendar"
            className="rounded-full bg-[#C98A8A] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#dba0a0]"
          >
            AGENDAR
          </Link>

        </div>
      </header>

      {/* HISTÓRIA */}

      <section className="px-6 pb-24 pt-36 md:pt-44">

        <div className="mx-auto max-w-5xl">

          {/* TÍTULO */}

          <div className="text-center">

            <p className="text-sm uppercase tracking-[0.35em] text-[#C98A8A]">
              Minha história
            </p>

            <h1 className="mt-5 text-5xl font-light leading-tight md:text-7xl">
              Muito prazer, eu sou a{" "}
              <span className="font-semibold text-[#C98A8A]">
                Karen.
              </span>{" "}
              🤍
            </h1>

          </div>

          {/* TEXTO */}

          <div className="mx-auto mt-16 max-w-3xl space-y-7 text-lg leading-9 text-zinc-400">

            <p>
              Minha história com a beleza começou ainda na infância. Eu amava
              acompanhar minha mãe ao cabeleireiro e ficava encantada
              observando cada detalhe: o cuidado, os movimentos, o ambiente e
              aquele cheirinho dos produtos que, de alguma forma, já despertava
              em mim uma paixão.
            </p>

            <p>
              Cresci e escolhi transformar esse encanto em profissão. Há mais
              de 20 anos, tenho o privilégio de trabalhar com aquilo que amo.
            </p>

            <p>
              Depois de tantos anos em Santo André, recentemente me mudei para
              Limeira, trazendo comigo não só minha experiência, mas também o
              desejo de construir novas histórias e conexões por aqui. 🤍
            </p>

            <p>
              Para mim, ser cabeleireira vai muito além de transformar cabelos.
              Amo fazer parte da vida de cada cliente, proporcionar momentos de
              cuidado, arrancar sorrisos e, ao longo do tempo, construir
              amizades que vão muito além do salão.
            </p>

            <p>
              Hoje, cada cliente que senta na minha cadeira faz parte dessa
              história. E é isso que torna meu trabalho tão especial para mim.
            </p>

          </div>

          {/* FRASE DE DESTAQUE */}

          <div className="mx-auto mt-20 max-w-4xl border-y border-white/10 py-12 text-center">

            <p className="text-2xl font-light leading-relaxed md:text-4xl">
              “Ser cabeleireira vai muito além de{" "}
              <span className="text-[#C98A8A]">
                transformar cabelos.
              </span>
              ”
            </p>

          </div>

          {/* BOTÕES */}

          <div className="mt-14 flex flex-wrap justify-center gap-4">

            <Link
              href="/"
              className="rounded-full border border-[#C98A8A] px-7 py-3.5 text-[#C98A8A] transition hover:bg-[#C98A8A] hover:text-black"
            >
              Voltar para o início
            </Link>

            <Link
              href="/agendar"
              className="rounded-full bg-[#C98A8A] px-7 py-3.5 font-semibold text-black transition hover:scale-105 hover:bg-[#dba0a0]"
            >
              Agendar meu horário
            </Link>

          </div>

        </div>

      </section>

      {/* RODAPÉ */}

      <footer className="border-t border-white/10 bg-black px-6 py-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">

          <div>

            <p className="text-lg tracking-[0.2em] text-[#C98A8A]">
              KAREN SALLA STUDIO
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              Beleza, cuidado e bem-estar.
            </p>

          </div>

          <div className="flex gap-6 text-sm text-zinc-500">

            <Link
              href="/servicos"
              className="transition hover:text-[#C98A8A]"
            >
              Serviços
            </Link>

            <Link
              href="/agendar"
              className="transition hover:text-[#C98A8A]"
            >
              Agendamento
            </Link>

          </div>

        </div>

      </footer>

    </main>
  );
}