export type MockAdminAccount = {
  fullName: string;
  email: string;
  adminId: string;
  password: string;
};

export const mockAdmins: MockAdminAccount[] = [
  { fullName: "Priya Nair", email: "priya.admin@medicamp.dev", adminId: "ADM-0001", password: "Passw0rd!" },
];