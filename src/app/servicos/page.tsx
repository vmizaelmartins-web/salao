import Link from "next/link";

const categorias = [
  {
    titulo: "Cabelos",
    servicos: [
      ["Corte", "2 horas", "R$ 80,00"],
      ["Corte franja", "15 minutos", "R$ 10,00"],
      ["Escova", "2 horas", "R$ 80,00"],
      ["Escova modelada", "A confirmar", "R$ 80,00"],
      ["Hidratação / Nutrição", "2h45", "R$ 80,00"],
      ["Reconstrução", "1h50", "R$ 100,00"],
      ["Coloração", "2h30", "R$ 110,00"],
      ["Coloração + Corte", "1h50", "R$ 170,00"],
      ["Aplicação coloração + escova", "A confirmar", "R$ 80,00"],
      ["Progressiva / Selagem — Curto", "A confirmar", "R$ 180,00"],
      ["Progressiva / Selagem — Médio", "3h30", "R$ 220,00"],
      ["Progressiva / Selagem — Longo", "3h50", "R$ 280,00"],
      ["Botox — Curto", "2 horas", "R$ 130,00"],
      ["Botox — Médio", "2h30", "R$ 200,00"],
      ["Botox — Longo", "3 horas", "R$ 250,00"],
      ["Mechas", "4 horas", "R$ 400,00"],
      ["Mechas Contorno", "3h30", "R$ 290,00"],
      ["Luzes na touca", "A confirmar", "R$ 400,00"],
      ["Teste de mechas", "A confirmar", "Grátis"],
      ["Penteado", "A confirmar", "R$ 130,00"],
    ],
  },
  {
    titulo: "Sobrancelhas e Estética",
    servicos: [
      ["Design de sobrancelha", "1h20", "R$ 35,00"],
      ["Design de sobrancelha com henna", "1h40", "R$ 45,00"],
      ["Limpeza de pele", "1h45", "R$ 90,00"],
      ["Buço", "20 minutos", "R$ 15,00"],
    ],
  },
  {
    titulo: "Maquiagem",
    servicos: [
      ["Maquiagem", "1h45", "R$ 150,00"],
    ],
  },
];

export default function Servicos() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="border-b border-[#d8a0a8]/30 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-xl font-semibold tracking-[0.2em] text-[#d8a0a8]"
          >
            KAREN SALLA DESIGNER
          </Link>

          <nav className="flex items-center gap-8 text-sm">
            <Link
              href="/"
              className="transition hover:text-[#d8a0a8]"
            >
              Início
            </Link>

            <Link
              href="/servicos"
              className="text-[#d8a0a8]"
            >
              Serviços
            </Link>

            <Link
              href="/#sobre"
              className="transition hover:text-[#d8a0a8]"
            >
              Sobre
            </Link>

            <Link
              href="/agendar"
              className="rounded-full border border-[#d8a0a8] px-5 py-2 text-[#d8a0a8] transition hover:bg-[#d8a0a8] hover:text-black"
            >
              Agendar
            </Link>
          </nav>
        </div>
      </header>

      {/* TÍTULO */}
      <section className="px-6 py-20 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#d8a0a8]">
          Serviços
        </p>

        <h1 className="mt-3 text-5xl font-light md:text-6xl">
          Escolha seu cuidado
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-gray-400">
          Confira todos os serviços disponíveis, seus valores e o tempo
          aproximado de atendimento.
        </p>
      </section>

      {/* LISTA DE SERVIÇOS */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl space-y-16">
          {categorias.map((categoria) => (
            <div key={categoria.titulo}>
              <h2 className="mb-8 text-3xl font-light text-[#d8a0a8]">
                {categoria.titulo}
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {categoria.servicos.map(
                  ([nome, duracao, preco]) => (
                    <div
                      key={nome}
                      className="rounded-2xl border border-[#d8a0a8]/20 bg-zinc-950 p-6 transition hover:border-[#d8a0a8]/60"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {nome}
                          </h3>

                          <p className="mt-2 text-sm text-gray-500">
                            Duração: {duracao}
                          </p>
                        </div>

                        <p className="whitespace-nowrap text-lg font-semibold text-[#d8a0a8]">
                          {preco}
                        </p>
                      </div>

                      <Link
                        href="/agendar"
                        className="mt-5 block rounded-full border border-[#d8a0a8] py-3 text-center text-sm font-semibold text-[#d8a0a8] transition hover:bg-[#d8a0a8] hover:text-black"
                      >
                        Agendar este serviço
                      </Link>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#d8a0a8]/30 bg-zinc-950 px-6 py-16 text-center">
          <h2 className="text-4xl font-light">
            Já escolheu seus serviços?
          </h2>

          <p className="mt-5 text-gray-400">
            Você poderá selecionar mais de um serviço no agendamento.
          </p>

          <Link
            href="/agendar"
            className="mt-8 inline-block rounded-full bg-[#d8a0a8] px-10 py-4 font-semibold text-black transition hover:scale-105 hover:bg-[#e5b2ba]"
          >
            Ir para agendamento
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#d8a0a8]/20 px-6 py-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm text-gray-500">
            © 2026 Karen Salla Designer. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}