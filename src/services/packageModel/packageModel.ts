export type TrackingResponse = {
  codigo: string;
  status: string;
  success: boolean;
  eventoMaisRecente: TrackingEvent;
  linkDetalhesCompletos: string;
  message: string;
}
export type TrackingEvent = {
  codigo: string;
  descricao: string;
  detalhe: string;
  data: string;
  local: string;
  destino: string | null;
};

type Status = "in_transit" | "delivered" | "out_for_delivery";

export type Package = {
  id: string;
  code: string;
  nickname: string;
  status: Status;
  local: string;
  date: string;
  description: string;
}
