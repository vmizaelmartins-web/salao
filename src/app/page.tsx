import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-[#c9a06a]/20 bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link href="/" className="group">
            <div className="text-xl font-light tracking-[0.25em] text-[#d8b477]">
              KAREN SALLA
            </div>

            <div className="mt-1 text-[9px] tracking-[0.35em] text-white/60">
              DESIGNER
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm text-white/80 transition hover:text-[#d8b477]"
            >
              Início
            </Link>

            <Link
              href="#sobre"
              className="text-sm text-white/80 transition hover:text-[#d8b477]"
            >
              Sobre
            </Link>

            <Link
              href="/servicos"
              className="text-sm text-white/80 transition hover:text-[#d8b477]"
            >
              Serviços
            </Link>

            <Link
              href="/agendamento"
              className="text-sm text-white/80 transition hover:text-[#d8b477]"
            >
              Agendamento
            </Link>

            <Link
              href="#contato"
              className="text-sm text-white/80 transition hover:text-[#d8b477]"
            >
              Contato
            </Link>
          </nav>

          <Link
            href="/agendamento"
            className="rounded-full border border-[#d8b477] px-5 py-2.5 text-xs tracking-[0.15em] text-[#d8b477] transition hover:bg-[#d8b477] hover:text-black"
          >
            AGENDAR
          </Link>
        </div>
      </header>


      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-24">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(216,180,119,0.12),transparent_35%)]" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2">

          <div className="relative z-10">

            <p className="mb-6 text-xs tracking-[0.4em] text-[#d8b477]">
              KAREN SALLA DESIGNER
            </p>

            <h1 className="max-w-3xl text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
              Beleza que
              <br />
              <span className="italic text-[#d8b477]">
                transforma
              </span>
              <br />
              momentos.
            </h1>

            <div className="mt-8 max-w-xl border-l border-[#d8b477]/50 pl-5">
              <p className="text-lg font-light leading-relaxed text-white/75">
                Há mais de 20 anos, tenho o privilégio de trabalhar com aquilo
                que amo.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/agendamento"
                className="rounded-full bg-[#d8b477] px-7 py-4 text-sm font-medium tracking-wide text-black transition hover:bg-[#ecd09d]"
              >
                Agendar meu horário
              </Link>

              <Link
                href="/servicos"
                className="rounded-full border border-white/25 px-7 py-4 text-sm tracking-wide text-white transition hover:border-[#d8b477] hover:text-[#d8b477]"
              >
                Conheça os serviços
              </Link>

            </div>

          </div>


          {/* ESPAÇO PARA FOTO */}
          <div className="relative mx-auto h-[560px] w-full max-w-md">

            <div className="absolute inset-0 rounded-t-[220px] border border-[#d8b477]/30" />

            <div className="absolute inset-5 flex items-center justify-center rounded-t-[200px] bg-gradient-to-b from-[#241d16] to-black">

              <div className="text-center">

                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-[#d8b477]/40">
                  <span className="text-2xl text-[#d8b477]">
                    KS
                  </span>
                </div>

                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Foto da Karen
                </p>

                <p className="mt-2 text-xs text-white/30">
                  Espaço reservado para foto real
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* FRASE DE IMPACTO */}
      <section className="border-y border-white/10 bg-[#0b0b0b] px-6 py-24">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs tracking-[0.4em] text-[#d8b477]">
            MAIS DO QUE BELEZA
          </p>

          <h2 className="mt-7 text-3xl font-light leading-relaxed md:text-5xl">
            Ser cabeleireira vai muito além de
            <span className="italic text-[#d8b477]">
              {" "}transformar cabelos.
            </span>
          </h2>

        </div>

      </section>


      {/* SOBRE */}
      <section id="sobre" className="px-6 py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          {/* FOTO */}
          <div className="relative h-[500px]">

            <div className="absolute left-0 top-0 h-full w-[90%] rounded-[180px_180px_0_0] border border-[#d8b477]/30" />

            <div className="absolute bottom-0 right-0 flex h-[90%] w-[85%] items-center justify-center rounded-[150px_150px_0_0] bg-[#15110d]">

              <div className="text-center">

                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#d8b477]/30">
                  <span className="text-xl text-[#d8b477]">
                    KS
                  </span>
                </div>

                <p className="text-xs tracking-[0.25em] text-white/30">
                  FOTO REAL
                </p>

              </div>

            </div>

          </div>


          <div>

            <p className="text-xs tracking-[0.4em] text-[#d8b477]">
              SOBRE A KAREN
            </p>

            <h2 className="mt-5 text-4xl font-light md:text-5xl">
              Prazer,
              <br />
              <span className="italic text-[#d8b477]">
                eu sou a Karen.
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-white/65">

              <p>
                Minha história com a beleza começou ainda na infância.
              </p>

              <p>
                Eu amava acompanhar minha mãe ao cabeleireiro e ficava
                encantada observando cada detalhe.
              </p>

              <p>
                O cuidado, os movimentos, o ambiente e aquele cheirinho dos
                produtos despertavam em mim uma paixão.
              </p>

            </div>

            <Link
              href="#contato"
              className="mt-8 inline-flex items-center text-sm tracking-wide text-[#d8b477] transition hover:text-white"
            >
              Conheça minha história
              <span className="ml-3 text-lg">
                →
              </span>
            </Link>

          </div>

        </div>
      </section>


      {/* SERVIÇOS */}
      <section className="bg-[#0b0b0b] px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <p className="text-xs tracking-[0.4em] text-[#d8b477]">
                SERVIÇOS
              </p>

              <h2 className="mt-5 text-4xl font-light md:text-5xl">
                Cuidados pensados
                <br />
                <span className="italic text-[#d8b477]">
                  para você.
                </span>
              </h2>

            </div>

            <Link
              href="/servicos"
              className="text-sm tracking-wide text-white/60 transition hover:text-[#d8b477]"
            >
              Ver todos os serviços →
            </Link>

          </div>


          <div className="mt-16 grid gap-px overflow-hidden border border-white/10 md:grid-cols-3">

            <Link
              href="/servicos"
              className="group bg-black p-8 transition hover:bg-[#15110d]"
            >

              <span className="text-xs tracking-[0.25em] text-[#d8b477]">
                01
              </span>

              <h3 className="mt-12 text-2xl font-light">
                Cortes
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Cortes pensados para valorizar sua personalidade e estilo.
              </p>

              <span className="mt-10 block text-sm text-[#d8b477]">
                Conhecer →
              </span>

            </Link>


            <Link
              href="/servicos"
              className="group bg-black p-8 transition hover:bg-[#15110d]"
            >

              <span className="text-xs tracking-[0.25em] text-[#d8b477]">
                02
              </span>

              <h3 className="mt-12 text-2xl font-light">
                Coloração
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Técnicas de cor para renovar, iluminar e transformar.
              </p>

              <span className="mt-10 block text-sm text-[#d8b477]">
                Conhecer →
              </span>

            </Link>


            <Link
              href="/servicos"
              className="group bg-black p-8 transition hover:bg-[#15110d]"
            >

              <span className="text-xs tracking-[0.25em] text-[#d8b477]">
                03
              </span>

              <h3 className="mt-12 text-2xl font-light">
                Tratamentos
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Cuidados para devolver vida, brilho e movimento aos fios.
              </p>

              <span className="mt-10 block text-sm text-[#d8b477]">
                Conhecer →
              </span>

            </Link>

          </div>

        </div>
      </section>


      {/* JEITO KAREN */}
      <section className="px-6 py-32">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-xs tracking-[0.4em] text-[#d8b477]">
            O JEITO KAREN DE CUIDAR
          </p>

          <blockquote className="mt-10 text-3xl font-light leading-relaxed md:text-5xl">

            “Amo fazer parte da vida de cada cliente,
            proporcionar momentos de cuidado,
            arrancar sorrisos...”

          </blockquote>

        </div>

      </section>


      {/* GALERIA */}
      <section className="bg-[#0b0b0b] px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14">

            <p className="text-xs tracking-[0.4em] text-[#d8b477]">
              MOMENTOS
            </p>

            <h2 className="mt-5 text-4xl font-light md:text-5xl">
              Um pouco do
              <span className="italic text-[#d8b477]">
                {" "}meu trabalho.
              </span>
            </h2>

          </div>


          <div className="grid gap-4 md:grid-cols-3">

            <div className="flex h-[420px] items-center justify-center bg-[#15110d]">
              <span className="text-xs uppercase tracking-[0.25em] text-white/25">
                Foto real
              </span>
            </div>

            <div className="flex h-[420px] items-center justify-center bg-[#18130f]">
              <span className="text-xs uppercase tracking-[0.25em] text-white/25">
                Foto real
              </span>
            </div>

            <div className="flex h-[420px] items-center justify-center bg-[#15110d]">
              <span className="text-xs uppercase tracking-[0.25em] text-white/25">
                Foto real
              </span>
            </div>

          </div>

        </div>
      </section>


      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-xs tracking-[0.4em] text-[#d8b477]">
              EXPERIÊNCIAS
            </p>

            <h2 className="mt-5 text-4xl font-light md:text-5xl">
              O que minhas
              <span className="italic text-[#d8b477]">
                {" "}clientes dizem.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/45">
              Em breve, histórias reais de clientes que fazem parte dessa
              trajetória.
            </p>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-3">

            <div className="min-h-[220px] border border-white/10 p-8">
              <span className="text-xs tracking-[0.2em] text-[#d8b477]">
                DEPOIMENTO
              </span>
            </div>

            <div className="min-h-[220px] border border-white/10 p-8">
              <span className="text-xs tracking-[0.2em] text-[#d8b477]">
                DEPOIMENTO
              </span>
            </div>

            <div className="min-h-[220px] border border-white/10 p-8">
              <span className="text-xs tracking-[0.2em] text-[#d8b477]">
                DEPOIMENTO
              </span>
            </div>

          </div>

        </div>
      </section>


      {/* CTA FINAL */}
      <section className="relative overflow-hidden border-y border-[#d8b477]/20 bg-[#100d09] px-6 py-32">

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8b477]/5 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">

          <p className="text-xs tracking-[0.4em] text-[#d8b477]">
            SUA VEZ
          </p>

          <h2 className="mt-7 text-4xl font-light leading-tight md:text-6xl">
            Hoje, cada cliente que senta na minha cadeira
            <span className="italic text-[#d8b477]">
              {" "}faz parte dessa história.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-white/50">
            Seu próximo momento começa aqui.
          </p>

          <Link
            href="/agendamento"
            className="mt-10 inline-flex rounded-full bg-[#d8b477] px-8 py-4 text-sm font-medium tracking-wide text-black transition hover:bg-[#ecd09d]"
          >
            Agendar meu horário
          </Link>

        </div>

      </section>


      {/* CONTATO / FOOTER */}
      <footer id="contato" className="border-t border-white/10 bg-black px-6 py-16">

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">

          <div>

            <div className="text-xl font-light tracking-[0.25em] text-[#d8b477]">
              KAREN SALLA
            </div>

            <p className="mt-2 text-[9px] tracking-[0.35em] text-white/40">
              DESIGNER
            </p>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/40">
              Beleza, cuidado e momentos especiais em cada atendimento.
            </p>

          </div>


          <div>

            <p className="text-xs tracking-[0.3em] text-[#d8b477]">
              NAVEGAÇÃO
            </p>

            <div className="mt-6 flex flex-col gap-3 text-sm text-white/50">

              <Link
                href="/"
                className="transition hover:text-[#d8b477]"
              >
                Início
              </Link>

              <Link
                href="/servicos"
                className="transition hover:text-[#d8b477]"
              >
                Serviços
              </Link>

              <Link
                href="/agendamento"
                className="transition hover:text-[#d8b477]"
              >
                Agendamento
              </Link>

            </div>

          </div>


          <div>

            <p className="text-xs tracking-[0.3em] text-[#d8b477]">
              AGENDAMENTO
            </p>

            <p className="mt-6 text-sm leading-7 text-white/50">
              Escolha seu serviço e encontre o melhor horário para você.
            </p>

            <Link
              href="/agendamento"
              className="mt-5 inline-block text-sm text-[#d8b477] transition hover:text-white"
            >
              Agendar horário →
            </Link>

          </div>

        </div>


        <div className="mx-auto mt-16 max-w-7xl border-t border-white/10 pt-8">

          <p className="text-center text-xs text-white/25">
            © {new Date().getFullYear()} Karen Salla Designer. Todos os
            direitos reservados.
          </p>

        </div>

      </footer>

    </main>
  );
}