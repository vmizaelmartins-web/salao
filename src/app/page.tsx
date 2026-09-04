import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
              href="#sobre"
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
              href="#contato"
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

      {/* HERO */}

      <section className="px-6 pb-20 pt-36 md:pt-40">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>

            <p className="text-sm uppercase tracking-[0.35em] text-[#C98A8A]">
              KAREN SALLA STUDIO
            </p>

            <h1 className="mt-6 text-5xl font-light leading-tight md:text-7xl">
              Beleza que{" "}
              <span className="font-semibold text-[#C98A8A]">
                transforma
              </span>{" "}
              momentos.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Há mais de 20 anos, tenho o privilégio de trabalhar
              com aquilo que amo.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/agendar"
                className="rounded-full bg-[#C98A8A] px-7 py-3.5 font-semibold text-black transition hover:scale-105 hover:bg-[#dba0a0]"
              >
                Agende seu horário
              </Link>

              <Link
                href="/servicos"
                className="rounded-full border border-[#C98A8A] px-7 py-3.5 text-[#C98A8A] transition hover:bg-[#C98A8A] hover:text-black"
              >
                Conheça os serviços
              </Link>

            </div>

          </div>

          {/* FOTO DA KAREN — AGUARDANDO FOTO REAL */}

          <div className="relative min-h-[500px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-950">
          </div>

        </div>

      </section>

      {/* FRASE DE IMPACTO */}

      <section className="border-y border-white/10 px-6 py-20">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-3xl font-light leading-relaxed md:text-5xl">
            Ser cabeleireira vai muito além de{" "}
            <span className="text-[#C98A8A]">
              transformar cabelos.
            </span>
          </p>

        </div>

      </section>

      {/* SOBRE */}

      <section
        id="sobre"
        className="px-6 py-24 md:py-32"
      >

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* FOTO DA KAREN — AGUARDANDO FOTO REAL */}

          <div className="relative min-h-[500px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-950">
          </div>

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-[#C98A8A]">
              Sobre mim
            </p>

            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Prazer, eu sou a{" "}
              <span className="font-semibold text-[#C98A8A]">
                Karen.
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-zinc-400">

              <p>
                Minha história com a beleza começou ainda na infância.
              </p>

              <p>
                Eu amava acompanhar minha mãe ao cabeleireiro e ficava
                encantada observando cada detalhe: o cuidado, os movimentos,
                o ambiente e aquele cheirinho dos produtos que, de alguma
                forma, já despertava em mim uma paixão.
              </p>

              <p>
                Com o passar dos anos, aquilo que começou como uma
                admiração se transformou em profissão, propósito e amor
                pelo que faço.
              </p>

            </div>

            <Link
              href="/historia"
              className="mt-8 inline-flex rounded-full border border-[#C98A8A] px-7 py-3.5 text-[#C98A8A] transition hover:bg-[#C98A8A] hover:text-black"
            >
              Conheça minha história
            </Link>

          </div>

        </div>

      </section>

      {/* SERVIÇOS */}

      <section className="bg-zinc-950 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-[#C98A8A]">
              Serviços
            </p>

            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Cuidados pensados para{" "}
              <span className="text-[#C98A8A]">
                você.
              </span>
            </h2>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {/* CABELO */}

            <Link
              href="/servicos"
              className="group overflow-hidden rounded-3xl border border-white/10 bg-black"
            >

              <div className="relative aspect-[4/5] overflow-hidden">

                <Image
                  src="/imagens/karen cabelo principal.jpeg"
                  alt="Serviços de cabelo"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              <div className="p-6">

                <p className="text-sm uppercase tracking-[0.2em] text-[#C98A8A]">
                  Cabelo
                </p>

                <h3 className="mt-2 text-2xl font-light">
                  Transforme seu visual
                </h3>

              </div>

            </Link>

            {/* MAQUIAGEM */}

            <Link
              href="/servicos"
              className="group overflow-hidden rounded-3xl border border-white/10 bg-black"
            >

              <div className="relative aspect-[4/5] overflow-hidden">

                <div className="relative aspect-[4/5] overflow-hidden">

                  <Image
                    src="/imagens/karen maquiagem principal.jpeg"
                    alt="Serviços de maquiagem"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

              </div>

              <div className="p-6">

                <p className="text-sm uppercase tracking-[0.2em] text-[#C98A8A]">
                  Maquiagem
                </p>

                <h3 className="mt-2 text-2xl font-light">
                  Realce sua beleza
                </h3>

              </div>

            </Link>

            {/* SOBRANCELHAS */}

            <Link
              href="/servicos"
              className="group overflow-hidden rounded-3xl border border-white/10 bg-black"
            >

              <div className="relative aspect-[4/5] overflow-hidden">

                <Image
                  src="/imagens/karen sobrancelhas principal.jpeg"
                  alt="Serviços de sobrancelhas"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              <div className="p-6">

                <p className="text-sm uppercase tracking-[0.2em] text-[#C98A8A]">
                  Sobrancelhas
                </p>

                <h3 className="mt-2 text-2xl font-light">
                  Pequenos detalhes
                </h3>

              </div>

            </Link>

          </div>

          <div className="mt-10 text-center">

            <Link
              href="/servicos"
              className="inline-flex rounded-full border border-[#C98A8A] px-7 py-3.5 text-[#C98A8A] transition hover:bg-[#C98A8A] hover:text-black"
            >
              Ver todos os serviços
            </Link>

          </div>

        </div>

      </section>

      {/* JEITO KAREN */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-[#C98A8A]">
            O jeito Karen
          </p>

          <blockquote className="mt-8 text-3xl font-light leading-relaxed md:text-5xl">
            “Amo fazer parte da vida de cada cliente,
            proporcionar momentos de cuidado,
            arrancar sorrisos...”
          </blockquote>

        </div>

      </section>

      {/* PORTFÓLIO */}

      <section className="bg-zinc-950 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-[#C98A8A]">
              Portfólio
            </p>

            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Alguns dos meus{" "}
              <span className="text-[#C98A8A]">
                trabalhos.
              </span>
            </h2>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">

            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/imagens/karen cabelo 1.jpeg"
                alt="Trabalho de cabelo"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/imagens/karen cabelo 2.jpeg"
                alt="Trabalho de cabelo"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/imagens/karen cabelo 3.jpeg"
                alt="Trabalho de cabelo"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/imagens/karen maquiagem 2.jpeg"
                alt="Trabalho de maquiagem"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/imagens/karen maquiagem principal 1.jpeg"
                alt="Trabalho de maquiagem"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>

      </section>

      {/* DEPOIMENTOS */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-[#C98A8A]">
              Depoimentos
            </p>

            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Quem vive essa experiência,{" "}
              <span className="text-[#C98A8A]">
                sente.
              </span>
            </h2>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <div className="min-h-[180px] rounded-3xl border border-white/10 bg-zinc-950 p-7">
            </div>

            <div className="min-h-[180px] rounded-3xl border border-white/10 bg-zinc-950 p-7">
            </div>

            <div className="min-h-[180px] rounded-3xl border border-white/10 bg-zinc-950 p-7">
            </div>

          </div>

        </div>

      </section>

      {/* CTA FINAL */}

      <section
        id="contato"
        className="border-t border-white/10 px-6 py-28"
      >

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-[#C98A8A]">
            Seu momento começa aqui
          </p>

          <h2 className="mt-5 text-4xl font-light leading-tight md:text-6xl">
            Vamos cuidar de{" "}
            <span className="text-[#C98A8A]">
              você?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-zinc-400">
            Escolha seu procedimento e reserve um momento especial
            para você.
          </p>

          <Link
            href="/agendar"
            className="mt-9 inline-flex rounded-full bg-[#C98A8A] px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-[#dba0a0]"
          >
            Agendar meu horário
          </Link>

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
