// Mock JSON data — replace with API calls when backend is ready.
export type Role = "patient" | "doctor" | "volunteer" | "admin";

export interface MockUser {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
  phone?: string;
  department?: string;
  specialization?: string;
  experience?: number;
  bio?: string;
  address?: string;
  emergencyContact?: string;
  dob?: string;
  bloodGroup?: string;
}

export const users: MockUser[] = [
  { id: "u1", name: "Sarah Johnson", email: "patient@med.com", role: "patient", phone: "+1 555-0101", dob: "1990-04-12", bloodGroup: "O+", address: "221B Baker St, London", emergencyContact: "+1 555-0910" },
  { id: "u2", name: "Dr. Michael Chen", email: "doctor@med.com", role: "doctor", phone: "+1 555-0202", department: "Cardiology", specialization: "Interventional Cardiology", experience: 12, bio: "Board-certified cardiologist focused on preventive care." },
  { id: "u3", name: "Emma Wilson", email: "volunteer@med.com", role: "volunteer", phone: "+1 555-0303" },
  { id: "u4", name: "Alex Rivera", email: "admin@med.com", role: "admin", phone: "+1 555-0404" },
];

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  phone: string;
  email: string;
  bloodGroup: string;
  address: string;
  lastVisit: string;
  status: "Active" | "Inactive" | "Critical";
  condition?: string;
}

const firstNames = ["Sarah","John","Emma","Michael","Olivia","James","Sophia","Liam","Ava","Noah","Isabella","Ethan","Mia","Lucas","Charlotte","Aiden","Amelia","Mason","Harper","Elijah"];
const lastNames = ["Johnson","Smith","Williams","Brown","Jones","Garcia","Miller","Davis","Martinez","Hernandez","Lopez","Wilson","Anderson","Thomas","Taylor","Moore","Jackson","Martin","Lee","Perez"];
const conditions = ["Hypertension","Diabetes","Asthma","Migraine","Arthritis","Anemia","Allergies","Healthy","Cardiac follow-up","Post-surgery"];
const cities = ["New York","Boston","Chicago","Seattle","Austin","Denver","Miami","Portland"];

export const patients: Patient[] = Array.from({ length: 42 }, (_, i) => {
  const g = i % 2 === 0 ? "Female" : "Male";
  return {
    id: `P${1000 + i}`,
    name: `${firstNames[i % firstNames.length]} ${lastNames[(i + 3) % lastNames.length]}`,
    age: 18 + ((i * 7) % 60),
    gender: g as Patient["gender"],
    phone: `+1 555-${String(1000 + i).padStart(4, "0")}`,
    email: `patient${i + 1}@med.com`,
    bloodGroup: ["O+","A+","B+","AB+","O-","A-"][i % 6],
    address: `${100 + i} Main St, ${cities[i % cities.length]}`,
    lastVisit: `2026-0${1 + (i % 9)}-${String(10 + (i % 18)).padStart(2, "0")}`,
    status: (["Active","Active","Active","Inactive","Critical"] as const)[i % 5],
    condition: conditions[i % conditions.length],
  };
});

export interface Doctor {
  id: string;
  name: string;
  department: string;
  specialization: string;
  experience: number;
  rating: number;
  patients: number;
  availability: "Available" | "In Surgery" | "On Leave";
  email: string;
  phone: string;
  image?: string;
}

const departments = ["Cardiology","Neurology","Orthopedics","Pediatrics","Dermatology","General Medicine","Ophthalmology","Dentistry"];
const specs = ["Interventional","Surgical","Preventive","Diagnostic","Emergency","Chronic Care","Pediatric","Geriatric"];

export const doctors: Doctor[] = Array.from({ length: 18 }, (_, i) => ({
  id: `D${100 + i}`,
  name: `Dr. ${firstNames[(i + 4) % firstNames.length]} ${lastNames[(i + 5) % lastNames.length]}`,
  department: departments[i % departments.length],
  specialization: `${specs[i % specs.length]} ${departments[i % departments.length]}`,
  experience: 3 + (i % 20),
  rating: 4 + ((i * 13) % 10) / 10,
  patients: 40 + i * 7,
  availability: (["Available","Available","In Surgery","On Leave"] as const)[i % 4],
  email: `dr.${lastNames[(i + 5) % lastNames.length].toLowerCase()}@med.com`,
  phone: `+1 555-${String(2000 + i).padStart(4, "0")}`,
}));

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  department: string;
  date: string;
  time: string;
  token: number;
  status: "Pending" | "Approved" | "Completed" | "Cancelled" | "Rejected";
  type: "Consultation" | "Follow-up" | "Emergency" | "Check-up";
  reason?: string;
}

export const appointments: Appointment[] = Array.from({ length: 32 }, (_, i) => ({
  id: `A${5000 + i}`,
  patientId: patients[i % patients.length].id,
  patientName: patients[i % patients.length].name,
  doctorId: doctors[i % doctors.length].id,
  doctorName: doctors[i % doctors.length].name,
  department: doctors[i % doctors.length].department,
  date: `2026-0${1 + (i % 9)}-${String(5 + (i % 24)).padStart(2, "0")}`,
  time: `${9 + (i % 8)}:${i % 2 === 0 ? "00" : "30"} AM`,
  token: (i % 20) + 1,
  status: (["Pending","Approved","Completed","Cancelled","Approved","Pending"] as const)[i % 6],
  type: (["Consultation","Follow-up","Check-up","Emergency"] as const)[i % 4],
  reason: conditions[i % conditions.length],
}));

export interface Camp {
  id: string;
  name: string;
  description: string;
  date: string;
  endDate: string;
  location: string;
  status: "Upcoming" | "Ongoing" | "Completed";
  registered: number;
  capacity: number;
  doctorsAssigned: string[];
  volunteersAssigned: string[];
  services: string[];
  image?: string;
}

const campNames = ["Community Heart Health","Rural Vision Care","Diabetes Awareness","Free Dental Check-up","Child Immunization","Women's Wellness","Senior Care Camp","Mental Health Support","Cancer Screening","Blood Donation Drive"];
const locations = ["Central Park","City Hall Plaza","Riverside Community Center","Downtown Convention Hall","Sunrise School","Green Valley Village","North Bay Hospital Grounds","West Side Community"];

export const camps: Camp[] = Array.from({ length: 12 }, (_, i) => ({
  id: `C${300 + i}`,
  name: campNames[i % campNames.length],
  description: "Free health screening and consultation open to the public. Includes doctor visits, basic diagnostics and medication.",
  date: `2026-${String(1 + (i % 12)).padStart(2, "0")}-${String(5 + (i % 25)).padStart(2, "0")}`,
  endDate: `2026-${String(1 + (i % 12)).padStart(2, "0")}-${String(7 + (i % 25)).padStart(2, "0")}`,
  location: locations[i % locations.length],
  status: (["Upcoming","Upcoming","Ongoing","Completed","Upcoming","Completed"] as const)[i % 6],
  registered: 50 + i * 23,
  capacity: 300 + i * 20,
  doctorsAssigned: doctors.slice(0, 3 + (i % 4)).map(d => d.id),
  volunteersAssigned: [`V${100+i}`, `V${101+i}`, `V${102+i}`],
  services: ["General checkup","Blood pressure","Blood sugar","Eye test","Free medicine"].slice(0, 3 + (i % 3)),
}));

export interface Prescription {
  id: string;
  patientId: string;
  doctorName: string;
  date: string;
  diagnosis: string;
  medicines: { name: string; dosage: string; frequency: string; duration: string }[];
  notes: string;
}

export const prescriptions: Prescription[] = Array.from({ length: 10 }, (_, i) => ({
  id: `RX${700 + i}`,
  patientId: patients[i].id,
  doctorName: doctors[i % doctors.length].name,
  date: `2026-0${1 + (i % 9)}-${String(3 + i).padStart(2, "0")}`,
  diagnosis: conditions[i % conditions.length],
  medicines: [
    { name: "Paracetamol 500mg", dosage: "1 tablet", frequency: "3x daily", duration: "5 days" },
    { name: "Amoxicillin 250mg", dosage: "1 capsule", frequency: "2x daily", duration: "7 days" },
    { name: "Vitamin D3", dosage: "1 tablet", frequency: "1x daily", duration: "30 days" },
  ].slice(0, 2 + (i % 2)),
  notes: "Take medication after meals. Follow up in 2 weeks. Drink plenty of water.",
}));

export interface LabReport {
  id: string;
  patientId: string;
  test: string;
  date: string;
  status: "Pending" | "Completed" | "In Progress";
  result?: string;
  doctorName: string;
}

const tests = ["Complete Blood Count","Lipid Profile","Blood Sugar (Fasting)","Thyroid (TSH)","Liver Function","Kidney Function","Urine Analysis","ECG","X-Ray Chest","MRI Brain"];
export const labReports: LabReport[] = Array.from({ length: 14 }, (_, i) => ({
  id: `L${800 + i}`,
  patientId: patients[i % patients.length].id,
  test: tests[i % tests.length],
  date: `2026-0${1 + (i % 9)}-${String(2 + i).padStart(2, "0")}`,
  status: (["Completed","Completed","Pending","In Progress"] as const)[i % 4],
  result: i % 4 < 2 ? "Within normal range" : undefined,
  doctorName: doctors[i % doctors.length].name,
}));

export interface MedHistoryEntry {
  id: string;
  date: string;
  type: string;
  description: string;
  doctor: string;
}
export const medicalHistory: MedHistoryEntry[] = [
  { id: "MH1", date: "2026-01-14", type: "Consultation", description: "Annual physical exam — all indicators normal.", doctor: "Dr. Michael Chen" },
  { id: "MH2", date: "2025-11-02", type: "Prescription", description: "Prescribed medication for seasonal allergies.", doctor: "Dr. Sarah Park" },
  { id: "MH3", date: "2025-08-19", type: "Lab Report", description: "Cholesterol slightly elevated — dietary changes advised.", doctor: "Dr. Michael Chen" },
  { id: "MH4", date: "2025-05-06", type: "Vaccination", description: "Influenza vaccine administered.", doctor: "Nurse J. Adams" },
  { id: "MH5", date: "2024-12-11", type: "Surgery", description: "Minor outpatient procedure — full recovery.", doctor: "Dr. Robert Lee" },
];

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "info" | "success" | "warning" | "error";
  read: boolean;
}
export const notifications: NotificationItem[] = [
  { id: "N1", title: "Appointment Confirmed", message: "Your appointment with Dr. Chen is confirmed for tomorrow 10:00 AM.", time: "2 min ago", type: "success", read: false },
  { id: "N2", title: "New Lab Report", message: "Your Complete Blood Count report is ready to view.", time: "1 hour ago", type: "info", read: false },
  { id: "N3", title: "Camp Registration Open", message: "Community Heart Health camp registration is now open.", time: "3 hours ago", type: "info", read: false },
  { id: "N4", title: "Prescription Refill", message: "Time to refill your Amoxicillin prescription.", time: "Yesterday", type: "warning", read: true },
  { id: "N5", title: "Payment Received", message: "Consultation fee received successfully.", time: "2 days ago", type: "success", read: true },
];

export interface ActivityLog {
  id: string;
  user: string;
  action: string;
  target: string;
  time: string;
  ip: string;
}
export const activityLogs: ActivityLog[] = Array.from({ length: 15 }, (_, i) => ({
  id: `LOG${i + 1}`,
  user: users[i % users.length].name,
  action: ["Logged in","Created appointment","Updated profile","Deleted record","Exported report","Registered patient"][i % 6],
  target: ["System","Appointments","Profile","Patients","Reports","Camps"][i % 6],
  time: `2026-01-${String(20 - i).padStart(2, "0")} 1${i % 3}:0${i % 6}`,
  ip: `192.168.1.${10 + i}`,
}));

// Chart data
export const appointmentsByMonth = [
  { month: "Jan", appointments: 120, completed: 96 },
  { month: "Feb", appointments: 145, completed: 130 },
  { month: "Mar", appointments: 168, completed: 150 },
  { month: "Apr", appointments: 192, completed: 175 },
  { month: "May", appointments: 210, completed: 190 },
  { month: "Jun", appointments: 245, completed: 220 },
  { month: "Jul", appointments: 268, completed: 244 },
];

export const patientsByDept = [
  { name: "Cardiology", value: 320 },
  { name: "Neurology", value: 210 },
  { name: "Orthopedics", value: 180 },
  { name: "Pediatrics", value: 260 },
  { name: "Dermatology", value: 140 },
  { name: "General", value: 380 },
];

export const campParticipation = [
  { camp: "Heart", registered: 240, attended: 210 },
  { camp: "Vision", registered: 180, attended: 165 },
  { camp: "Diabetes", registered: 320, attended: 290 },
  { camp: "Dental", registered: 150, attended: 140 },
  { camp: "Child", registered: 210, attended: 195 },
];

export const revenueTrend = [
  { month: "Jan", revenue: 24000 },
  { month: "Feb", revenue: 28500 },
  { month: "Mar", revenue: 31200 },
  { month: "Apr", revenue: 36800 },
  { month: "May", revenue: 42100 },
  { month: "Jun", revenue: 48900 },
  { month: "Jul", revenue: 54300 },
];

export const testimonials = [
  { name: "Rachel Green", role: "Patient", text: "The camp saved my life — early diabetes diagnosis and immediate support. Truly world-class.", rating: 5 },
  { name: "David Kim", role: "Volunteer", text: "Best organized medical camp I've ever helped run. Everything from check-in to reporting is seamless.", rating: 5 },
  { name: "Dr. Priya Patel", role: "Cardiologist", text: "The queue and consultation tools let me see 40% more patients per day without burnout.", rating: 5 },
];

export const faqs = [
  { q: "How do I register for a medical camp?", a: "Sign in as a Patient, go to Medical Camps and click Register on any upcoming camp. You will receive a QR code confirmation." },
  { q: "Are the camps really free?", a: "Yes. All screenings, basic diagnostics and medication distributed at camps are provided free of charge." },
  { q: "Can I book a regular hospital appointment here?", a: "Absolutely — the Book Appointment page lets patients pick a doctor, date and time slot." },
  { q: "How is my medical data protected?", a: "We follow enterprise-grade encryption at rest and in transit. Role-based access ensures only your care team sees your records." },
  { q: "Can volunteers see patient medical history?", a: "No. Volunteers only see check-in, queue and camp assignment data — no clinical records." },
];

export const departmentsList = departments;
