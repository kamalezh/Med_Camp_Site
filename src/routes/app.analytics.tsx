import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/PageHeader";
import { Card } from "@/components/ui/card";
import { StatCard } from "@/components/app/StatCard";
import { appointmentsByMonth, patientsByDept, campParticipation, revenueTrend } from "@/mock/data";
import { ResponsiveContainer, BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, CartesianGrid, Legend, LineChart, Line } from "recharts";
import { Users, TrendingUp, Tent, DollarSign } from "lucide-react";

export const Route = createFileRoute("/app/analytics")({ component: Analytics });

function Analytics() {
  return (
    <div className="space-y-6">
      <PageHeader title="Analytics" description="Hospital-wide performance metrics." crumbs={[{ label: "Analytics" }]} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Patients" value="12,480" icon={Users} tone="primary" delta="+8.4%" />
        <StatCard label="Appointments" value="4,320" icon={TrendingUp} tone="success" delta="+12%" />
        <StatCard label="Camps" value="32" icon={Tent} tone="warning" delta="+3 new" />
        <StatCard label="Revenue" value="$412K" icon={DollarSign} tone="success" delta="+21%" />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="p-6"><h3 className="mb-4 font-semibold">Appointments</h3>
          <div className="h-72"><ResponsiveContainer><AreaChart data={appointmentsByMonth}>
            <defs><linearGradient id="a1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--primary)" stopOpacity={0.4}/><stop offset="100%" stopColor="var(--primary)" stopOpacity={0}/></linearGradient></defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" /><XAxis dataKey="month" fontSize={12} /><YAxis fontSize={12} /><Tooltip />
            <Area dataKey="appointments" stroke="var(--primary)" fill="url(#a1)" />
          </AreaChart></ResponsiveContainer></div>
        </Card>
        <Card className="p-6"><h3 className="mb-4 font-semibold">Revenue Trend</h3>
          <div className="h-72"><ResponsiveContainer><LineChart data={revenueTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" /><XAxis dataKey="month" fontSize={12} /><YAxis fontSize={12} /><Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="var(--secondary)" strokeWidth={3} dot={{ fill: "var(--secondary)" }} />
          </LineChart></ResponsiveContainer></div>
        </Card>
        <Card className="p-6"><h3 className="mb-4 font-semibold">Camp Participation</h3>
          <div className="h-72"><ResponsiveContainer><BarChart data={campParticipation}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" /><XAxis dataKey="camp" fontSize={12} /><YAxis fontSize={12} /><Tooltip /><Legend />
            <Bar dataKey="registered" fill="var(--primary)" radius={[8,8,0,0]} />
            <Bar dataKey="attended" fill="var(--secondary)" radius={[8,8,0,0]} />
          </BarChart></ResponsiveContainer></div>
        </Card>
        <Card className="p-6"><h3 className="mb-4 font-semibold">Patients by Department</h3>
          <div className="h-72"><ResponsiveContainer><PieChart>
            <Pie data={patientsByDept} dataKey="value" nameKey="name" innerRadius={50} outerRadius={90} paddingAngle={3}>
              {patientsByDept.map((_, i) => <Cell key={i} fill={["var(--chart-1)","var(--chart-2)","var(--chart-3)","var(--chart-4)","var(--chart-5)","var(--primary-glow)"][i%6]} />)}
            </Pie><Tooltip /><Legend />
          </PieChart></ResponsiveContainer></div>
        </Card>
      </div>
    </div>
  );
}
