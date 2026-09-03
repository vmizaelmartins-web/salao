```tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* =========================
          NAVBAR
      ========================== */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <Link
            href="/"
            className="text-lg tracking-[0.18em] text-[#d8a0a8]"
          >
            KAREN SALLA
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm text-white transition hover:text-[#d8a0a8]"
            >
              Início
            </Link>

            <a
              href="#sobre"
              className="text-sm text-white transition hover:text-[#d8a0a8]"
            >
              Sobre a Karen
            </a>

            <Link
              href="/servicos"
              className="text-sm text-white transition hover:text-[#d8a0a8]"
            >
              Serviços
            </Link>

            <Link
              href="/agendamento"
              className="text-sm text-white transition hover:text-[#d8a0a8]"
            >
              Agendamento
            </Link>

            <a
              href="#contato"
              className="text-sm text-white transition hover:text-[#d8a0a8]"
            >
              Contato
            </a>
          </nav>

          <Link
            href="/agendamento"
            className="rounded-full border border-[#d8a0a8] px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-[#d8a0a8] transition hover:bg-[#d8a0a8] hover:text-black"
          >
            Agendar
          </Link>

        </div>
      </header>


      {/* =========================
          HERO
      ========================== */}
      <section className="relative flex min-h-screen items-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-20 pt-32 md:grid-cols-2">

          <div>

            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#d8a0a8]">
              Studio Karen Salla Designer
            </p>

            <h1 className="max-w-3xl text-5xl font-light leading-tight md:text-7xl">
              Beleza que faz parte
              <span className="block italic text-[#d8a0a8]">
                da sua história.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400">
              “Há mais de 20 anos, tenho o privilégio de trabalhar
              com aquilo que amo.”
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/agendamento"
                className="rounded-full bg-[#d8a0a8] px-7 py-3.5 text-sm font-medium text-black transition hover:bg-[#e7b8bf]"
              >
                Agendar meu horário
              </Link>

              <Link
                href="/servicos"
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm text-white transition hover:border-[#d8a0a8] hover:text-[#d8a0a8]"
              >
                Conheça os serviços
              </Link>

            </div>

          </div>


          {/* Espaço reservado para foto real */}
          <div className="relative mx-auto w-full max-w-lg">

            <div className="aspect-[4/5] rounded-[2rem] border border-[#d8a0a8]/20 bg-zinc-950">

              <div className="flex h-full items-center justify-center p-8 text-center">

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#d8a0a8]/50">
                    Foto da Karen
                  </p>

                  <p className="mt-3 text-sm text-zinc-700">
                    Espaço reservado para foto real
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          FRASE DE IMPACTO
      ========================== */}
      <section className="border-y border-white/10 bg-zinc-950 px-6 py-28">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs uppercase tracking-[0.35em] text-[#d8a0a8]">
            Muito além da beleza
          </p>

          <h2 className="mt-7 text-4xl font-light leading-tight md:text-6xl">
            “Ser cabeleireira vai muito além de
            <span className="text-[#d8a0a8]"> transformar cabelos.”</span>
          </h2>

        </div>

      </section>


      {/* =========================
          SOBRE A KAREN
      ========================== */}
      <section id="sobre" className="bg-black px-6 py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          {/* Foto reservada */}
          <div className="order-2 aspect-[4/5] rounded-[2rem] border border-[#d8a0a8]/20 bg-zinc-950 md:order-1">

            <div className="flex h-full items-center justify-center p-8 text-center">

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#d8a0a8]/50">
                  Foto
                </p>

                <p className="mt-3 text-sm text-zinc-700">
                  Espaço reservado para foto real
                </p>
              </div>

            </div>

          </div>


          <div className="order-1 md:order-2">

            <p className="text-sm uppercase tracking-[0.3em] text-[#d8a0a8]">
              Prazer, eu sou a Karen
            </p>

            <h2 className="mt-5 text-4xl font-light md:text-5xl">
              Minha história com a beleza
              <span className="block italic text-[#d8a0a8]">
                começou ainda na infância.
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-zinc-400">

              <p>
                “Eu amava acompanhar minha mãe ao cabeleireiro
                e ficava encantada observando cada detalhe.”
              </p>

              <p>
                “O cuidado, os movimentos, o ambiente e aquele
                cheirinho dos produtos despertavam em mim uma paixão.”
              </p>

              <p>
                Com o passar dos anos, essa paixão se transformou
                em profissão e em uma história construída ao lado
                de tantas clientes.
              </p>

            </div>

            <a
              href="#historia"
              className="mt-8 inline-block text-sm uppercase tracking-[0.2em] text-[#d8a0a8] transition hover:text-white"
            >
              Conheça minha história →
            </a>

          </div>

        </div>

      </section>


      {/* =========================
          SERVIÇOS
      ========================== */}
      <section className="bg-zinc-950 px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-[#d8a0a8]">
                Meu trabalho
              </p>

              <h2 className="mt-4 text-4xl font-light md:text-5xl">
                Tudo para você se sentir
                <span className="block italic text-[#d8a0a8]">
                  ainda mais você.
                </span>
              </h2>

            </div>

            <Link
              href="/servicos"
              className="text-sm uppercase tracking-[0.2em] text-[#d8a0a8] transition hover:text-white"
            >
              Ver todos os serviços →
            </Link>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-black p-8 transition hover:border-[#d8a0a8]/40">

              <span className="text-3xl text-[#d8a0a8]">✂</span>

              <h3 className="mt-7 text-2xl font-light">
                Cabelos
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                Cortes, coloração, mechas, tratamentos,
                escova, penteados e muito mais.
              </p>

              <Link
                href="/servicos"
                className="mt-7 inline-block text-xs uppercase tracking-[0.2em] text-[#d8a0a8]"
              >
                Conhecer →
              </Link>

            </div>


            <div className="rounded-3xl border border-white/10 bg-black p-8 transition hover:border-[#d8a0a8]/40">

              <span className="text-3xl text-[#d8a0a8]">♡</span>

              <h3 className="mt-7 text-2xl font-light">
                Sobrancelhas & Olhar
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                Design de sobrancelhas, henna e
                extensão de cílios.
              </p>

              <Link
                href="/servicos"
                className="mt-7 inline-block text-xs uppercase tracking-[0.2em] text-[#d8a0a8]"
              >
                Conhecer →
              </Link>

            </div>


            <div className="rounded-3xl border border-white/10 bg-black p-8 transition hover:border-[#d8a0a8]/40">

              <span className="text-3xl text-[#d8a0a8]">✦</span>

              <h3 className="mt-7 text-2xl font-light">
                Beleza & Bem-estar
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                Limpeza de pele, maquiagem, massagens
                e outros cuidados.
              </p>

              <Link
                href="/servicos"
                className="mt-7 inline-block text-xs uppercase tracking-[0.2em] text-[#d8a0a8]"
              >
                Conhecer →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          JEITO KAREN
      ========================== */}
      <section className="bg-black px-6 py-28">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-[#d8a0a8]">
            O jeito Karen de cuidar
          </p>

          <h2 className="mt-6 text-4xl font-light leading-tight md:text-6xl">
            “Amo fazer parte da vida de cada cliente,
            proporcionar momentos de cuidado,
            <span className="text-[#d8a0a8]">
              {" "}arrancar sorrisos...”
            </span>
          </h2>

        </div>

      </section>


      {/* =========================
          GALERIA
      ========================== */}
      <section className="bg-zinc-950 px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-[#d8a0a8]">
              Conheça o Studio
            </p>

            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Um espaço para cuidar de você.
            </h2>

          </div>


          <div className="mt-14 grid gap-4 md:grid-cols-3">

            <div className="min-h-[420px] rounded-3xl border border-[#d8a0a8]/15 bg-black md:col-span-2">
              <div className="flex h-full min-h-[420px] items-center justify-center text-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#d8a0a8]/50">
                    Foto do Studio
                  </p>
                  <p className="mt-3 text-sm text-zinc-700">
                    Espaço reservado para foto real
                  </p>
                </div>
              </div>
            </div>


            <div className="min-h-[420px] rounded-3xl border border-[#d8a0a8]/15 bg-black">
              <div className="flex h-full min-h-[420px] items-center justify-center text-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#d8a0a8]/50">
                    Foto
                  </p>
                  <p className="mt-3 text-sm text-zinc-700">
                    Espaço reservado para foto real
                  </p>
                </div>
              </div>
            </div>

          </div>


          <div className="mt-4 grid gap-4 md:grid-cols-3">

            {[1, 2, 3].map((numero) => (

              <div
                key={numero}
                className="min-h-[260px] rounded-3xl border border-[#d8a0a8]/15 bg-black"
              >

                <div className="flex h-full min-h-[260px] items-center justify-center text-center">

                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#d8a0a8]/50">
                      Foto {numero}
                    </p>

                    <p className="mt-3 text-sm text-zinc-700">
                      Espaço reservado para foto real
                    </p>
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          DEPOIMENTOS
      ========================== */}
      <section id="depoimentos" className="bg-black px-6 py-28">

        <div className="mx-auto max-w-6xl">

          <div className="mb-14 text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-[#d8a0a8]">
              Experiências reais
            </p>

            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              O que minhas clientes dizem
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-zinc-500">
              Em breve, experiências reais de quem já viveu
              um momento no Studio Karen Salla.
            </p>

          </div>


          <div className="grid gap-5 md:grid-cols-3">

            {[1, 2, 3].map((numero) => (

              <div
                key={numero}
                className="flex min-h-[230px] items-center justify-center rounded-2xl border border-dashed border-[#d8a0a8]/30 bg-zinc-950 p-7 text-center"
              >

                <div>

                  <div className="text-xl tracking-[0.2em] text-[#d8a0a8]/30">
                    ★★★★★
                  </div>

                  <p className="mt-5 text-sm text-zinc-700">
                    Espaço reservado
                  </p>

                  <p className="mt-2 text-xs text-zinc-800">
                    Depoimento real será adicionado aqui
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          CTA FINAL
      ========================== */}
      <section className="border-t border-white/10 bg-zinc-950 px-6 py-32">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-[#d8a0a8]">
            Uma história construída juntas
          </p>

          <h2 className="mt-6 text-4xl font-light leading-tight md:text-6xl">
            “Hoje, cada cliente que senta na minha cadeira
            <span className="text-[#d8a0a8]">
              {" "}faz parte dessa história.”
            </span>
          </h2>

          <p className="mt-7 text-lg text-zinc-500">
            Seu próximo momento começa aqui.
          </p>

          <Link
            href="/agendamento"
            className="mt-9 inline-flex rounded-full bg-[#d8a0a8] px-8 py-4 text-sm font-medium text-black transition hover:bg-[#e7b8bf]"
          >
            Agendar meu horário
          </Link>

        </div>

      </section>


      {/* =========================
          CONTATO / FOOTER
      ========================== */}
      <footer id="contato" className="border-t border-white/10 bg-black px-6 py-12">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">

          <div>

            <p className="text-lg tracking-[0.18em] text-[#d8a0a8]">
              KAREN SALLA DESIGNER
            </p>

            <p className="mt-2 text-sm text-zinc-600">
              Beleza, cuidado e histórias que continuam.
            </p>

          </div>


          <div className="flex flex-wrap gap-6">

            <Link
              href="/servicos"
              className="text-sm text-zinc-500 transition hover:text-[#d8a0a8]"
            >
              Serviços
            </Link>

            <Link
              href="/agendamento"
              className="text-sm text-zinc-500 transition hover:text-[#d8a0a8]"
            >
              Agendamento
            </Link>

            <a
              href="#sobre"
              className="text-sm text-zinc-500 transition hover:text-[#d8a0a8]"
            >
              Sobre
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}
```
