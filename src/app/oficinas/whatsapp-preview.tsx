"use client";

import type { ReactNode } from "react";

interface WhatsAppPreviewProps {
  servico: string;
  veiculo: string;
  dia: string;
}

function Mensagem({ children, isMine }: { children: ReactNode; isMine: boolean }) {
  return (
    <div className={`flex items-end gap-2 ${isMine ? "flex-row-reverse" : ""}`}>
      {!isMine && (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-700 text-[10px] font-bold text-white">
          MS
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isMine
            ? "rounded-br-md bg-[#DCF8C6] text-gray-900"
            : "rounded-bl-md bg-white text-gray-900 shadow-sm"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

const DIAS_SEMANA = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

export default function WhatsAppPreview({ servico, veiculo, dia }: WhatsAppPreviewProps) {
  const data = dia ? new Date(dia + "T12:00:00") : null;
  const diaLabel = data
    ? `${data.getDate().toString().padStart(2, "0")}/${(data.getMonth() + 1).toString().padStart(2, "0")} (${DIAS_SEMANA[data.getDay()]})`
    : "a definir";

  const servicoLabel = servico || "serviço";
  const veiculoLabel = veiculo || "veículo";

  return (
    <div className="mx-auto max-w-sm overflow-hidden rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3 text-white">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-sm font-bold text-white">
          MS
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold">Auto Mecânica São Jorge</p>
          <p className="text-xs text-white/70">online</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 bg-gray-100 p-4">
        <Mensagem isMine={false}>
          <p className="font-semibold">Auto Mecânica São Jorge</p>
          <p>Olá! Como posso ajudar?</p>
        </Mensagem>
        <Mensagem isMine={true}>
          <p>Olá! Gostaria de agendar</p>
          <p>
            <span className="font-medium">Serviço:</span> {servicoLabel}
          </p>
          <p>
            <span className="font-medium">Veículo:</span> {veiculoLabel}
          </p>
          <p>
            <span className="font-medium">Dia:</span> {diaLabel}
          </p>
          <p>Pode confirmar o melhor horário?</p>
        </Mensagem>
        {servico && (
          <Mensagem isMine={false}>
            <p>Ótimo! Vou verificar a agenda e te retorno aqui mesmo.</p>
          </Mensagem>
        )}
      </div>
    </div>
  );
}
