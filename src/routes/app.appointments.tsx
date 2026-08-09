import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/app/PageHeader";
import { StatusBadge } from "@/components/app/StatusBadge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { appointments } from "@/mock/data";
import { useApp } from "@/context/AppContext";
import { Search, Plus, Check, X, Ban } from "lucide-react";
import { usePagination } from "@/hooks/usePagination";
import { toast } from "sonner";

export const Route = createFileRoute("/app/appointments")({ component: AppointmentsPage });

function AppointmentsPage() {
  const { user } = useApp();
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<string>("all");
  const [items, setItems] = useState(appointments);

  const filtered = useMemo(() => items.filter(a =>
    (status === "all" || a.status === status) &&
    (q === "" || a.patientName.toLowerCase().includes(q.toLowerCase()) || a.doctorName.toLowerCase().includes(q.toLowerCase()))
  ), [items, q, status]);
  const p = usePagination(filtered, 8);

  const setStatusFor = (id: string, s: typeof items[number]["status"]) => {
    setItems(prev => prev.map(a => a.id === id ? { ...a, status: s } : a));
    toast.success(`Appointment ${s.toLowerCase()}`);
  };

  const canManage = user?.role === "doctor" || user?.role === "admin";
  const isPatient = user?.role === "patient";

  return (
    <div>
      <PageHeader
        title="Appointments"
        description="Manage bookings, approvals and status."
        crumbs={[{ label: "Appointments" }]}
        actions={isPatient && (
          <Link to="/app/book-appointment"><Button className="gradient-primary text-white"><Plus className="mr-1 h-4 w-4" /> Book</Button></Link>
        )}
      />
      <Card className="p-4 sm:p-6">
        <div className="mb-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:flex-wrap">
          <div className="relative min-w-0 sm:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search patient or doctor…" value={q} onChange={e => setQ(e.target.value)} className="pl-9" />
          </div>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Approved">Approved</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
              <SelectItem value="Cancelled">Cancelled</SelectItem>
              <SelectItem value="Rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="overflow-x-auto rounded-xl border border-border/60">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead><TableHead>Patient</TableHead><TableHead>Doctor</TableHead>
                <TableHead>Department</TableHead><TableHead>Date / Time</TableHead>
                <TableHead>Token</TableHead><TableHead>Type</TableHead>
                <TableHead>Status</TableHead><TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {p.current.map(a => (
                <TableRow key={a.id}>
                  <TableCell className="font-mono text-xs">{a.id}</TableCell>
                  <TableCell className="font-medium">{a.patientName}</TableCell>
                  <TableCell>{a.doctorName}</TableCell>
                  <TableCell><Badge variant="secondary">{a.department}</Badge></TableCell>
                  <TableCell><div className="text-sm">{a.date}</div><div className="text-xs text-muted-foreground">{a.time}</div></TableCell>
                  <TableCell><span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-mono text-primary">#{a.token}</span></TableCell>
                  <TableCell><Badge variant="outline">{a.type}</Badge></TableCell>
                  <TableCell><StatusBadge status={a.status} /></TableCell>
                  <TableCell className="text-right">
                    <div className="inline-flex gap-1">
                      {canManage && a.status === "Pending" && (
                        <>
                          <Button size="icon" variant="ghost" onClick={() => setStatusFor(a.id, "Approved")}><Check className="h-4 w-4 text-success" /></Button>
                          <Button size="icon" variant="ghost" onClick={() => setStatusFor(a.id, "Rejected")}><X className="h-4 w-4 text-destructive" /></Button>
                        </>
                      )}
                      {a.status !== "Cancelled" && a.status !== "Completed" && (
                        <Button size="icon" variant="ghost" onClick={() => setStatusFor(a.id, "Cancelled")}><Ban className="h-4 w-4" /></Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {p.current.length === 0 && (
                <TableRow><TableCell colSpan={9} className="py-8 text-center text-muted-foreground">No appointments match your filters.</TableCell></TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <Pager p={p} />
      </Card>
    </div>
  );
}

function Pager({ p }: { p: ReturnType<typeof usePagination<unknown>> }) {
  return (
    <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
      <p>Page {p.page} of {p.totalPages} · {p.total} results</p>
      <div className="flex gap-1">
        <Button size="sm" variant="outline" onClick={p.prev} disabled={p.page === 1}>Prev</Button>
        <Button size="sm" variant="outline" onClick={p.next} disabled={p.page === p.totalPages}>Next</Button>
      </div>
    </div>
  );
}
