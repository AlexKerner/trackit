import axios from "axios";

const token = "sr_live__LXzSADiN-jogg9_-8lfYOU7_YowjCfVMkbog8pSzeg"

export const api = axios.create({
  baseURL: "https://seurastreio.com.br/api/public",
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${token}`
  }
});