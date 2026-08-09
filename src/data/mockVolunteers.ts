export type MockVolunteerAccount = {
  fullName: string;
  email: string;
  phone: string;
  age: number;
  address: string;
  skills: string;
  availability: string;
  password: string;
};

export const mockVolunteers: MockVolunteerAccount[] = [
  {
    fullName: "Kiran Shah",
    email: "kiran.volunteer@medicamp.dev",
    phone: "+15551230003",
    age: 27,
    address: "12 Grove St, Springfield",
    skills: "First aid, translation",
    availability: "Weekends",
    password: "Passw0rd!",
  },
];