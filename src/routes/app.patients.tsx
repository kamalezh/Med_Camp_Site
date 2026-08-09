import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/app/PageHeader";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/app/StatusBadge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { patients } from "@/mock/data";
import { Search, Plus, Eye, Pencil, Trash2 } from "lucide-react";
import { usePagination } from "@/hooks/usePagination";
import { toast } from "sonner";

export const Route = createFileRoute("/app/patients")({ component: PatientsPage });

function PatientsPage() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("all");
  const [items, setItems] = useState(patients);
  const filtered = useMemo(() => items.filter(p =>
    (status === "all" || p.status === status) &&
    (p.name.toLowerCase().includes(q.toLowerCase()) || p.id.toLowerCase().includes(q.toLowerCase()))
  ), [items, q, status]);
  const p = usePagination(filtered, 10);

  return (
    <div>
      <PageHeader
        title="Patients"
        description={`${items.length} registered patients`}
        crumbs={[{ label: "Patients" }]}
        actions={<Button className="gradient-primary text-white" onClick={() => toast.success("Registration form opened")}><Plus className="mr-1 h-4 w-4" /> Add Patient</Button>}
      />
      <Card className="p-4 sm:p-6">
        <div className="mb-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:flex-wrap">
          <div className="relative min-w-0 sm:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search name or ID…" value={q} onChange={e => setQ(e.target.value)} className="pl-9" />
          </div>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
              <SelectItem value="Critical">Critical</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="overflow-x-auto rounded-xl border border-border/60">
          <Table>
            <TableHeader><TableRow>
              <TableHead>ID</TableHead><TableHead>Name</TableHead><TableHead>Age</TableHead><TableHead>Gender</TableHead>
              <TableHead>Blood</TableHead><TableHead>Contact</TableHead><TableHead>Last Visit</TableHead>
              <TableHead>Status</TableHead><TableHead className="text-right">Actions</TableHead>
            </TableRow></TableHeader>
            <TableBody>
              {p.current.map(pt => (
                <TableRow key={pt.id}>
                  <TableCell className="font-mono text-xs">{pt.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="grid h-8 w-8 place-items-center rounded-full gradient-primary text-xs font-bold text-white">{pt.name.split(" ").map(n=>n[0]).slice(0,2).join("")}</div>
                      <div><p className="text-sm font-medium">{pt.name}</p><p className="text-xs text-muted-foreground">{pt.email}</p></div>
                    </div>
                  </TableCell>
                  <TableCell>{pt.age}</TableCell>
                  <TableCell>{pt.gender}</TableCell>
                  <TableCell><span className="rounded-md bg-destructive/10 px-2 py-0.5 text-xs font-mono text-destructive">{pt.bloodGroup}</span></TableCell>
                  <TableCell className="text-xs">{pt.phone}</TableCell>
                  <TableCell className="text-xs">{pt.lastVisit}</TableCell>
                  <TableCell><StatusBadge status={pt.status} /></TableCell>
                  <TableCell className="text-right">
                    <div className="inline-flex gap-1">
                      <Link to="/app/patients/$id" params={{ id: pt.id }}><Button size="icon" variant="ghost"><Eye className="h-4 w-4" /></Button></Link>
                      <Button size="icon" variant="ghost" onClick={() => toast.info("Edit form")}><Pencil className="h-4 w-4" /></Button>
                      <Button size="icon" variant="ghost" onClick={() => { setItems(prev => prev.filter(x => x.id !== pt.id)); toast.success("Deleted"); }}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <p>Page {p.page} of {p.totalPages} · {p.total} results</p>
          <div className="flex gap-1">
            <Button size="sm" variant="outline" onClick={p.prev} disabled={p.page === 1}>Prev</Button>
            <Button size="sm" variant="outline" onClick={p.next} disabled={p.page === p.totalPages}>Next</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
