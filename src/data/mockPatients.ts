export type MockPatientAccount = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
};

export const mockPatients: MockPatientAccount[] = [
  { fullName: "Ava Patel", email: "ava.patient@medicamp.dev", phone: "+15551230001", password: "Passw0rd!" },
];