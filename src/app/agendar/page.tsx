"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";

const services = [
  {
    category: "Cabelos",
    items: [
      { name: "Corte", duration: "2 horas", durationMinutes: 120, price: 80 },
      {
        name: "Corte franja",
        duration: "15 minutos",
        durationMinutes: 15,
        price: 10,
      },
      {
        name: "Escova",
        duration: "2 horas",
        durationMinutes: 120,
        price: 80,
      },
      {
        name: "Escova modelada",
        duration: "A confirmar",
        durationMinutes: null,
        price: 80,
      },
      {
        name: "Hidratação / Nutrição",
        duration: "2h45",
        durationMinutes: 165,
        price: 80,
      },
      {
        name: "Reconstrução",
        duration: "1h50",
        durationMinutes: 110,
        price: 100,
      },
      {
        name: "Coloração",
        duration: "2h30",
        durationMinutes: 150,
        price: 110,
      },
      {
        name: "Coloração + Corte",
        duration: "1h50",
        durationMinutes: 110,
        price: 170,
      },
      {
        name: "Aplicação coloração + escova",
        duration: "A confirmar",
        durationMinutes: null,
        price: 80,
      },
      {
        name: "Progressiva / Selagem — Curto",
        duration: "A confirmar",
        durationMinutes: null,
        price: 180,
      },
      {
        name: "Progressiva / Selagem — Médio",
        duration: "3h30",
        durationMinutes: 210,
        price: 220,
      },
      {
        name: "Progressiva / Selagem — Longo",
        duration: "3h50",
        durationMinutes: 230,
        price: 280,
      },
      {
        name: "Botox — Curto",
        duration: "2 horas",
        durationMinutes: 120,
        price: 130,
      },
      {
        name: "Botox — Médio",
        duration: "2h30",
        durationMinutes: 150,
        price: 200,
      },
      {
        name: "Botox — Longo",
        duration: "3 horas",
        durationMinutes: 180,
        price: 250,
      },
      {
        name: "Mechas",
        duration: "4 horas",
        durationMinutes: 240,
        price: 400,
      },
      {
        name: "Mechas Contorno",
        duration: "3h30",
        durationMinutes: 210,
        price: 290,
      },
      {
        name: "Luzes na touca",
        duration: "A confirmar",
        durationMinutes: null,
        price: 400,
      },
      {
        name: "Teste de mechas",
        duration: "A confirmar",
        durationMinutes: null,
        price: 0,
      },
      {
        name: "Penteado",
        duration: "A confirmar",
        durationMinutes: null,
        price: 130,
      },
    ],
  },
  {
    category: "Sobrancelhas e Estética",
    items: [
      {
        name: "Design de sobrancelha",
        duration: "1h20",
        durationMinutes: 80,
        price: 35,
      },
      {
        name: "Design de sobrancelha com henna",
        duration: "1h40",
        durationMinutes: 100,
        price: 45,
      },
      {
        name: "Limpeza de pele",
        duration: "1h45",
        durationMinutes: 105,
        price: 90,
      },
      {
        name: "Buço",
        duration: "20 minutos",
        durationMinutes: 20,
        price: 15,
      },
    ],
  },
  {
    category: "Maquiagem",
    items: [
      {
        name: "Maquiagem",
        duration: "1h45",
        durationMinutes: 105,
        price: 150,
      },
    ],
  },
];

const availableTimes = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

type Bloqueio = {
  id: number;
  data_bloqueio: string;
  horario: string | null;
  dia_inteiro: boolean;
  motivo: string | null;
};

type AgendamentoExistente = {
  id: number;
  horario: string;
  duracao_total: number | null;
  status: string;
};

export default function Agendar() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [cancelToken, setCancelToken] = useState("");

  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [bloqueios, setBloqueios] = useState<Bloqueio[]>([]);
  const [agendamentosExistentes, setAgendamentosExistentes] =
    useState<AgendamentoExistente[]>([]);

  const [carregandoHorarios, setCarregandoHorarios] =
    useState(false);

  const allServices = services.flatMap((category) => category.items);

  const selectedServiceDetails = useMemo(() => {
    return allServices.filter((service) =>
      selectedServices.includes(service.name)
    );
  }, [selectedServices]);

  const totalPrice = useMemo(() => {
    return selectedServiceDetails.reduce(
      (total, service) => total + service.price,
      0
    );
  }, [selectedServiceDetails]);

  const totalDuration = useMemo(() => {
    const hasUnknownDuration = selectedServiceDetails.some(
      (service) => service.durationMinutes === null
    );

    const minutes = selectedServiceDetails.reduce(
      (total, service) => total + (service.durationMinutes ?? 0),
      0
    );

    if (minutes === 0 && hasUnknownDuration) {
      return "A confirmar";
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    let formatted = "";

    if (hours > 0) {
      formatted += `${hours}h`;
    }

    if (remainingMinutes > 0) {
      formatted += `${remainingMinutes.toString().padStart(2, "0")}`;
    }

    if (hours === 0 && remainingMinutes > 0) {
      formatted = `${remainingMinutes} minutos`;
    }

    if (hasUnknownDuration) {
      return `${formatted} + tempo a confirmar`;
    }

    return formatted || "A confirmar";
  }, [selectedServiceDetails]);

  const totalDurationMinutes = useMemo(() => {
    return selectedServiceDetails.reduce(
      (total, service) => total + (service.durationMinutes ?? 0),
      0
    );
  }, [selectedServiceDetails]);

  const today = new Date().toISOString().split("T")[0];

  /*
   * Verifica se dois intervalos de horário se sobrepõem.
   *
   * Exemplo:
   * Atendimento 14:00 às 16:00
   * Outro atendimento 15:00 às 17:00
   *
   * Existe conflito.
   */
  function existeConflitoDeHorario(
    horarioInicio: string,
    duracaoMinutos: number,
    outroHorario: string,
    outraDuracaoMinutos: number | null
  ) {
    const [horaInicio, minutoInicio] = horarioInicio
      .slice(0, 5)
      .split(":")
      .map(Number);

    const [outroHoraInicio, outroMinutoInicio] = outroHorario
      .slice(0, 5)
      .split(":")
      .map(Number);

    const inicio = horaInicio * 60 + minutoInicio;

    const outroInicio =
      outroHoraInicio * 60 + outroMinutoInicio;

    const fim = inicio + duracaoMinutos;

    const outraFim =
      outroInicio + (outraDuracaoMinutos || 60);

    return inicio < outraFim && outroInicio < fim;
  }

  function horarioEstaBloqueado(time: string) {
    const bloqueioDoDia = bloqueios.some(
      (bloqueio) =>
        bloqueio.dia_inteiro &&
        bloqueio.data_bloqueio === selectedDate
    );

    if (bloqueioDoDia) {
      return true;
    }

    const bloqueioDoHorario = bloqueios.some(
      (bloqueio) =>
        !bloqueio.dia_inteiro &&
        bloqueio.data_bloqueio === selectedDate &&
        bloqueio.horario?.slice(0, 5) === time
    );

    if (bloqueioDoHorario) {
      return true;
    }

    if (totalDurationMinutes > 0) {
      const conflitoComOutroAgendamento =
        agendamentosExistentes.some((agendamento) => {
          if (
            agendamento.status === "cancelado" ||
            agendamento.status === "concluido"
          ) {
            return false;
          }

          return existeConflitoDeHorario(
            time,
            totalDurationMinutes,
            agendamento.horario,
            agendamento.duracao_total
          );
        });

      if (conflitoComOutroAgendamento) {
        return true;
      }
    }

    return false;
  }

  const horariosDisponiveis = useMemo(() => {
    if (!selectedDate) {
      return availableTimes;
    }

    return availableTimes.filter(
      (time) => !horarioEstaBloqueado(time)
    );
  }, [
    selectedDate,
    bloqueios,
    agendamentosExistentes,
    totalDurationMinutes,
  ]);

  async function carregarDisponibilidade(data: string) {
    if (!data) {
      setBloqueios([]);
      setAgendamentosExistentes([]);
      return;
    }

    try {
      setCarregandoHorarios(true);
      setErrorMessage("");

      const supabase = createClient();

      const [
        { data: bloqueiosData, error: bloqueiosError },
        { data: agendamentosData, error: agendamentosError },
      ] = await Promise.all([
        supabase
          .from("bloqueios_agenda")
          .select(
            "id, data_bloqueio, horario, dia_inteiro, motivo"
          )
          .eq("data_bloqueio", data),

        supabase
          .from("agendamentos")
          .select(
            "id, horario, duracao_total, status"
          )
          .eq("data_agendamento", data),
      ]);

      if (bloqueiosError) {
        console.error(
          "ERRO AO BUSCAR BLOQUEIOS:",
          bloqueiosError
        );

        setErrorMessage(
          "Não foi possível verificar a disponibilidade."
        );

        return;
      }

      if (agendamentosError) {
        console.error(
          "ERRO AO BUSCAR AGENDAMENTOS:",
          agendamentosError
        );

        setErrorMessage(
          "Não foi possível verificar os horários."
        );

        return;
      }

      setBloqueios((bloqueiosData as Bloqueio[]) || []);

      setAgendamentosExistentes(
        (agendamentosData as AgendamentoExistente[]) || []
      );

      setSelectedTime("");
    } catch (error) {
      console.error("ERRO AO CARREGAR DISPONIBILIDADE:", error);

      setErrorMessage(
        "Não foi possível carregar os horários disponíveis."
      );
    } finally {
      setCarregandoHorarios(false);
    }
  }

  function toggleService(serviceName: string) {
    setSelectedServices((current) => {
      if (current.includes(serviceName)) {
        return current.filter((name) => name !== serviceName);
      }

      return [...current, serviceName];
    });
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setErrorMessage("");

    if (
      selectedServices.length === 0 ||
      !selectedDate ||
      !selectedTime ||
      !name.trim() ||
      !whatsapp.trim()
    ) {
      setErrorMessage(
        "Preencha todos os campos antes de confirmar."
      );
      return;
    }

    try {
      setLoading(true);

      const supabase = createClient();

      /*
       * Antes de salvar, verificamos novamente o horário.
       *
       * Isso evita que duas clientes tentem reservar
       * o mesmo horário ao mesmo tempo.
       */

      const { data: bloqueiosAtualizados, error: erroBloqueios } =
        await supabase
          .from("bloqueios_agenda")
          .select(
            "id, data_bloqueio, horario, dia_inteiro, motivo"
          )
          .eq("data_bloqueio", selectedDate);

      if (erroBloqueios) {
        setErrorMessage(
          "Não foi possível verificar a disponibilidade. Tente novamente."
        );
        return;
      }

      const bloqueiosAtuais =
        (bloqueiosAtualizados as Bloqueio[]) || [];

      const diaBloqueado = bloqueiosAtuais.some(
        (bloqueio) => bloqueio.dia_inteiro
      );

      const horarioBloqueado = bloqueiosAtuais.some(
        (bloqueio) =>
          !bloqueio.dia_inteiro &&
          bloqueio.horario?.slice(0, 5) === selectedTime
      );

      if (diaBloqueado || horarioBloqueado) {
        setErrorMessage(
          "Esse horário acabou de ficar indisponível. Escolha outro horário."
        );

        await carregarDisponibilidade(selectedDate);

        return;
      }

      const { data: agendamentosAtualizados, error: erroAgendamentos } =
        await supabase
          .from("agendamentos")
          .select(
            "id, horario, duracao_total, status"
          )
          .eq("data_agendamento", selectedDate)
          .neq("status", "cancelado")
          .neq("status", "concluido");

      if (erroAgendamentos) {
        setErrorMessage(
          "Não foi possível verificar os horários ocupados."
        );
        return;
      }

      const agendamentosAtuais =
        (agendamentosAtualizados as AgendamentoExistente[]) ||
        [];

      const existeConflito = agendamentosAtuais.some(
        (agendamento) =>
          existeConflitoDeHorario(
            selectedTime,
            totalDurationMinutes,
            agendamento.horario,
            agendamento.duracao_total
          )
      );

      if (existeConflito) {
        setErrorMessage(
          "Esse horário já está ocupado. Escolha outro horário."
        );

        await carregarDisponibilidade(selectedDate);

        return;
      }

      const novoCancelToken = crypto.randomUUID();

      const { error } = await supabase
        .from("agendamentos")
        .insert({
          nome_cliente: name.trim(),
          telefone: whatsapp.trim(),
          servicos: selectedServices,
          data_agendamento: selectedDate,
          horario: selectedTime,
          valor_total: totalPrice,
          duracao_total: totalDurationMinutes,
          status: "pendente",
          cancel_token: novoCancelToken,
        });

      if (error) {
        console.error("ERRO SUPABASE:", error);

        setErrorMessage(
          `Erro ao registrar: ${error.message}`
        );

        return;
      }

      setCancelToken(novoCancelToken);
      setConfirmed(true);
    } catch (error) {
      console.error("ERRO:", error);

      if (error instanceof Error) {
        setErrorMessage(
          `Erro ao registrar: ${error.message}`
        );
      } else {
        setErrorMessage(
          "Ocorreu um erro ao registrar o agendamento. Tente novamente."
        );
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!selectedDate) {
      return;
    }

    carregarDisponibilidade(selectedDate);
  }, [selectedDate]);

  useEffect(() => {
    if (!selectedTime) {
      return;
    }

    if (horarioEstaBloqueado(selectedTime)) {
      setSelectedTime("");
    }
  }, [
    bloqueios,
    agendamentosExistentes,
    totalDurationMinutes,
    selectedTime,
  ]);

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-[#d8a0a8]/20 bg-black/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="text-xl font-semibold tracking-[0.25em] text-[#d8a0a8]"
          >
            Karen Salla Studio
          </a>

          <nav className="hidden gap-8 text-sm md:flex">
            <a
              href="/"
              className="transition hover:text-[#d8a0a8]"
            >
              Início
            </a>

            <a
              href="/servicos"
              className="transition hover:text-[#d8a0a8]"
            >
              Serviços
            </a>

            <a
              href="/#sobre"
              className="transition hover:text-[#d8a0a8]"
            >
              Sobre
            </a>

            <a
              href="/agendar"
              className="text-[#d8a0a8]"
            >
              Agendar
            </a>
          </nav>

          <a
            href="/agendar"
            className="rounded-full border border-[#d8a0a8] px-5 py-2 text-sm text-[#d8a0a8] transition hover:bg-[#d8a0a8] hover:text-black"
          >
            Agendar
          </a>
        </div>
      </header>

      <section className="px-6 pb-12 pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d8a0a8]">
            Seu momento
          </p>

          <h1 className="mt-4 text-5xl font-light md:text-6xl">
            Agende seu{" "}
            <span className="font-semibold text-[#d8a0a8]">
              horário
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-400">
            Escolha um ou mais procedimentos, encontre a melhor
            data e reserve seu momento.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <form
            onSubmit={handleSubmit}
            className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr]"
          >
            <div className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 md:p-8">
                <div className="mb-7">
                  <span className="text-sm text-[#d8a0a8]">
                    01
                  </span>

                  <h2 className="mt-1 text-2xl font-light">
                    Escolha seus serviços
                  </h2>

                  <p className="mt-2 text-sm text-zinc-500">
                    Você pode escolher mais de um procedimento.
                  </p>
                </div>

                <div className="space-y-8">
                  {services.map((category) => (
                    <div key={category.category}>
                      <h3 className="mb-4 text-lg text-[#d8a0a8]">
                        {category.category}
                      </h3>

                      <div className="space-y-3">
                        {category.items.map((service) => {
                          const isSelected =
                            selectedServices.includes(
                              service.name
                            );

                          return (
                            <button
                              type="button"
                              key={service.name}
                              onClick={() =>
                                toggleService(service.name)
                              }
                              className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                                isSelected
                                  ? "border-[#d8a0a8] bg-[#d8a0a8]/10"
                                  : "border-white/10 bg-black hover:border-[#d8a0a8]/50"
                              }`}
                            >
                              <div
                                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition ${
                                  isSelected
                                    ? "border-[#d8a0a8] bg-[#d8a0a8] text-black"
                                    : "border-white/20"
                                }`}
                              >
                                {isSelected && "✓"}
                              </div>

                              <div className="min-w-0 flex-1">
                                <p
                                  className={`font-medium ${
                                    isSelected
                                      ? "text-[#d8a0a8]"
                                      : "text-white"
                                  }`}
                                >
                                  {service.name}
                                </p>

                                <p className="mt-1 text-xs text-zinc-500">
                                  {service.duration}
                                </p>
                              </div>

                              <p className="whitespace-nowrap text-sm font-semibold text-[#d8a0a8]">
                                {service.price === 0
                                  ? "Grátis"
                                  : `R$ ${service.price
                                      .toFixed(2)
                                      .replace(".", ",")}`}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 md:p-8">
                <div className="mb-6">
                  <span className="text-sm text-[#d8a0a8]">
                    02
                  </span>

                  <h2 className="mt-1 text-2xl font-light">
                    Escolha a data
                  </h2>
                </div>

                <input
                  type="date"
                  min={today}
                  value={selectedDate}
                  onChange={(event) =>
                    setSelectedDate(event.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-white outline-none transition focus:border-[#d8a0a8]"
                />

                {selectedDate &&
                  bloqueios.some(
                    (bloqueio) =>
                      bloqueio.dia_inteiro &&
                      bloqueio.data_bloqueio === selectedDate
                  ) && (
                    <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">
                      Esta data não possui atendimento disponível.
                      Escolha outra data.
                    </div>
                  )}
              </div>

              <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 md:p-8">
                <div className="mb-6">
                  <span className="text-sm text-[#d8a0a8]">
                    03
                  </span>

                  <h2 className="mt-1 text-2xl font-light">
                    Escolha o horário
                  </h2>

                  <p className="mt-2 text-sm text-zinc-500">
                    Os horários ocupados ou bloqueados não ficam
                    disponíveis para agendamento.
                  </p>
                </div>

                {!selectedDate ? (
                  <div className="rounded-xl border border-white/10 bg-black p-5 text-center text-sm text-zinc-500">
                    Primeiro escolha uma data.
                  </div>
                ) : carregandoHorarios ? (
                  <div className="rounded-xl border border-white/10 bg-black p-5 text-center text-sm text-zinc-500">
                    Verificando horários disponíveis...
                  </div>
                ) : horariosDisponiveis.length === 0 ? (
                  <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-5 text-center text-sm text-red-300">
                    Não há horários disponíveis nesta data.
                    Escolha outra data.
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                      {availableTimes.map((time) => {
                        const indisponivel =
                          horarioEstaBloqueado(time);

                        return (
                          <button
                            type="button"
                            key={time}
                            disabled={indisponivel}
                            onClick={() =>
                              setSelectedTime(time)
                            }
                            className={`rounded-xl border px-4 py-3 text-sm transition ${
                              indisponivel
                                ? "cursor-not-allowed border-white/5 bg-zinc-900 text-zinc-700 line-through"
                                : selectedTime === time
                                ? "border-[#d8a0a8] bg-[#d8a0a8] text-black"
                                : "border-white/10 bg-black text-white hover:border-[#d8a0a8]/60"
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-4 text-xs text-zinc-500">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full border border-white/20 bg-black" />
                        Disponível
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-zinc-800" />
                        Indisponível
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-[#d8a0a8]" />
                        Selecionado
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 md:p-8">
                <div className="mb-6">
                  <span className="text-sm text-[#d8a0a8]">
                    04
                  </span>

                  <h2 className="mt-1 text-2xl font-light">
                    Seus dados
                  </h2>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm text-zinc-400">
                      Nome completo
                    </label>

                    <input
                      type="text"
                      placeholder="Digite seu nome"
                      value={name}
                      onChange={(event) =>
                        setName(event.target.value)
                      }
                      className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-white placeholder:text-zinc-600 outline-none transition focus:border-[#d8a0a8]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-zinc-400">
                      WhatsApp
                    </label>

                    <input
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={whatsapp}
                      onChange={(event) =>
                        setWhatsapp(event.target.value)
                      }
                      className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-white placeholder:text-zinc-600 outline-none transition focus:border-[#d8a0a8]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <div className="rounded-3xl border border-[#d8a0a8]/30 bg-zinc-950 p-6 md:p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-[#d8a0a8]">
                  Resumo
                </p>

                <h2 className="mt-3 text-2xl font-light">
                  Seu agendamento
                </h2>

                <div className="my-6 h-px bg-white/10" />

                <div>
                  <p className="text-sm text-zinc-500">
                    Serviços
                  </p>

                  {selectedServiceDetails.length === 0 ? (
                    <p className="mt-2 text-sm text-zinc-600">
                      Nenhum serviço selecionado
                    </p>
                  ) : (
                    <div className="mt-3 space-y-3">
                      {selectedServiceDetails.map((service) => (
                        <div
                          key={service.name}
                          className="flex items-start justify-between gap-3"
                        >
                          <div>
                            <p className="text-sm">
                              {service.name}
                            </p>

                            <p className="mt-1 text-xs text-zinc-600">
                              {service.duration}
                            </p>
                          </div>

                          <p className="whitespace-nowrap text-sm text-[#d8a0a8]">
                            {service.price === 0
                              ? "Grátis"
                              : `R$ ${service.price
                                  .toFixed(2)
                                  .replace(".", ",")}`}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="my-6 h-px bg-white/10" />

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-zinc-500">Data</p>

                    <p className="mt-1">
                      {selectedDate
                        ? new Date(
                            selectedDate + "T00:00:00"
                          ).toLocaleDateString("pt-BR")
                        : "Não selecionada"}
                    </p>
                  </div>

                  <div>
                    <p className="text-zinc-500">Horário</p>

                    <p className="mt-1">
                      {selectedTime || "Não selecionado"}
                    </p>
                  </div>

                  <div>
                    <p className="text-zinc-500">
                      Tempo estimado
                    </p>

                    <p className="mt-1 text-[#d8a0a8]">
                      {selectedServices.length > 0
                        ? totalDuration
                        : "Não calculado"}
                    </p>
                  </div>
                </div>

                <div className="my-6 h-px bg-white/10" />

                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">
                    Total
                  </span>

                  <span className="text-2xl font-semibold text-[#d8a0a8]">
                    R$ {totalPrice.toFixed(2).replace(".", ",")}
                  </span>
                </div>

                {errorMessage && (
                  <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm leading-6 text-red-300">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-7 w-full rounded-full bg-[#d8a0a8] px-6 py-4 font-semibold text-black transition hover:scale-[1.02] hover:bg-[#e2b2b9] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                >
                  {loading
                    ? "Registrando agendamento..."
                    : "Confirmar agendamento"}
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-zinc-500">
                  Confira todos os dados antes de confirmar seu
                  horário.
                </p>
              </div>
            </aside>
          </form>
        </div>
      </section>

      {confirmed && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-6 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl border border-[#d8a0a8]/40 bg-zinc-950 p-8 text-center shadow-2xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d8a0a8] text-2xl text-black">
              ✓
            </div>

            <p className="mt-6 text-sm uppercase tracking-[0.25em] text-[#d8a0a8]">
              Tudo certo
            </p>

            <h2 className="mt-3 text-3xl font-light">
              Agendamento solicitado!
            </h2>

            <p className="mt-4 leading-7 text-zinc-400">
              Obrigada, {name}! Sua solicitação de horário foi
              registrada.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black p-5 text-left">
              <p className="text-sm text-zinc-500">
                Serviços
              </p>

              <div className="mt-2 space-y-2">
                {selectedServiceDetails.map((service) => (
                  <div
                    key={service.name}
                    className="flex justify-between gap-3 text-sm"
                  >
                    <span>{service.name}</span>

                    <span className="text-[#d8a0a8]">
                      {service.price === 0
                        ? "Grátis"
                        : `R$ ${service.price
                            .toFixed(2)
                            .replace(".", ",")}`}
                    </span>
                  </div>
                ))}
              </div>

              <div className="my-4 h-px bg-white/10" />

              <p className="text-sm text-zinc-500">
                Data e horário
              </p>

              <p className="mt-1">
                {new Date(
                  selectedDate + "T00:00:00"
                ).toLocaleDateString("pt-BR")}{" "}
                às {selectedTime}
              </p>

              <p className="mt-4 text-sm text-zinc-500">
                Total
              </p>

              <p className="mt-1 text-xl font-semibold text-[#d8a0a8]">
                R$ {totalPrice.toFixed(2).replace(".", ",")}
              </p>
            </div>

            {cancelToken && (
              <a
                href={`/api/agendamento/cancelar?token=${encodeURIComponent(cancelToken)}`}
                className="mt-4 block w-full rounded-full border border-red-900/60 px-6 py-3 text-red-300 transition hover:bg-red-950/30"
              >
                Cancelar este agendamento
              </a>
            )}

            <button
              type="button"
              onClick={() => setConfirmed(false)}
              className="mt-6 w-full rounded-full border border-[#d8a0a8] px-6 py-3 text-[#d8a0a8] transition hover:bg-[#d8a0a8] hover:text-black"
            >
              Voltar
            </button>
          </div>
        </div>
      )}

      <footer className="border-t border-white/10 bg-black px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <a
            href="/"
            className="text-lg tracking-[0.2em] text-[#d8a0a8]"
          >
            Karen Salla Studio
          </a>

          <p className="text-sm text-zinc-500">
            Beleza, cuidado e bem-estar.
          </p>
        </div>
      </footer>
    </main>
  );
}