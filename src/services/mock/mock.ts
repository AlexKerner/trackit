import { Package } from "../packageModel/packageModel";

export const mockCep = {
  cep: "04431170",
  status: "found",
  success: true,
  data: {
    cep: "04431170",
    uf: "SP",
    numeroLocalidade: 96681,
    localidade: "São Paulo",
    logradouro: "Rua Gabriela Besanzoni-Lage",
    tipoLogradouro: "Rua",
    nomeLogradouro: "Gabriela Besanzoni-Lage",
    abreviatura: "R Gabriela Besanzoni-Lage",
    bairro: "Jardim Selma",
    nomeMunicipio: "São Paulo",
    localidadeSuperior: "São Paulo",
    tipoCEP: 2,
    clique: "N",
  },
  cached: false,
  message: "CEP consultado com sucesso na API dos Correios.",
};

export const mockPackages: Package[] = [
  {
    id: "1",
    code: "BR123",
    nickname: "Tênis Nike",
    status: "delivered",
    description: "Objeto entregue ao destinatário",
    location: "São Paulo/SP",
    date: "2026-04-17T14:30:00.000Z",
  },
  {
    id: "2",
    code: "BR456",
    nickname: "Mouse LogicTec",
    status: "out_for_delivery",
    description: "Saiu para entrega",
    location: "Fortaleza/CE",
    date: "2026-04-27T24:00:00.000Z",
  },
  {
    id: "3",
    code: "BR789",
    nickname: "Livro Hobbit",
    status: "in_transit",
    description: "Objeto em trânsito",
    location: "Recife/PE",
    date: "2026-03-20T10:00:00.000Z",
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