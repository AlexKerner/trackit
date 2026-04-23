import { Package } from "../packageModel/packageModel";

export const mockPackages: Package[] = [
  {
    id: "1",
    code: "BR123",
    nickname: "Tênis Nike",
    status: "delivered",
    description: "Objeto entregue ao destinatário",
    location: "São Paulo/SP",
    date: "2026-01-15T14:30:00.000Z",
  },
  {
    id: "2",
    code: "BR456",
    nickname: "Mouse LogicTec",
    status: "out_for_delivery",
    description: "Saiu para entrega",
    location: "Fortaleza/CE",
    date: "2026-01-20T08:00:00.000Z",
  },
  {
    id: "3",
    code: "BR789",
    nickname: "Livro Hobbit",
    status: "in_transit",
    description: "Objeto em trânsito",
    location: "Recife/PE",
    date: "2026-01-18T10:00:00.000Z",
  },
  {
    id: "4",
    code: "BR989",
    nickname: "Teclado AULAF75",
    status: "delivered",
    description: "Objeto entregue ao destinatário",
    location: "Recife/PE",
    date: "2026-01-18T10:00:00.000Z",
  },
  {
    id: "5",
    code: "BR767",
    nickname: "LightBar Monitor",
    status: "in_transit",
    description: "Objeto em trânsito",
    location: "Fortaleza/CE",
    date: "2026-03-28T16:00:00.000Z",
  }
];