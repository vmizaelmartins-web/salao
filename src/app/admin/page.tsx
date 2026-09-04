"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Status =
  | "pendente"
  | "confirmado"
  | "concluido"
  | "cancelado";

type Agendamento = {
  id: number;
  nome_cliente: string;
  telefone: string;
  servicos: string[];
  data_agendamento: string;
  horario: string;
  valor_total: number;
  duracao_total: number | null;
  status: Status;
  observacoes: string | null;
  criado_em: string;
};

type Bloqueio = {
  id: number;
  data_bloqueio: string;
  horario: string | null;
  dia_inteiro: boolean;
  motivo: string | null;
  criado_em: string;
};

const STATUS_LABELS: Record<Status, string> = {
  pendente: "Pendente",
  confirmado: "Confirmado",
  concluido: "Concluído",
  cancelado: "Cancelado",
};

export default function AdminPage() {
  const supabase = createClient();

  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [bloqueios, setBloqueios] = useState<Bloqueio[]>([]);

  const [carregando, setCarregando] = useState(true);
  const [carregandoBloqueios, setCarregandoBloqueios] = useState(true);

  const [erro, setErro] = useState("");
  const [erroBloqueio, setErroBloqueio] = useState("");

  const [filtro, setFiltro] = useState<"todos" | Status>("todos");

  const [atualizandoId, setAtualizandoId] = useState<number | null>(null);
  const [excluindoBloqueioId, setExcluindoBloqueioId] =
    useState<number | null>(null);

  const [mostrarDisponibilidade, setMostrarDisponibilidade] =
    useState(false);

  const [dataBloqueio, setDataBloqueio] = useState("");
  const [horarioBloqueio, setHorarioBloqueio] = useState("");
  const [diaInteiro, setDiaInteiro] = useState(false);
  const [motivoBloqueio, setMotivoBloqueio] = useState("");
  const [salvandoBloqueio, setSalvandoBloqueio] = useState(false);

  async function carregarAgendamentos() {
    setCarregando(true);
    setErro("");

    const { data, error } = await supabase
      .from("agendamentos")
      .select("*")
      .order("data_agendamento", { ascending: true })
      .order("horario", { ascending: true });

    if (error) {
      setErro("Não foi possível carregar os agendamentos.");
      setCarregando(false);
      return;
    }

    setAgendamentos((data as Agendamento[]) || []);
    setCarregando(false);
  }

  async function carregarBloqueios() {
    setCarregandoBloqueios(true);
    setErroBloqueio("");

    const { data, error } = await supabase
      .from("bloqueios_agenda")
      .select("*")
      .order("data_bloqueio", { ascending: true })
      .order("horario", { ascending: true });

    if (error) {
      setErroBloqueio("Não foi possível carregar os bloqueios.");
      setCarregandoBloqueios(false);
      return;
    }

    setBloqueios((data as Bloqueio[]) || []);
    setCarregandoBloqueios(false);
  }

  useEffect(() => {
    carregarAgendamentos();
    carregarBloqueios();
  }, []);

  async function atualizarTudo() {
    await Promise.all([
      carregarAgendamentos(),
      carregarBloqueios(),
    ]);
  }

  async function alterarStatus(id: number, novoStatus: Status) {
    setAtualizandoId(id);
    setErro("");

    const { error } = await supabase
      .from("agendamentos")
      .update({ status: novoStatus })
      .eq("id", id);

    if (error) {
      setErro("Não foi possível alterar o status.");
      setAtualizandoId(null);
      return;
    }

    setAgendamentos((anteriores) =>
      anteriores.map((agendamento) =>
        agendamento.id === id
          ? { ...agendamento, status: novoStatus }
          : agendamento
      )
    );

    setAtualizandoId(null);
  }

  async function adicionarBloqueio() {
    setErroBloqueio("");

    if (!dataBloqueio) {
      setErroBloqueio("Escolha uma data.");
      return;
    }

    if (!diaInteiro && !horarioBloqueio) {
      setErroBloqueio("Escolha um horário ou marque dia inteiro.");
      return;
    }

    setSalvandoBloqueio(true);

    const { data, error } = await supabase
      .from("bloqueios_agenda")
      .insert({
        data_bloqueio: dataBloqueio,
        horario: diaInteiro ? null : horarioBloqueio,
        dia_inteiro: diaInteiro,
        motivo: motivoBloqueio.trim() || null,
      })
      .select()
      .single();

    if (error) {
      setErroBloqueio(
        error.message || "Não foi possível criar o bloqueio."
      );
      setSalvandoBloqueio(false);
      return;
    }

    setBloqueios((anteriores) =>
      [...anteriores, data as Bloqueio].sort((a, b) => {
        const dataA = `${a.data_bloqueio} ${a.horario || "00:00"}`;
        const dataB = `${b.data_bloqueio} ${b.horario || "00:00"}`;

        return dataA.localeCompare(dataB);
      })
    );

    setDataBloqueio("");
    setHorarioBloqueio("");
    setDiaInteiro(false);
    setMotivoBloqueio("");
    setSalvandoBloqueio(false);
  }

  async function removerBloqueio(id: number) {
    setExcluindoBloqueioId(id);
    setErroBloqueio("");

    const { error } = await supabase
      .from("bloqueios_agenda")
      .delete()
      .eq("id", id);

    if (error) {
      setErroBloqueio("Não foi possível remover o bloqueio.");
      setExcluindoBloqueioId(null);
      return;
    }

    setBloqueios((anteriores) =>
      anteriores.filter((bloqueio) => bloqueio.id !== id)
    );

    setExcluindoBloqueioId(null);
  }

  const agendamentosFiltrados = useMemo(() => {
    if (filtro === "todos") {
      return agendamentos;
    }

    return agendamentos.filter(
      (agendamento) => agendamento.status === filtro
    );
  }, [agendamentos, filtro]);

  const estatisticas = useMemo(() => {
    const ativos = agendamentos.filter(
      (agendamento) => agendamento.status !== "cancelado"
    );

    return {
      total: agendamentos.length,
      pendentes: agendamentos.filter(
        (agendamento) => agendamento.status === "pendente"
      ).length,
      confirmados: agendamentos.filter(
        (agendamento) => agendamento.status === "confirmado"
      ).length,
      concluidos: agendamentos.filter(
        (agendamento) => agendamento.status === "concluido"
      ).length,
      cancelados: agendamentos.filter(
        (agendamento) => agendamento.status === "cancelado"
      ).length,
      valor: ativos.reduce(
        (total, agendamento) =>
          total + Number(agendamento.valor_total || 0),
        0
      ),
    };
  }, [agendamentos]);

  function formatarData(data: string) {
    const [ano, mes, dia] = data.split("-");

    return `${dia}/${mes}/${ano}`;
  }

  function formatarHorario(horario: string | null) {
    if (!horario) return "";

    return horario.slice(0, 5);
  }

  function formatarValor(valor: number) {
    return Number(valor || 0).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function formatarDuracao(minutos: number | null) {
    if (!minutos) return "Não informado";

    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;

    if (horas === 0) {
      return `${minutosRestantes}min`;
    }

    if (minutosRestantes === 0) {
      return `${horas}h`;
    }

    return `${horas}h ${minutosRestantes}min`;
  }

  function abrirWhatsApp(telefone: string) {
    const numero = telefone.replace(/\D/g, "");

    if (!numero) return;

    const numeroComBrasil = numero.startsWith("55")
      ? numero
      : `55${numero}`;

    window.open(
      `https://wa.me/${numeroComBrasil}`,
      "_blank"
    );
  }

  function nomeDiaSemana(data: string) {
    const [ano, mes, dia] = data.split("-").map(Number);
    const dataLocal = new Date(ano, mes - 1, dia);

    return dataLocal.toLocaleDateString("pt-BR", {
      weekday: "long",
    });
  }

  function dataEhHoje(data: string) {
    const hoje = new Date();

    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, "0");
    const dia = String(hoje.getDate()).padStart(2, "0");

    return data === `${ano}-${mes}-${dia}`;
  }

  function dataEhAmanha(data: string) {
    const amanha = new Date();
    amanha.setDate(amanha.getDate() + 1);

    const ano = amanha.getFullYear();
    const mes = String(amanha.getMonth() + 1).padStart(2, "0");
    const dia = String(amanha.getDate()).padStart(2, "0");

    return data === `${ano}-${mes}-${dia}`;
  }

  const gruposPorData = useMemo(() => {
    const grupos: Record<string, Agendamento[]> = {};

    agendamentosFiltrados.forEach((agendamento) => {
      if (!grupos[agendamento.data_agendamento]) {
        grupos[agendamento.data_agendamento] = [];
      }

      grupos[agendamento.data_agendamento].push(agendamento);
    });

    return grupos;
  }, [agendamentosFiltrados]);

  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <header className="border-b border-[#2b2022] bg-[#0d0d0d]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#d8a0a8]">
              Karen Salla Studio
            </p>

            <h1 className="mt-1 text-3xl font-light">
              Painel de controle
            </h1>

            <p className="mt-2 text-sm text-gray-400">
              Gerencie sua agenda e sua disponibilidade.
            </p>
          </div>

          <button
            onClick={atualizarTudo}
            className="rounded-full border border-[#d8a0a8] px-5 py-2.5 text-sm text-[#f0c8ce] transition hover:bg-[#d8a0a8] hover:text-black"
          >
            Atualizar
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-2xl border border-[#2b2022] bg-[#111111] p-5">
            <p className="text-sm text-gray-400">Total</p>
            <p className="mt-2 text-3xl font-light">
              {estatisticas.total}
            </p>
          </div>

          <div className="rounded-2xl border border-[#2b2022] bg-[#111111] p-5">
            <p className="text-sm text-gray-400">Pendentes</p>
            <p className="mt-2 text-3xl font-light text-[#e6b8bf]">
              {estatisticas.pendentes}
            </p>
          </div>

          <div className="rounded-2xl border border-[#2b2022] bg-[#111111] p-5">
            <p className="text-sm text-gray-400">Confirmados</p>
            <p className="mt-2 text-3xl font-light text-[#e6b8bf]">
              {estatisticas.confirmados}
            </p>
          </div>

          <div className="rounded-2xl border border-[#2b2022] bg-[#111111] p-5">
            <p className="text-sm text-gray-400">Concluídos</p>
            <p className="mt-2 text-3xl font-light">
              {estatisticas.concluidos}
            </p>
          </div>

          <div className="rounded-2xl border border-[#d8a0a8]/40 bg-[#171113] p-5">
            <p className="text-sm text-gray-400">Valor previsto</p>
            <p className="mt-2 text-2xl font-light text-[#e6b8bf]">
              {formatarValor(estatisticas.valor)}
            </p>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#d8a0a8]">
                Agenda
              </p>

              <h2 className="mt-1 text-2xl font-light">
                Seus atendimentos
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {(
                [
                  ["todos", "Todos"],
                  ["pendente", "Pendentes"],
                  ["confirmado", "Confirmados"],
                  ["concluido", "Concluídos"],
                  ["cancelado", "Cancelados"],
                ] as [typeof filtro, string][]
              ).map(([valor, texto]) => (
                <button
                  key={valor}
                  onClick={() => setFiltro(valor)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    filtro === valor
                      ? "bg-[#d8a0a8] text-black"
                      : "border border-[#33272a] bg-[#111111] text-gray-300 hover:border-[#d8a0a8]"
                  }`}
                >
                  {texto}
                </button>
              ))}
            </div>
          </div>

          {erro && (
            <div className="mt-6 rounded-2xl border border-red-900/50 bg-red-950/20 p-4 text-sm text-red-300">
              {erro}
            </div>
          )}

          {carregando ? (
            <div className="mt-8 rounded-2xl border border-[#2b2022] bg-[#111111] p-10 text-center text-gray-400">
              Carregando agenda...
            </div>
          ) : agendamentosFiltrados.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-[#2b2022] bg-[#111111] p-10 text-center">
              <p className="text-lg text-gray-300">
                Nenhum agendamento encontrado.
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Quando uma cliente agendar, o atendimento aparecerá aqui.
              </p>
            </div>
          ) : (
            <div className="mt-8 space-y-10">
              {Object.entries(gruposPorData).map(
                ([data, agendamentosDoDia]) => (
                  <section key={data}>
                    <div className="mb-4 flex items-center gap-4">
                      <div>
                        <p className="text-sm capitalize text-[#d8a0a8]">
                          {dataEhHoje(data)
                            ? "Hoje"
                            : dataEhAmanha(data)
                            ? "Amanhã"
                            : nomeDiaSemana(data)}
                        </p>

                        <h3 className="text-xl font-light">
                          {formatarData(data)}
                        </h3>
                      </div>

                      <div className="h-px flex-1 bg-[#2b2022]" />

                      <span className="text-sm text-gray-500">
                        {agendamentosDoDia.length}{" "}
                        {agendamentosDoDia.length === 1
                          ? "atendimento"
                          : "atendimentos"}
                      </span>
                    </div>

                    <div className="space-y-4">
                      {agendamentosDoDia.map((agendamento) => (
                        <article
                          key={agendamento.id}
                          className="overflow-hidden rounded-2xl border border-[#2b2022] bg-[#111111]"
                        >
                          <div className="flex flex-col gap-5 p-5 lg:flex-row lg:items-center">
                            <div className="flex min-w-[110px] items-center gap-3">
                              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d8a0a8]/40 bg-[#171113]">
                                <span className="text-sm text-[#e6b8bf]">
                                  ⏰
                                </span>
                              </div>

                              <div>
                                <p className="text-2xl font-light">
                                  {formatarHorario(
                                    agendamento.horario
                                  )}
                                </p>

                                <p className="text-xs text-gray-500">
                                  {formatarDuracao(
                                    agendamento.duracao_total
                                  )}
                                </p>
                              </div>
                            </div>

                            <div className="hidden h-12 w-px bg-[#2b2022] lg:block" />

                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center gap-3">
                                <h4 className="text-lg font-medium">
                                  {agendamento.nome_cliente}
                                </h4>

                                <span
                                  className={`rounded-full px-3 py-1 text-xs ${
                                    agendamento.status === "pendente"
                                      ? "bg-yellow-950/40 text-yellow-300"
                                      : agendamento.status ===
                                        "confirmado"
                                      ? "bg-green-950/40 text-green-300"
                                      : agendamento.status ===
                                        "concluido"
                                      ? "bg-blue-950/40 text-blue-300"
                                      : "bg-red-950/40 text-red-300"
                                  }`}
                                >
                                  {STATUS_LABELS[
                                    agendamento.status
                                  ]}
                                </span>
                              </div>

                              <p className="mt-2 text-sm text-gray-400">
                                {agendamento.servicos?.join(" • ") ||
                                  "Serviço não informado"}
                              </p>

                              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
                                <span>
                                  📱 {agendamento.telefone}
                                </span>

                                <span className="text-[#d8a0a8]">
                                  {formatarValor(
                                    agendamento.valor_total
                                  )}
                                </span>
                              </div>

                              {agendamento.observacoes && (
                                <p className="mt-3 rounded-xl bg-[#0c0c0c] p-3 text-sm text-gray-400">
                                  <span className="text-gray-300">
                                    Observação:
                                  </span>{" "}
                                  {agendamento.observacoes}
                                </p>
                              )}
                            </div>

                            <div className="flex flex-wrap gap-2 lg:max-w-[300px] lg:justify-end">
                              {agendamento.status === "pendente" && (
                                <>
                                  <button
                                    disabled={
                                      atualizandoId ===
                                      agendamento.id
                                    }
                                    onClick={() =>
                                      alterarStatus(
                                        agendamento.id,
                                        "confirmado"
                                      )
                                    }
                                    className="rounded-full bg-[#d8a0a8] px-4 py-2 text-sm text-black transition hover:bg-[#e6b8bf] disabled:opacity-50"
                                  >
                                    Confirmar
                                  </button>

                                  <button
                                    disabled={
                                      atualizandoId ===
                                      agendamento.id
                                    }
                                    onClick={() =>
                                      alterarStatus(
                                        agendamento.id,
                                        "cancelado"
                                      )
                                    }
                                    className="rounded-full border border-red-900/50 px-4 py-2 text-sm text-red-300 transition hover:bg-red-950/30 disabled:opacity-50"
                                  >
                                    Cancelar
                                  </button>
                                </>
                              )}

                              {agendamento.status === "confirmado" && (
                                <>
                                  <button
                                    disabled={
                                      atualizandoId ===
                                      agendamento.id
                                    }
                                    onClick={() =>
                                      alterarStatus(
                                        agendamento.id,
                                        "concluido"
                                      )
                                    }
                                    className="rounded-full bg-[#d8a0a8] px-4 py-2 text-sm text-black transition hover:bg-[#e6b8bf] disabled:opacity-50"
                                  >
                                    Concluir
                                  </button>

                                  <button
                                    disabled={
                                      atualizandoId ===
                                      agendamento.id
                                    }
                                    onClick={() =>
                                      alterarStatus(
                                        agendamento.id,
                                        "cancelado"
                                      )
                                    }
                                    className="rounded-full border border-red-900/50 px-4 py-2 text-sm text-red-300 transition hover:bg-red-950/30 disabled:opacity-50"
                                  >
                                    Cancelar
                                  </button>
                                </>
                              )}

                              <button
                                onClick={() =>
                                  abrirWhatsApp(
                                    agendamento.telefone
                                  )
                                }
                                className="rounded-full border border-[#33272a] px-4 py-2 text-sm text-gray-300 transition hover:border-[#d8a0a8] hover:text-[#e6b8bf]"
                              >
                                WhatsApp
                              </button>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                )
              )}
            </div>
          )}
        </section>

        {/* DISPONIBILIDADE */}
        <section className="mt-12">
          <div className="rounded-3xl border border-[#d8a0a8]/30 bg-[#111111] p-6 sm:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#d8a0a8]">
                  Disponibilidade
                </p>

                <h2 className="mt-1 text-2xl font-light">
                  Controle sua agenda
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
                  Bloqueie dias ou horários em que você não deseja
                  atender. Esses horários serão retirados da
                  disponibilidade das clientes.
                </p>
              </div>

              <button
                onClick={() =>
                  setMostrarDisponibilidade(
                    !mostrarDisponibilidade
                  )
                }
                className="rounded-full bg-[#d8a0a8] px-6 py-3 text-sm font-medium text-black transition hover:bg-[#e6b8bf]"
              >
                {mostrarDisponibilidade
                  ? "Fechar controle"
                  : "Gerenciar disponibilidade"}
              </button>
            </div>

            {mostrarDisponibilidade && (
              <div className="mt-8 border-t border-[#2b2022] pt-8">
                <div className="grid gap-8 lg:grid-cols-2">
                  {/* NOVO BLOQUEIO */}
                  <div>
                    <h3 className="text-lg font-light">
                      Bloquear disponibilidade
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Escolha um dia inteiro ou apenas um horário.
                    </p>

                    <div className="mt-6 space-y-4">
                      <div>
                        <label className="mb-2 block text-sm text-gray-400">
                          Data
                        </label>

                        <input
                          type="date"
                          value={dataBloqueio}
                          onChange={(e) =>
                            setDataBloqueio(e.target.value)
                          }
                          className="w-full rounded-xl border border-[#33272a] bg-[#0b0b0b] px-4 py-3 text-white outline-none transition focus:border-[#d8a0a8]"
                        />
                      </div>

                      <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-[#33272a] bg-[#0b0b0b] p-4">
                        <input
                          type="checkbox"
                          checked={diaInteiro}
                          onChange={(e) =>
                            setDiaInteiro(e.target.checked)
                          }
                          className="h-4 w-4 accent-[#d8a0a8]"
                        />

                        <span>
                          <span className="block text-sm text-white">
                            Bloquear o dia inteiro
                          </span>

                          <span className="mt-1 block text-xs text-gray-500">
                            Nenhum horário desse dia ficará disponível.
                          </span>
                        </span>
                      </label>

                      {!diaInteiro && (
                        <div>
                          <label className="mb-2 block text-sm text-gray-400">
                            Horário
                          </label>

                          <input
                            type="time"
                            value={horarioBloqueio}
                            onChange={(e) =>
                              setHorarioBloqueio(e.target.value)
                            }
                            className="w-full rounded-xl border border-[#33272a] bg-[#0b0b0b] px-4 py-3 text-white outline-none transition focus:border-[#d8a0a8]"
                          />
                        </div>
                      )}

                      <div>
                        <label className="mb-2 block text-sm text-gray-400">
                          Motivo
                          <span className="ml-1 text-gray-600">
                            (opcional)
                          </span>
                        </label>

                        <input
                          type="text"
                          value={motivoBloqueio}
                          onChange={(e) =>
                            setMotivoBloqueio(e.target.value)
                          }
                          placeholder="Ex.: compromisso pessoal"
                          className="w-full rounded-xl border border-[#33272a] bg-[#0b0b0b] px-4 py-3 text-white placeholder:text-gray-700 outline-none transition focus:border-[#d8a0a8]"
                        />
                      </div>

                      {erroBloqueio && (
                        <div className="rounded-xl border border-red-900/50 bg-red-950/20 p-3 text-sm text-red-300">
                          {erroBloqueio}
                        </div>
                      )}

                      <button
                        onClick={adicionarBloqueio}
                        disabled={salvandoBloqueio}
                        className="w-full rounded-xl bg-[#d8a0a8] px-5 py-3 font-medium text-black transition hover:bg-[#e6b8bf] disabled:opacity-50"
                      >
                        {salvandoBloqueio
                          ? "Salvando..."
                          : "Bloquear disponibilidade"}
                      </button>
                    </div>
                  </div>

                  {/* BLOQUEIOS EXISTENTES */}
                  <div>
                    <h3 className="text-lg font-light">
                      Bloqueios cadastrados
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Aqui aparecem os dias e horários que foram
                      bloqueados.
                    </p>

                    {carregandoBloqueios ? (
                      <div className="mt-6 rounded-xl border border-[#2b2022] bg-[#0b0b0b] p-6 text-center text-sm text-gray-500">
                        Carregando bloqueios...
                      </div>
                    ) : bloqueios.length === 0 ? (
                      <div className="mt-6 rounded-xl border border-[#2b2022] bg-[#0b0b0b] p-6 text-center">
                        <p className="text-sm text-gray-400">
                          Nenhum bloqueio cadastrado.
                        </p>

                        <p className="mt-1 text-xs text-gray-600">
                          Sua agenda está livre.
                        </p>
                      </div>
                    ) : (
                      <div className="mt-6 max-h-[430px] space-y-3 overflow-y-auto pr-1">
                        {bloqueios.map((bloqueio) => (
                          <div
                            key={bloqueio.id}
                            className="flex items-center justify-between gap-4 rounded-xl border border-[#2b2022] bg-[#0b0b0b] p-4"
                          >
                            <div className="min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="text-sm text-[#e6b8bf]">
                                  📅{" "}
                                  {formatarData(
                                    bloqueio.data_bloqueio
                                  )}
                                </span>

                                <span className="text-xs text-gray-600">
                                  •
                                </span>

                                <span className="text-sm text-gray-300">
                                  {bloqueio.dia_inteiro
                                    ? "Dia inteiro"
                                    : formatarHorario(
                                        bloqueio.horario
                                      )}
                                </span>
                              </div>

                              {bloqueio.motivo && (
                                <p className="mt-1 truncate text-xs text-gray-500">
                                  {bloqueio.motivo}
                                </p>
                              )}
                            </div>

                            <button
                              onClick={() =>
                                removerBloqueio(bloqueio.id)
                              }
                              disabled={
                                excluindoBloqueioId ===
                                bloqueio.id
                              }
                              className="shrink-0 rounded-full border border-red-900/40 px-3 py-1.5 text-xs text-red-300 transition hover:bg-red-950/30 disabled:opacity-50"
                            >
                              {excluindoBloqueioId === bloqueio.id
                                ? "..."
                                : "Liberar"}
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}