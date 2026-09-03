import Link from "next/link";

const destaques = [
  {
    titulo: "20+ anos de experiência",
    texto: "Uma trajetória construída com dedicação, aperfeiçoamento e amor pela beleza.",
  },
  {
    titulo: "Atendimento personalizado",
    texto: "Cada cliente é única. O atendimento é pensado para respeitar suas necessidades e desejos.",
  },
  {
    titulo: "Qualidade em cada detalhe",
    texto: "Técnicas e produtos escolhidos com cuidado para valorizar sua beleza.",
  },
  {
    titulo: "Um momento só seu",
    texto: "Um ambiente acolhedor para você desacelerar, cuidar de si e se sentir ainda mais bonita.",
  },
];

const servicosDestaque = [
  {
    nome: "Corte",
    descricao: "Um corte pensado para valorizar seu estilo e sua personalidade.",
    duracao: "2 horas",
    preco: "R$ 80,00",
  },
  {
    nome: "Design de sobrancelha",
    descricao: "Realce seu olhar com um design personalizado.",
    duracao: "1h20",
    preco: "R$ 35,00",
  },
  {
    nome: "Mechas",
    descricao: "Ilumine os cabelos com uma técnica pensada para o seu visual.",
    duracao: "4 horas",
    preco: "A partir de R$ 400,00",
  },
  {
    nome: "Limpeza de pele",
    descricao: "Um cuidado especial para renovar e deixar sua pele mais saudável.",
    duracao: "1h45",
    preco: "R$ 90,00",
  },
];

const depoimentos = [
  {
    texto:
      "A Karen é extremamente cuidadosa e caprichosa. Saio de lá sempre me sentindo maravilhosa.",
    nome: "Cliente",
  },
  {
    texto:
      "Um atendimento maravilhoso, feito com muito carinho e atenção em cada detalhe.",
    nome: "Cliente",
  },
  {
    texto:
      "A experiência e o cuidado da Karen fazem toda a diferença. Super recomendo!",
    nome: "Cliente",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* MENU */}
      <header className="fixed top-0 z-50 w-full border-b border-[#b76e79]/30 bg-black/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link
            href="/"
            className="text-lg font-semibold tracking-[0.22em] text-[#d8a0a8] md:text-xl"
          >
            KAREN SALLA DESIGNER
          </Link>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a
              href="#inicio"
              className="transition hover:text-[#d8a0a8]"
            >
              Início
            </a>

            <Link
              href="/servicos"
              className="transition hover:text-[#d8a0a8]"
            >
              Serviços
            </Link>

            <a
              href="#sobre"
              className="transition hover:text-[#d8a0a8]"
            >
              Sobre
            </a>

            <a
              href="#depoimentos"
              className="transition hover:text-[#d8a0a8]"
            >
              Depoimentos
            </a>

            <Link
              href="/agendar"
              className="rounded-full border border-[#d8a0a8] px-5 py-2 text-[#d8a0a8] transition hover:bg-[#d8a0a8] hover:text-black"
            >
              Agendar
            </Link>
          </nav>

          <Link
            href="/agendar"
            className="rounded-full border border-[#d8a0a8] px-5 py-2 text-sm text-[#d8a0a8] transition hover:bg-[#d8a0a8] hover:text-black md:hidden"
          >
            Agendar
          </Link>

        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="flex min-h-screen items-center px-6 pb-16 pt-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#d8a0a8]">
              Studio Karen Salla
            </p>

            <h1 className="text-5xl font-light leading-[1.08] md:text-7xl">
              Beleza,
              <span className="block font-medium text-[#d8a0a8]">
                experiência
              </span>
              e cuidado.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
              Há mais de 20 anos, Karen Salla transforma beleza em
              autoestima, oferecendo um atendimento personalizado e
              pensado em cada detalhe.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/agendar"
                className="rounded-full bg-[#d8a0a8] px-8 py-4 text-center font-semibold text-black transition hover:scale-105"
              >
                Agendar meu horário
              </Link>

              <a
                href="#sobre"
                className="rounded-full border border-white/20 px-8 py-4 text-center transition hover:border-[#d8a0a8] hover:text-[#d8a0a8]"
              >
                Conheça a Karen
              </a>

            </div>

            <div className="mt-10 flex items-center gap-8 border-t border-white/10 pt-7">

              <div>
                <p className="text-3xl font-light text-[#d8a0a8]">
                  20+
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                  anos de experiência
                </p>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div>
                <p className="text-3xl font-light text-[#d8a0a8]">
                  100%
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                  atendimento personalizado
                </p>
              </div>

            </div>
          </div>

          {/* FOTO DA KAREN */}
          <div className="relative">

            <div className="absolute -inset-4 rounded-[2rem] border border-[#d8a0a8]/10" />

            <div className="relative flex h-[560px] items-center justify-center overflow-hidden rounded-[2rem] border border-[#d8a0a8]/30 bg-zinc-950">

              <div className="text-center">

                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-[#d8a0a8]/40 text-[#d8a0a8]">
                  KS
                </div>

                <p className="text-sm uppercase tracking-[0.3em] text-zinc-600">
                  Foto profissional da Karen
                </p>

                <p className="mt-2 text-xs text-zinc-700">
                  Espaço reservado para sua foto
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FRASE */}
      <section className="border-y border-white/10 bg-zinc-950 px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-[#d8a0a8]">
            Uma experiência de beleza
          </p>

          <h2 className="mt-5 text-3xl font-light leading-relaxed md:text-5xl">
            “Mais do que um procedimento,
            <span className="text-[#d8a0a8]">
              {" "}um momento para você.
            </span>
            ”
          </h2>

        </div>

      </section>

      {/* SOBRE */}
      <section id="sobre" className="px-6 py-28">

        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">

          <div className="flex h-[500px] items-center justify-center rounded-[2rem] border border-[#d8a0a8]/30 bg-zinc-950">

            <div className="text-center">

              <p className="text-sm uppercase tracking-[0.3em] text-zinc-600">
                Foto da Karen
              </p>

              <p className="mt-2 text-xs text-zinc-700">
                Espaço reservado para uma foto pessoal
              </p>

            </div>

          </div>

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-[#d8a0a8]">
              Prazer, eu sou a Karen
            </p>

            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Beleza construída com experiência.
            </h2>

            <p className="mt-7 leading-8 text-zinc-400">
              Há mais de 20 anos trabalho com beleza, sempre buscando
              aprimorar meus conhecimentos e acompanhar as novidades
              do mercado.
            </p>

            <p className="mt-5 leading-8 text-zinc-400">
              Para mim, cada cliente merece mais do que um procedimento:
              merece ser cuidada, ouvida e sair se sentindo ainda mais
              bonita.
            </p>

            <p className="mt-5 leading-8 text-zinc-400">
              Cada atendimento é realizado com carinho, atenção e
              dedicação, respeitando o estilo e as necessidades de cada
              pessoa.
            </p>

            <Link
              href="/agendar"
              className="mt-8 inline-block rounded-full border border-[#d8a0a8] px-7 py-3 text-[#d8a0a8] transition hover:bg-[#d8a0a8] hover:text-black"
            >
              Quero agendar
            </Link>

          </div>

        </div>

      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-zinc-950 px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-[#d8a0a8]">
              Por que escolher o Studio?
            </p>

            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Cuidado que faz diferença
            </h2>

          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {destaques.map((item, index) => (
              <div
                key={item.titulo}
                className="rounded-2xl border border-white/10 bg-black p-7 transition hover:-translate-y-1 hover:border-[#d8a0a8]/50"
              >

                <span className="text-sm text-[#d8a0a8]">
                  0{index + 1}
                </span>

                <h3 className="mt-6 text-xl font-medium">
                  {item.titulo}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-500">
                  {item.texto}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* GALERIA */}
      <section className="px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12">

            <p className="text-sm uppercase tracking-[0.3em] text-[#d8a0a8]">
              Momentos & resultados
            </p>

            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Conheça nosso trabalho
            </h2>

            <p className="mt-4 max-w-xl text-zinc-500">
              Um pouco do ambiente, dos detalhes e dos resultados
              realizados no Studio Karen Salla.
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Foto do Studio",
              "Cabelos",
              "Sobrancelhas",
              "Beleza & detalhes",
            ].map((foto, index) => (
              <div
                key={foto}
                className={`flex items-center justify-center overflow-hidden rounded-2xl border border-[#d8a0a8]/20 bg-zinc-950 ${
                  index === 0
                    ? "h-80 lg:col-span-2"
                    : "h-80"
                }`}
              >
                <div className="text-center">

                  <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
                    {foto}
                  </p>

                  <p className="mt-2 text-xs text-zinc-700">
                    Espaço para foto real
                  </p>

                </div>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* SERVIÇOS */}
      <section className="bg-zinc-950 px-6 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-[#d8a0a8]">
              Serviços
            </p>

            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              Cuidados pensados para você
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-zinc-500">
              Escolha seu serviço e descubra uma experiência de beleza
              personalizada.
            </p>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {servicosDestaque.map((servico) => (
              <div
                key={servico.nome}
                className="rounded-2xl border border-white/10 bg-black p-6 transition hover:-translate-y-1 hover:border-[#d8a0a8]/50"
              >

                <div className="mb-6 flex h-32 items-center justify-center rounded-xl bg-zinc-900">
                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-700">
                    Foto
                  </span>
                </div>

                <h3 className="text-xl font-medium">
                  {servico.nome}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-zinc-500">
                  {servico.descricao}
                </p>

                <p className="mt-4 text-xs text-zinc-600">
                  {servico.duracao}
                </p>

                <p className="mt-2 text-lg font-semibold text-[#d8a0a8]">
                  {servico.preco}
                </p>

              </div>
            ))}

          </div>

          <div className="mt-12 text-center">

            <Link
              href="/servicos"
              className="inline-block rounded-full border border-[#d8a0a8] px-9 py-3 text-[#d8a0a8] transition hover:bg-[#d8a0a8] hover:text-black"
            >
              Ver todos os serviços
            </Link>

          </div>

        </div>

      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="px-6 py-28">

        <div className="mx-auto max-w-6xl">

          <div className="mb-14 text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-[#d8a0a8]">
              Experiências reais
            </p>

            <h2 className="mt-4 text-4xl font-light md:text-5xl">
              O que minhas clientes dizem
            </h2>

          </div>

          <div className="grid gap-5 md:grid-cols-3">

            {depoimentos.map((depoimento) => (
              <div
                key={depoimento.texto}
                className="rounded-2xl border border-white/10 bg-zinc-950 p-7"
              >

                <div className="text-xl tracking-[0.2em] text-[#d8a0a8]">
                  ★★★★★
                </div>

                <p className="mt-6 leading-7 text-zinc-400">
                  “{depoimento.texto}”
                </p>

                <p className="mt-6 text-sm text-zinc-600">
                  — {depoimento.nome}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#d8a0a8] px-6 py-24 text-black">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm uppercase tracking-[0.3em]">
            Seu momento começa aqui
          </p>

          <h2 className="mt-5 text-4xl font-semibold md:text-6xl">
            Reserve um tempo para você.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8">
            Escolha seu serviço, encontre o melhor horário e venha
            viver uma experiência de beleza, cuidado e bem-estar.
          </p>

          <Link
            href="/agendar"
            className="mt-8 inline-block rounded-full bg-black px-10 py-4 font-medium text-white transition hover:scale-105"
          >
            Agendar meu horário
          </Link>

        </div>

      </section>

      {/* CONTATO */}
      <section className="px-6 py-24">

        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#d8a0a8]">
              Studio
            </p>
            <h3 className="mt-3 text-2xl font-light">
              Karen Salla Designer
            </h3>
            <p className="mt-4 text-sm leading-6 text-zinc-500">
              Beleza, experiência e cuidado em cada detalhe.
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#d8a0a8]">
              Localização
            </p>
            <p className="mt-4 text-zinc-400">
              Limeira – SP
            </p>
            <p className="mt-2 text-sm text-zinc-600">
              Atendimento com hora marcada
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#d8a0a8]">
              Fale comigo
            </p>

            <div className="mt-4 flex flex-col gap-3">

              <a
                href="#"
                className="text-zinc-400 transition hover:text-[#d8a0a8]"
              >
                WhatsApp
              </a>

              <a
                href="#"
                className="text-zinc-400 transition hover:text-[#d8a0a8]"
              >
                Instagram
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href="#"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#d8a0a8] text-black shadow-lg transition hover:scale-110"
      >
        <span className="text-xl">WA</span>
      </a>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">

          <p className="text-sm tracking-[0.15em] text-[#d8a0a8]">
            KAREN SALLA DESIGNER
          </p>

          <p className="text-xs text-zinc-600">
            © 2026 Karen Salla Designer. Todos os direitos reservados.
          </p>

        </div>

      </footer>

    </main>
  );
}