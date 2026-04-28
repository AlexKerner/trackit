export type CepResponse = {
  cached: boolean;
  cep: string;
  data: CepData;
  message: string;
  status: string;
  success: boolean;
};

export type CepData = {
  abreviatura: string;
  bairro: string;
  cep: string;
  clique: string;
  localidade: string;
  localidadeSuperior: string;
  logradouro: string;
  nomeLogradouro: string;
  nomeMunicipio: string;
  numeroLocalidade: number;
  tipoCEP: number;
  tipoLogradouro: string;
  uf: string;
};