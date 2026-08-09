// Axios-shaped service layer — currently returns mock data.
// Swap the internals of each function for real HTTP calls when the
// Node.js/Express backend + MySQL DB is available. Signatures are stable.
import {
  patients as mockPatients,
  doctors as mockDoctors,
  appointments as mockAppts,
  camps as mockCamps,
  prescriptions as mockRx,
  labReports as mockLabs,
} from "@/mock/data";

// Real axios instance (enable with a real backend):
// import axios from "axios";
// export const api = axios.create({ baseURL: import.meta.env.VITE_API_URL, withCredentials: true });
// api.interceptors.request.use((cfg) => {
//   const token = localStorage.getItem("mcm_token");
//   if (token) cfg.headers.Authorization = `Bearer ${token}`;
//   return cfg;
// });

const delay = <T,>(data: T, ms = 250) => new Promise<T>(r => setTimeout(() => r(data), ms));

export const patientService = {
  list: () => delay(mockPatients),
  get: (id: string) => delay(mockPatients.find(p => p.id === id) ?? null),
};
export const doctorService = {
  list: () => delay(mockDoctors),
  get: (id: string) => delay(mockDoctors.find(d => d.id === id) ?? null),
};
export const appointmentService = {
  list: () => delay(mockAppts),
  create: (data: unknown) => delay({ ok: true, data }),
};
export const campService = {
  list: () => delay(mockCamps),
  get: (id: string) => delay(mockCamps.find(c => c.id === id) ?? null),
};
export const prescriptionService = { list: () => delay(mockRx) };
export const labService = { list: () => delay(mockLabs) };
