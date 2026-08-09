import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/app/PageHeader";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "@/components/app/StatusBadge";
import { doctors, departmentsList } from "@/mock/data";
import { Search, Plus, Star } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export const Route = createFileRoute("/app/doctors")({ component: DoctorsPage });
function DoctorsPage() {
  const [q, setQ] = useState(""); const [dept, setDept] = useState("all");
  const list = doctors.filter(d => (dept === "all" || d.department === dept) && d.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <div>
      <PageHeader title="Doctors" description={`${doctors.length} doctors on staff`} crumbs={[{ label: "Doctors" }]}
        actions={<Button className="gradient-primary text-white" onClick={() => toast.success("Doctor form opened")}><Plus className="mr-1 h-4 w-4" /> Add Doctor</Button>} />
      <div className="mb-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:flex-wrap">
        <div className="relative min-w-0 sm:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search doctors…" className="pl-9" />
        </div>
        <Select value={dept} onValueChange={setDept}>
          <SelectTrigger className="w-48"><SelectValue /></SelectTrigger>
          <SelectContent><SelectItem value="all">All departments</SelectItem>{departmentsList.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}</SelectContent>
        </Select>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(d => (
          <Card key={d.id} className="p-5 hover-lift">
            <div className="flex items-start gap-3">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl gradient-primary text-lg font-bold text-white shadow-glow">{d.name.replace("Dr. ","").split(" ").map(n=>n[0]).slice(0,2).join("")}</div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold">{d.name}</p>
                <p className="truncate text-xs text-muted-foreground">{d.specialization}</p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{d.department}</Badge>
                  <StatusBadge status={d.availability} />
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="rounded-lg bg-muted/40 p-2"><p className="font-bold">{d.experience}y</p><p className="text-muted-foreground">Exp</p></div>
              <div className="rounded-lg bg-muted/40 p-2"><p className="flex items-center justify-center gap-1 font-bold"><Star className="h-3 w-3 fill-warning text-warning" />{d.rating.toFixed(1)}</p><p className="text-muted-foreground">Rating</p></div>
              <div className="rounded-lg bg-muted/40 p-2"><p className="font-bold">{d.patients}</p><p className="text-muted-foreground">Patients</p></div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
