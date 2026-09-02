import Link from "next/link";

const services = [
  {
    name: "Corte",
    duration: "2 horas",
    price: "R$ 80,00",
  },
  {
    name: "Design de sobrancelha",
    duration: "1h20",
    price: "R$ 35,00",
  },
  {
    name: "Mechas",
    duration: "4 horas",
    price: "R$ 400,00",
  },
  {
    name: "Limpeza de pele",
    duration: "1h45",
    price: "R$ 90,00",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* MENU */}
      <header className="fixed top-0 z-50 w-full border-b border-[#b76e79]/30 bg-black/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div className="text-xl font-semibold tracking-[0.25em] text-[#d8a0a8]">
            KAREN SALLA DESIGNER
          </div>

          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#inicio" className="transition hover:text-[#d8a0a8]">
              Início
            </a>

            <a
              href="/servicos"
              className="transition hover:text-[#d8a0a8]"
            >
              Serviços
            </a>

            <a href="#sobre" className="transition hover:text-[#d8a0a8]">
              Sobre
            </a>

            <Link
              href="/agendar"
              className="transition hover:text-[#d8a0a8]"
            >
              Agendar
            </Link>
          </nav>

          <Link
            href="/agendar"
            className="rounded-full border border-[#d8a0a8] px-5 py-2 text-sm text-[#d8a0a8] transition hover:bg-[#d8a0a8] hover:text-black"
          >
            Agendar
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="flex min-h-screen items-center justify-center px-6 pt-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d8a0a8]">
              Beleza • Cuidado • Elegância
            </p>

            <h1 className="text-5xl font-light leading-tight md:text-7xl">
              Realce sua
              <span className="block font-semibold text-[#d8a0a8]">
                beleza
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-400">
              Um espaço dedicado ao cuidado, à beleza e ao bem-estar,
              com atendimento personalizado pela Karen.
            </p>

            <Link
              href="/agendar"
              className="mt-8 inline-block rounded-full bg-[#d8a0a8] px-8 py-4 font-medium text-black transition hover:scale-105"
            >
              Agendar meu horário
            </Link>
          </div>

          {/* Espaço reservado para foto */}
          <div className="flex h-[500px] items-center justify-center rounded-3xl border border-[#d8a0a8]/30 bg-zinc-950">
            <p className="text-center text-sm uppercase tracking-[0.3em] text-zinc-600">
              Foto do salão
            </p>
          </div>

        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-zinc-950 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d8a0a8]">
              Conheça
            </p>

            <h2 className="mt-3 text-4xl font-light md:text-5xl">
              Nossos serviços
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-zinc-400">
              Procedimentos pensados para você
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {services.map((service) => (
              <div
                key={service.name}
                className="group rounded-2xl border border-white/10 bg-black p-6 transition hover:-translate-y-1 hover:border-[#d8a0a8]/60"
              >
                <div className="mb-6 h-32 rounded-xl bg-zinc-900" />

                <h3 className="text-xl font-medium">
                  {service.name}
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  {service.duration}
                </p>

                <p className="mt-4 text-lg font-semibold text-[#d8a0a8]">
                  {service.price}
                </p>
              </div>
            ))}

          </div>

          <div className="mt-12 text-center">
            <Link
              href="/servicos"
              className="inline-block rounded-full border border-[#d8a0a8] px-8 py-3 text-[#d8a0a8] transition hover:bg-[#d8a0a8] hover:text-black"
            >
              Ver todos os serviços
            </Link>
          </div>

        </div>
      </section>

      {/* SOBRE KAREN */}
      <section id="sobre" className="px-6 py-24">

        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          <div className="h-[450px] rounded-3xl border border-[#d8a0a8]/30 bg-zinc-950">
            <div className="flex h-full items-center justify-center text-sm uppercase tracking-[0.3em] text-zinc-600">
              Foto da Karen
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d8a0a8]">
              Sobre
            </p>

            <h2 className="mt-3 text-4xl font-light md:text-5xl">
              Conheça a Karen
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              Um atendimento personalizado, pensado para que cada
              cliente tenha uma experiência especial.
            </p>

            <p className="mt-4 leading-8 text-zinc-400">
              Aqui você encontra cuidados para os cabelos, sobrancelhas,
              pele e bem-estar em um só lugar.
            </p>
          </div>

        </div>
      </section>

      {/* AGENDAMENTO */}
      <section
        id="agendar"
        className="bg-[#d8a0a8] px-6 py-24 text-black"
      >
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm uppercase tracking-[0.3em]">
            Seu momento
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-6xl">
            Agende seu horário
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg">
            Escolha um ou mais serviços, selecione o melhor dia e
            horário e deixe o restante com a gente.
          </p>

          <Link
            href="/agendar"
            className="mt-8 inline-block rounded-full bg-black px-10 py-4 font-medium text-white transition hover:scale-105"
          >
            Começar agendamento
          </Link>

        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-white/10 bg-black px-6 py-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">

          <div className="text-lg tracking-[0.2em] text-[#d8a0a8]">
            KAREN
          </div>

          <p className="text-sm text-zinc-500">
            Beleza, cuidado e bem-estar.
          </p>

        </div>

      </footer>

    </main>
  );
}