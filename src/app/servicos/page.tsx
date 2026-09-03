import Link from "next/link";

const categorias = [
  {
    titulo: "Cabelos",
    subtitulo: "Cuidados, cortes, tratamentos e transformação.",
    servicos: [
      ["Corte", "2 horas", "R$ 80,00", "Um corte pensado para valorizar seu estilo e sua personalidade."],
      ["Corte franja", "15 minutos", "R$ 10,00", "Ajuste e renovação da franja."],
      ["Escova", "2 horas", "R$ 80,00", "Finalização para deixar os cabelos ainda mais bonitos."],
      ["Escova modelada", "A confirmar", "R$ 80,00", "Modelagem personalizada para a ocasião."],
      ["Hidratação / Nutrição", "2h45", "R$ 80,00", "Tratamento para devolver maciez e vitalidade aos fios."],
      ["Reconstrução", "1h50", "R$ 100,00", "Cuidado direcionado para fios que precisam de força e recuperação."],
      ["Coloração", "2h30", "R$ 110,00", "Coloração realizada de acordo com o resultado desejado."],
      ["Coloração + Corte", "1h50", "R$ 170,00", "Transformação completa para renovar o visual."],
      ["Aplicação coloração + escova", "A confirmar", "R$ 80,00", "Aplicação e finalização dos cabelos."],
      ["Progressiva / Selagem — Curto", "A confirmar", "R$ 180,00", "Tratamento para cabelos curtos."],
      ["Progressiva / Selagem — Médio", "3h30", "R$ 220,00", "Tratamento para cabelos de comprimento médio."],
      ["Progressiva / Selagem — Longo", "3h50", "R$ 280,00", "Tratamento para cabelos longos."],
      ["Botox — Curto", "2 horas", "R$ 130,00", "Tratamento para cabelos curtos."],
      ["Botox — Médio", "2h30", "R$ 200,00", "Tratamento para cabelos médios."],
      ["Botox — Longo", "3 horas", "R$ 250,00", "Tratamento para cabelos longos."],
      ["Mechas", "4 horas", "A partir de R$ 400,00", "Iluminação personalizada. O valor pode variar conforme comprimento, volume e técnica."],
      ["Mechas Contorno", "3h30", "A partir de R$ 290,00", "Iluminação estratégica para valorizar o rosto."],
      ["Luzes na touca", "A confirmar", "A partir de R$ 400,00", "Técnica tradicional de iluminação dos fios."],
      ["Teste de mechas", "A confirmar", "Grátis", "Avaliação prévia para verificar a possibilidade do procedimento."],
      ["Penteado", "A confirmar", "R$ 130,00", "Produção personalizada para ocasiões especiais."],
    ],
  },
  {
    titulo: "Sobrancelhas & Estética",
    subtitulo: "Detalhes que valorizam sua beleza natural.",
    servicos: [
      ["Design de sobrancelha", "1h20", "R$ 35,00", "Design personalizado para harmonizar o olhar."],
      ["Design de sobrancelha com henna", "1h40", "R$ 45,00", "Design acompanhado da aplicação de henna."],
      ["Limpeza de pele", "1h45", "R$ 90,00", "Um momento de cuidado e renovação para a pele."],
      ["Buço", "20 minutos", "R$ 15,00", "Remoção dos pelos da região do buço."],
    ],
  },
  {
    titulo: "Maquiagem",
    subtitulo: "Produção para você se sentir ainda mais especial.",
    servicos: [
      ["Maquiagem", "1h45", "R$ 150,00", "Produção personalizada para valorizar sua beleza."],
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
            className="text-lg font-semibold tracking-[0.2em] text-[#d8a0a8] md:text-xl"
          >
            KAREN SALLA DESIGNER
          </Link>

          <nav className="flex items-center gap-4 text-sm md:gap-8">

            <Link
              href="/"
              className="hidden transition hover:text-[#d8a0a8] sm:block"
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
              className="hidden transition hover:text-[#d8a0a8] sm:block"
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

      {/* INTRO */}
      <section className="px-6 py-24 text-center">

        <p className="text-sm uppercase tracking-[0.3em] text-[#d8a0a8]">
          Studio Karen Salla
        </p>

        <h1 className="mt-4 text-5xl font-light md:text-6xl">
          Serviços
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Cuidados pensados para valorizar sua beleza, respeitando seu
          estilo e proporcionando uma experiência personalizada.
        </p>

        <div className="mx-auto mt-10 h-px max-w-24 bg-[#d8a0a8]" />

      </section>

      {/* CATEGORIAS */}
      <section className="px-6 pb-28">

        <div className="mx-auto max-w-6xl space-y-20">

          {categorias.map((categoria) => (

            <div key={categoria.titulo}>

              <div className="mb-8">

                <p className="text-sm uppercase tracking-[0.25em] text-[#d8a0a8]">
                  Categoria
                </p>

                <h2 className="mt-3 text-3xl font-light md:text-4xl">
                  {categoria.titulo}
                </h2>

                <p className="mt-3 text-zinc-500">
                  {categoria.subtitulo}
                </p>

              </div>

              <div className="grid gap-4 md:grid-cols-2">

                {categoria.servicos.map(
                  ([nome, duracao, preco, descricao]) => (

                    <div
                      key={nome}
                      className="group rounded-2xl border border-white/10 bg-zinc-950 p-6 transition hover:-translate-y-1 hover:border-[#d8a0a8]/50"
                    >

                      <div className="flex items-start justify-between gap-5">

                        <div>

                          <h3 className="text-lg font-medium">
                            {nome}
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-zinc-500">
                            {descricao}
                          </p>

                        </div>

                        <p className="whitespace-nowrap text-right text-base font-semibold text-[#d8a0a8]">
                          {preco}
                        </p>

                      </div>

                      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">

                        <p className="text-xs text-zinc-600">
                          Duração: {duracao}
                        </p>

                        <Link
                          href="/agendar"
                          className="rounded-full border border-[#d8a0a8] px-5 py-2 text-xs font-semibold text-[#d8a0a8] transition hover:bg-[#d8a0a8] hover:text-black"
                        >
                          Agendar
                        </Link>

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* OBSERVAÇÃO */}
      <section className="px-6 pb-24">

        <div className="mx-auto max-w-5xl rounded-3xl border border-[#d8a0a8]/20 bg-zinc-950 p-8 text-center md:p-12">

          <p className="text-sm uppercase tracking-[0.25em] text-[#d8a0a8]">
            Importante
          </p>

          <h2 className="mt-4 text-3xl font-light">
            Cada atendimento é único
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-500">
            Alguns procedimentos podem ter seu tempo e valor ajustados
            conforme comprimento, volume, técnica escolhida e necessidade
            dos cabelos. Em caso de dúvida, entre em contato antes de
            realizar o agendamento.
          </p>

          <Link
            href="/agendar"
            className="mt-8 inline-block rounded-full bg-[#d8a0a8] px-9 py-4 font-semibold text-black transition hover:scale-105"
          >
            Escolher meu horário
          </Link>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">

          <div>

            <p className="tracking-[0.2em] text-[#d8a0a8]">
              KAREN SALLA DESIGNER
            </p>

            <p className="mt-2 text-xs text-zinc-600">
              Beleza, experiência e cuidado em cada detalhe.
            </p>

          </div>

          <p className="text-xs text-zinc-600">
            © 2026 Karen Salla Designer.
          </p>

        </div>

      </footer>

    </main>
  );
}