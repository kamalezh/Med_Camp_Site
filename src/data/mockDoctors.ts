export type MockDoctorAccount = {
  fullName: string;
  email: string;
  phone: string;
  regNumber: string;
  specialization: string;
  hospital: string;
  password: string;
};

export const mockDoctors: MockDoctorAccount[] = [
  {
    fullName: "Dr. Rohan Mehta",
    email: "rohan.doctor@medicamp.dev",
    phone: "+15551230002",
    regNumber: "MCI-2245-DL",
    specialization: "Cardiology",
    hospital: "MediCamp General",
    password: "Passw0rd!",
  },
];