import { api } from "./api";

export async function getTracking(code: string) {
  const response = await api.get(`/rastreio/${code}`);
  return response.data;
}