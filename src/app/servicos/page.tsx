import Image from "next/image";
import Link from "next/link";

const categorias = [
  {
    numero: "01",
    titulo: "Cabelos",
    frase: "Cuidado, transformação e personalidade em cada detalhe.",
    imagem: "/imagens/karen cabelo 1.jpeg",
    servicos: [
      { nome: "Corte", tempo: "2h", preco: "R$ 80" },
      { nome: "Corte franja", tempo: "15min", preco: "R$ 10" },
      { nome: "Escova", tempo: "2h", preco: "R$ 80" },
      { nome: "Escova modelada", tempo: "A confirmar", preco: "R$ 80" },
      { nome: "Hidratação / Nutrição", tempo: "2h45", preco: "R$ 80" },
      { nome: "Reconstrução", tempo: "1h50", preco: "R$ 100" },
      { nome: "Coloração", tempo: "2h30", preco: "R$ 110" },
      { nome: "Coloração + Corte", tempo: "1h50", preco: "R$ 170" },
      {
        nome: "Aplicação coloração + escova",
        tempo: "A confirmar",
        preco: "R$ 80",
      },
      {
        nome: "Progressiva / Selagem — Curto",
        tempo: "A confirmar",
        preco: "R$ 180",
      },
      {
        nome: "Progressiva / Selagem — Médio",
        tempo: "3h30",
        preco: "R$ 220",
      },
      {
        nome: "Progressiva / Selagem — Longo",
        tempo: "3h50",
        preco: "R$ 280",
      },
      { nome: "Botox — Curto", tempo: "2h", preco: "R$ 130" },
      { nome: "Botox — Médio", tempo: "2h30", preco: "R$ 200" },
      { nome: "Botox — Longo", tempo: "3h", preco: "R$ 250" },
      { nome: "Mechas", tempo: "4h", preco: "R$ 400" },
      { nome: "Mechas Contorno", tempo: "3h30", preco: "R$ 290" },
      {
        nome: "Luzes na touca",
        tempo: "A confirmar",
        preco: "R$ 400",
      },
      {
        nome: "Teste de mechas",
        tempo: "A confirmar",
        preco: "Grátis",
      },
      { nome: "Penteado", tempo: "A confirmar", preco: "R$ 130" },
    ],
  },
  {
    numero: "02",
    titulo: "Sobrancelhas & Estética",
    frase: "Pequenos detalhes que fazem toda a diferença.",
    imagem: "/imagens/karen sobrancelhas principal.jpeg",
    servicos: [
      {
        nome: "Design de sobrancelha",
        tempo: "1h20",
        preco: "R$ 35",
      },
      {
        nome: "Design com henna",
        tempo: "1h40",
        preco: "R$ 45",
      },
      {
        nome: "Limpeza de pele",
        tempo: "1h45",
        preco: "R$ 90",
      },
      {
        nome: "Buço",
        tempo: "20min",
        preco: "R$ 15",
      },
    ],
  },
  {
    numero: "03",
    titulo: "Maquiagem",
    frase: "Realçando sua beleza para momentos que merecem ser lembrados.",
    imagem: "/imagens/karen maquiagem 2.jpeg",
    servicos: [
      {
        nome: "Maquiagem",
        tempo: "1h45",
        preco: "R$ 150",
      },
    ],
  },
];

export default function Servicos() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-[#C98A8A]/20 bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="group">
            <div className="text-xl font-light tracking-[0.25em] text-[#C98A8A]">
              KAREN SALLA
            </div>

            <div className="mt-1 text-[9px] tracking-[0.35em] text-white/60">
              STUDIO
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
              href="/#sobre"
              className="text-sm text-white/80 transition hover:text-[#C98A8A]"
            >
              Sobre
            </Link>

            <Link
              href="/servicos"
              className="text-sm text-[#C98A8A]"
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
              href="/#contato"
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

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(201,138,138,0.10),transparent_35%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-white/40 transition hover:text-[#C98A8A]"
          >
            ← VOLTAR PARA INÍCIO
          </Link>

          <p className="text-xs tracking-[0.4em] text-[#C98A8A]">
            KAREN SALLA STUDIO
          </p>

          <h1 className="mt-6 text-5xl font-light leading-tight md:text-7xl">
            Serviços
            <br />
            <span className="italic text-[#C98A8A]">
              para você.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/55">
            Cada atendimento é pensado para respeitar sua beleza,
            sua personalidade e o resultado que você deseja.
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl space-y-32">
          {categorias.map((categoria, index) => (
            <section key={categoria.titulo}>
              {/* CABEÇALHO DA CATEGORIA */}
              <div
                className={`grid items-center gap-12 md:grid-cols-2 ${
                  index % 2 !== 0
                    ? "md:[&>*:first-child]:order-2"
                    : ""
                }`}
              >
                <div>
                  <p className="text-xs tracking-[0.4em] text-[#C98A8A]">
                    {categoria.numero}
                  </p>

                  <h2 className="mt-5 text-4xl font-light md:text-6xl">
                    {categoria.titulo}
                  </h2>

                  <p className="mt-6 max-w-lg text-base leading-8 text-white/55">
                    {categoria.frase}
                  </p>

                  <div className="mt-8 h-px w-20 bg-[#C98A8A]/60" />
                </div>

                {/* FOTO DO TRABALHO */}
                <div className="relative h-[360px] overflow-hidden bg-[#15110d] md:h-[430px]">
                  <Image
                    src={categoria.imagem}
                    alt={`Trabalho de ${categoria.titulo} - Karen Salla Studio`}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>

              {/* LISTA DE SERVIÇOS */}
              <div className="mt-12 border-y border-white/10">
                {categoria.servicos.map((servico, servicoIndex) => (
                  <div
                    key={`${categoria.titulo}-${servico.nome}-${servicoIndex}`}
                    className="group flex flex-col gap-4 border-b border-white/10 px-2 py-6 transition last:border-b-0 hover:bg-[#0b0b0b] sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <h3 className="text-base font-light tracking-wide transition group-hover:text-[#C98A8A]">
                        {servico.nome}
                      </h3>

                      <p className="mt-2 text-xs text-white/35">
                        Duração aproximada: {servico.tempo}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-6 sm:justify-end">
                      <span className="text-lg font-light text-[#C98A8A]">
                        {servico.preco}
                      </span>

                      <Link
                        href="/agendar"
                        className="rounded-full border border-white/20 px-5 py-2 text-xs text-white/60 transition hover:border-[#C98A8A] hover:text-[#C98A8A]"
                      >
                        Agendar
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* OBSERVAÇÃO */}
      <section className="border-y border-white/10 bg-[#0b0b0b] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs tracking-[0.4em] text-[#C98A8A]">
            IMPORTANTE
          </p>

          <p className="mt-6 text-sm leading-8 text-white/45">
            Alguns procedimentos podem ter duração e valor alterados
            de acordo com o comprimento, volume e necessidade dos fios.
            Em caso de dúvida, entre em contato para confirmar os
            detalhes antes do atendimento.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#100d09] px-6 py-32">
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C98A8A]/5 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs tracking-[0.4em] text-[#C98A8A]">
            SEU MOMENTO
          </p>

          <h2 className="mt-7 text-4xl font-light leading-tight md:text-6xl">
            Encontrou o serviço
            <br />
            <span className="italic text-[#C98A8A]">
              perfeito para você?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-white/50">
            Escolha seu horário e venha viver seu momento de cuidado.
          </p>

          <Link
            href="/agendar"
            className="mt-10 inline-flex rounded-full bg-[#C98A8A] px-8 py-4 text-sm font-medium tracking-wide text-black transition hover:bg-[#E7B5B5]"
          >
            Agendar meu horário
          </Link>

          <div className="mt-6">
            <Link
              href="/"
              className="text-xs tracking-[0.15em] text-white/40 transition hover:text-[#C98A8A]"
            >
              ← Voltar para a página inicial
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          <div>
            <Link href="/">
              <div className="text-xl font-light tracking-[0.25em] text-[#C98A8A]">
                KAREN SALLA
              </div>

              <p className="mt-2 text-[9px] tracking-[0.35em] text-white/40">
                DESIGNER
              </p>
            </Link>

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
            © {new Date().getFullYear()} Karen Salla Studio.
            Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}