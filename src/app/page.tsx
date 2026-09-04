import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* =========================
          NAVBAR
      ========================= */}
      <header className="fixed top-0 z-50 w-full border-b border-[#C98A8A]/20 bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link href="/" className="group">
            <div className="text-xl font-light tracking-[0.25em] text-[#C98A8A]">
              KAREN SALLA
            </div>

            <div className="mt-1 text-[9px] tracking-[0.35em] text-white/60">
              DESIGNER
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">

            <Link
              href="/"
              className="text-sm text-white/80 transition hover:text-[#C98A8A]"
            >
              Início
            </Link>

            <Link
              href="#sobre"
              className="text-sm text-white/80 transition hover:text-[#C98A8A]"
            >
              Sobre
            </Link>

            <Link
              href="/servicos"
              className="text-sm text-white/80 transition hover:text-[#C98A8A]"
            >
              Serviços
            </Link>

            <Link
              href="/agendar"
              className="text-sm text-white/80 transition hover:text-[#C98A8A]"
            >
              Agendamento
            </Link>

            <Link
              href="#contato"
              className="text-sm text-white/80 transition hover:text-[#C98A8A]"
            >
              Contato
            </Link>

          </nav>

          <Link
            href="/agendar"
            className="rounded-full border border-[#C98A8A] px-5 py-2.5 text-xs tracking-[0.15em] text-[#C98A8A] transition hover:bg-[#C98A8A] hover:text-black"
          >
            AGENDAR
          </Link>

        </div>
      </header>


      {/* =========================
          HERO
      ========================= */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-24">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(201,138,138,0.12),transparent_35%)]" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2">

          <div className="relative z-10">

            <p className="mb-6 text-xs tracking-[0.4em] text-[#C98A8A]">
              KAREN SALLA DESIGNER
            </p>

            <h1 className="max-w-3xl text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
              Beleza que
              <br />
              <span className="italic text-[#C98A8A]">
                transforma
              </span>
              <br />
              momentos.
            </h1>

            <div className="mt-8 max-w-xl border-l border-[#C98A8A]/50 pl-5">
              <p className="text-lg font-light leading-relaxed text-white/75">
                Há mais de 20 anos, tenho o privilégio de trabalhar com aquilo
                que amo.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/agendar"
                className="rounded-full bg-[#C98A8A] px-7 py-4 text-sm font-medium tracking-wide text-black transition hover:bg-[#E7B5B5]"
              >
                Agendar meu horário
              </Link>

              <Link
                href="/servicos"
                className="rounded-full border border-white/25 px-7 py-4 text-sm tracking-wide text-white transition hover:border-[#C98A8A] hover:text-[#C98A8A]"
              >
                Conheça os serviços
              </Link>

            </div>

          </div>


          {/* FOTO PRINCIPAL DA KAREN */}
          <div className="relative mx-auto h-[560px] w-full max-w-md overflow-hidden rounded-t-[220px] border border-[#C98A8A]/30">

            <Image
              src="/imagens/karen cabelo principal.jpeg"
              alt="Trabalho de Karen Salla"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          </div>

        </div>
      </section>


      {/* =========================
          FRASE DE IMPACTO
      ========================= */}
      <section className="border-y border-white/10 bg-[#0b0b0b] px-6 py-24">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs tracking-[0.4em] text-[#C98A8A]">
            MAIS DO QUE BELEZA
          </p>

          <h2 className="mt-7 text-3xl font-light leading-relaxed md:text-5xl">
            Ser cabeleireira vai muito além de
            <span className="italic text-[#C98A8A]">
              {" "}transformar cabelos.
            </span>
          </h2>

        </div>

      </section>


      {/* =========================
          SOBRE
      ========================= */}
      <section id="sobre" className="px-6 py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          {/* FOTO */}
          <div className="relative h-[500px] overflow-hidden rounded-[180px_180px_0_0] border border-[#C98A8A]/30">

            <Image
              src="/imagens/karen cabelo 1.jpeg"
              alt="Trabalho realizado por Karen Salla"
              fill
              className="object-cover"
            />

          </div>


          <div>

            <p className="text-xs tracking-[0.4em] text-[#C98A8A]">
              SOBRE A KAREN
            </p>

            <h2 className="mt-5 text-4xl font-light md:text-5xl">
              Prazer,
              <br />
              <span className="italic text-[#C98A8A]">
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
              className="mt-8 inline-flex items-center text-sm tracking-wide text-[#C98A8A] transition hover:text-white"
            >
              Conheça minha história
              <span className="ml-3 text-lg">
                →
              </span>
            </Link>

          </div>

        </div>
      </section>


      {/* =========================
          SERVIÇOS
      ========================= */}
      <section className="bg-[#0b0b0b] px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <p className="text-xs tracking-[0.4em] text-[#C98A8A]">
                SERVIÇOS
              </p>

              <h2 className="mt-5 text-4xl font-light md:text-5xl">
                Cuidados pensados
                <br />
                <span className="italic text-[#C98A8A]">
                  para você.
                </span>
              </h2>

            </div>

            <Link
              href="/servicos"
              className="text-sm tracking-wide text-white/60 transition hover:text-[#C98A8A]"
            >
              Ver todos os serviços →
            </Link>

          </div>


          {/* 3 CATEGORIAS */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">

            {/* CABELO */}
            <Link
              href="/servicos"
              className="group overflow-hidden border border-white/10 bg-black"
            >

              <div className="relative h-[420px] overflow-hidden">

                <Image
                  src="/imagens/karen cabelo principal.jpeg"
                  alt="Cabelo - Karen Salla Designer"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8">

                  <p className="text-xs tracking-[0.3em] text-[#E7B5B5]">
                    01
                  </p>

                  <h3 className="mt-3 text-3xl font-light">
                    Cabelo
                  </h3>

                  <p className="mt-3 text-sm text-white/60">
                    Cortes, coloração, mechas e cuidados para os fios.
                  </p>

                  <span className="mt-5 block text-sm text-[#C98A8A]">
                    Conhecer →
                  </span>

                </div>

              </div>

            </Link>


            {/* MAQUIAGEM */}
            <Link
              href="/servicos"
              className="group overflow-hidden border border-white/10 bg-black"
            >

              <div className="relative h-[420px] overflow-hidden">

                <Image
                  src="/imagens/karen maquiagem principal.jpeg"
                  alt="Maquiagem - Karen Salla Designer"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8">

                  <p className="text-xs tracking-[0.3em] text-[#E7B5B5]">
                    02
                  </p>

                  <h3 className="mt-3 text-3xl font-light">
                    Maquiagem
                  </h3>

                  <p className="mt-3 text-sm text-white/60">
                    Produções pensadas para valorizar sua beleza.
                  </p>

                  <span className="mt-5 block text-sm text-[#C98A8A]">
                    Conhecer →
                  </span>

                </div>

              </div>

            </Link>


            {/* SOBRANCELHAS */}
            <Link
              href="/servicos"
              className="group overflow-hidden border border-white/10 bg-black"
            >

              <div className="relative h-[420px] overflow-hidden">

                <Image
                  src="/imagens/karen sobrancelhas principal.jpeg"
                  alt="Sobrancelhas - Karen Salla Designer"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8">

                  <p className="text-xs tracking-[0.3em] text-[#E7B5B5]">
                    03
                  </p>

                  <h3 className="mt-3 text-3xl font-light">
                    Sobrancelhas
                  </h3>

                  <p className="mt-3 text-sm text-white/60">
                    Design e cuidados para valorizar o seu olhar.
                  </p>

                  <span className="mt-5 block text-sm text-[#C98A8A]">
                    Conhecer →
                  </span>

                </div>

              </div>

            </Link>

          </div>

        </div>
      </section>


      {/* =========================
          JEITO KAREN
      ========================= */}
      <section className="px-6 py-32">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-xs tracking-[0.4em] text-[#C98A8A]">
            O JEITO KAREN DE CUIDAR
          </p>

          <blockquote className="mt-10 text-3xl font-light leading-relaxed md:text-5xl">
            “Amo fazer parte da vida de cada cliente,
            proporcionar momentos de cuidado,
            arrancar sorrisos...”
          </blockquote>

        </div>

      </section>


      {/* =========================
          GALERIA / PORTFÓLIO
      ========================= */}
      <section className="bg-[#0b0b0b] px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14">

            <p className="text-xs tracking-[0.4em] text-[#C98A8A]">
              PORTFÓLIO
            </p>

            <h2 className="mt-5 text-4xl font-light md:text-5xl">
              Um pouco do
              <span className="italic text-[#C98A8A]">
                {" "}meu trabalho.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/45">
              Alguns dos trabalhos realizados ao longo dessa trajetória.
            </p>

          </div>


          {/* GALERIA */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

            {/* FOTO GRANDE */}
            <div className="relative col-span-2 row-span-2 h-[620px] overflow-hidden">
              <Image
                src="/imagens/karen cabelo 1.jpeg"
                alt="Trabalho de cabelo"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>


            {/* FOTO 2 */}
            <div className="relative h-[300px] overflow-hidden">
              <Image
                src="/imagens/karen cabelo 2.jpeg"
                alt="Trabalho de cabelo"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>


            {/* FOTO 3 */}
            <div className="relative h-[300px] overflow-hidden">
              <Image
                src="/imagens/karen cabelo 3.jpeg"
                alt="Trabalho de cabelo"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>


            {/* MAQUIAGEM */}
            <div className="relative h-[300px] overflow-hidden">
              <Image
                src="/imagens/karen maquiagem 2.jpeg"
                alt="Trabalho de maquiagem"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>


            {/* MAQUIAGEM 2 */}
            <div className="relative h-[300px] overflow-hidden">
              <Image
                src="/imagens/karen maquiagem principal 1.jpeg"
                alt="Trabalho de maquiagem"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

          </div>


          <div className="mt-10 text-center">

            <Link
              href="/servicos"
              className="inline-flex rounded-full border border-[#C98A8A] px-7 py-4 text-sm tracking-wide text-[#C98A8A] transition hover:bg-[#C98A8A] hover:text-black"
            >
              Conheça todos os serviços
            </Link>

          </div>

        </div>

      </section>


      {/* =========================
          DEPOIMENTOS
      ========================= */}
      <section id="depoimentos" className="px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-xs tracking-[0.4em] text-[#C98A8A]">
              EXPERIÊNCIAS
            </p>

            <h2 className="mt-5 text-4xl font-light md:text-5xl">
              O que minhas
              <span className="italic text-[#C98A8A]">
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
              <span className="text-xs tracking-[0.2em] text-[#C98A8A]">
                DEPOIMENTO
              </span>
            </div>

            <div className="min-h-[220px] border border-white/10 p-8">
              <span className="text-xs tracking-[0.2em] text-[#C98A8A]">
                DEPOIMENTO
              </span>
            </div>

            <div className="min-h-[220px] border border-white/10 p-8">
              <span className="text-xs tracking-[0.2em] text-[#C98A8A]">
                DEPOIMENTO
              </span>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          CTA FINAL
      ========================= */}
      <section className="relative overflow-hidden border-y border-[#C98A8A]/20 bg-[#100d09] px-6 py-32">

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C98A8A]/5 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">

          <p className="text-xs tracking-[0.4em] text-[#C98A8A]">
            SUA VEZ
          </p>

          <h2 className="mt-7 text-4xl font-light leading-tight md:text-6xl">
            Hoje, cada cliente que senta na minha cadeira
            <span className="italic text-[#C98A8A]">
              {" "}faz parte dessa história.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-white/50">
            Seu próximo momento começa aqui.
          </p>

          <Link
            href="/agendar"
            className="mt-10 inline-flex rounded-full bg-[#C98A8A] px-8 py-4 text-sm font-medium tracking-wide text-black transition hover:bg-[#E7B5B5]"
          >
            Agendar meu horário
          </Link>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}
      <footer id="contato" className="border-t border-white/10 bg-black px-6 py-16">

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">

          <div>

            <div className="text-xl font-light tracking-[0.25em] text-[#C98A8A]">
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

            <p className="text-xs tracking-[0.3em] text-[#C98A8A]">
              NAVEGAÇÃO
            </p>

            <div className="mt-6 flex flex-col gap-3 text-sm text-white/50">

              <Link
                href="/"
                className="transition hover:text-[#C98A8A]"
              >
                Início
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

            </div>

          </div>


          <div>

            <p className="text-xs tracking-[0.3em] text-[#C98A8A]">
              AGENDAMENTO
            </p>

            <p className="mt-6 text-sm leading-7 text-white/50">
              Escolha seu serviço e encontre o melhor horário para você.
            </p>

            <Link
              href="/agendar"
              className="mt-5 inline-block text-sm text-[#C98A8A] transition hover:text-white"
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