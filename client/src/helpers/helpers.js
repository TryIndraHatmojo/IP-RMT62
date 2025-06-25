import axios from "axios";
import { toast } from "react-toastify";

export function formatRupiah(money) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(money);
}

export function getToken() {
  return localStorage.getItem("access_token");
}

export function getTokenPayload() {
  const base64Payload = localStorage.getItem("access_token").split(".")[1];
  let payload = atob(base64Payload);
  return JSON.parse(payload);
}

export const apiModalNekat = axios.create({
  baseURL: "http://localhost:3000",
});
