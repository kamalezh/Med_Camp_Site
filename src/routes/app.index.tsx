import { createFileRoute, Link } from "@tanstack/react-router";
import { useApp } from "@/context/AppContext";
import { PageHeader } from "@/components/app/PageHeader";
import { StatCard } from "@/components/app/StatCard";
import { StatusBadge } from "@/components/app/StatusBadge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users, Calendar, Tent, HeartPulse, Stethoscope, ClipboardCheck, ListOrdered,
  UserPlus, FileText, TrendingUp, Activity, Pill,
} from "lucide-react";
import {
  appointments, camps, patients, doctors, appointmentsByMonth, patientsByDept,
} from "@/mock/data";
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  PieChart, Pie, Cell, Legend,
} from "recharts";

export const Route = createFileRoute("/app/")({
  component: Dashboard,
});

function Dashboard() {
  const { user } = useApp();
  if (!user) return null;
  const role = user.role;

  const upcoming = appointments.filter(a => a.status === "Approved" || a.status === "Pending").slice(0, 5);
  const activeCamps = camps.filter(c => c.status !== "Completed").slice(0, 4);

  const greeting = `Welcome back, ${user.name.split(" ")[0]} 👋`;
  const desc = ({
    patient: "Here's your health snapshot.",
    doctor: "Your consultations, queue and camp schedule at a glance.",
    volunteer: "Your tasks and assigned camps for today.",
    admin: "Hospital-wide performance and operations.",
  } as const)[role];

  return (
    <div className="space-y-6">
      <PageHeader title={greeting} description={desc} />

      {/* Role-based stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {role === "patient" && (<>
          <StatCard label="Upcoming Appointments" value={3} icon={Calendar} tone="primary" delta="+1 this week" />
          <StatCard label="Active Prescriptions" value={2} icon={Pill} tone="success" />
          <StatCard label="Pending Reports" value={1} icon={FileText} tone="warning" />
          <StatCard label="Registered Camps" value={2} icon={Tent} tone="primary" />
        </>)}
        {role === "doctor" && (<>
          <StatCard label="Today's Appointments" value={12} icon={Calendar} tone="primary" delta="+3 vs yesterday" />
          <StatCard label="Patients in Queue" value={5} icon={ListOrdered} tone="warning" />
          <StatCard label="Consultations (Wk)" value={64} icon={Stethoscope} tone="success" delta="+18%" />
          <StatCard label="Assigned Camps" value={3} icon={Tent} tone="primary" />
        </>)}
        {role === "volunteer" && (<>
          <StatCard label="Assigned Camps" value={2} icon={Tent} tone="primary" />
          <StatCard label="Today's Tasks" value={7} icon={ClipboardCheck} tone="warning" />
          <StatCard label="Patients Registered" value={38} icon={UserPlus} tone="success" delta="Today" />
          <StatCard label="Attendance Rate" value="96%" icon={TrendingUp} tone="success" />
        </>)}
        {role === "admin" && (<>
          <StatCard label="Total Patients" value={patients.length * 24} icon={Users} tone="primary" delta="+12% MoM" />
          <StatCard label="Active Doctors" value={doctors.length} icon={Stethoscope} tone="success" />
          <StatCard label="Ongoing Camps" value={camps.filter(c => c.status !== "Completed").length} icon={Tent} tone="warning" />
          <StatCard label="Revenue (MTD)" value="$54.3K" icon={TrendingUp} tone="success" delta="+21%" />
        </>)}
      </div>

      {/* Charts + Activity */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 p-6 hover-lift">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Appointments trend</h3>
              <p className="text-xs text-muted-foreground">Last 7 months</p>
            </div>
            <Activity className="h-5 w-5 text-primary" />
          </div>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={appointmentsByMonth}>
                <defs>
                  <linearGradient id="c1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="c2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--secondary)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="var(--secondary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--muted-foreground)" fontSize={12} />
                <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 12 }} />
                <Area type="monotone" dataKey="appointments" stroke="var(--primary)" fill="url(#c1)" strokeWidth={2} />
                <Area type="monotone" dataKey="completed" stroke="var(--secondary)" fill="url(#c2)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6 hover-lift">
          <h3 className="text-lg font-semibold">By department</h3>
          <p className="text-xs text-muted-foreground">Patient distribution</p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={patientsByDept} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={2}>
                  {patientsByDept.map((_, i) => (
                    <Cell key={i} fill={["var(--chart-1)","var(--chart-2)","var(--chart-3)","var(--chart-4)","var(--chart-5)","var(--primary-glow)"][i % 6]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 12 }} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: 11 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Upcoming / camps */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="p-6 hover-lift">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Upcoming appointments</h3>
            <Link to="/app/appointments"><Button size="sm" variant="ghost">View all</Button></Link>
          </div>
          <div className="space-y-3">
            {upcoming.map(a => (
              <div key={a.id} className="flex items-center gap-3 rounded-xl border border-border/50 p-3 hover:bg-muted/30">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{a.patientName}</p>
                  <p className="truncate text-xs text-muted-foreground">{a.doctorName} · {a.department}</p>
                </div>
                <div className="text-right text-xs">
                  <p className="font-medium">{a.date}</p>
                  <p className="text-muted-foreground">{a.time}</p>
                </div>
                <StatusBadge status={a.status} />
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 hover-lift">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Active camps</h3>
            <Link to="/app/camps"><Button size="sm" variant="ghost">Explore</Button></Link>
          </div>
          <div className="space-y-3">
            {activeCamps.map(c => (
              <Link key={c.id} to="/app/camps/$id" params={{ id: c.id }} className="block rounded-xl border border-border/50 p-3 hover:bg-muted/30">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{c.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{c.location} · {c.date}</p>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full gradient-primary" style={{ width: `${Math.min(100, (c.registered / c.capacity) * 100)}%` }} />
                    </div>
                    <p className="mt-1 text-[10px] text-muted-foreground">{c.registered}/{c.capacity} registered</p>
                  </div>
                  <StatusBadge status={c.status} />
                </div>
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
