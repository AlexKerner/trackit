import { api } from "./api";

export async function getAddressByCep(cep: string) {
  const response = await api.get(`/cep/${cep}`);
  return response.data;
}