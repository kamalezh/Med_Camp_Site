import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/PageHeader";
import { Card } from "@/components/ui/card";
import { patients } from "@/mock/data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { StatCard } from "@/components/app/StatCard";
import { CheckCircle2, XCircle, ClipboardCheck } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/app/attendance")({ component: AttendancePage });

function AttendancePage() {
  const list = patients.slice(0, 12);
  const [present, setPresent] = useState<Record<string, boolean>>(Object.fromEntries(list.map(p => [p.id, true])));
  const p = Object.values(present).filter(Boolean).length;
  const a = list.length - p;

  return (
    <div>
      <PageHeader title="Attendance" description="Track who checked in today." crumbs={[{ label: "Attendance" }]} />
      <div className="mb-4 grid gap-4 sm:grid-cols-3">
        <StatCard label="Present" value={p} icon={CheckCircle2} tone="success" />
        <StatCard label="Absent" value={a} icon={XCircle} tone="destructive" />
        <StatCard label="Total" value={list.length} icon={ClipboardCheck} tone="primary" />
      </div>
      <Card className="p-4 sm:p-6">
        <div className="overflow-x-auto rounded-xl border border-border/60">
          <Table>
            <TableHeader><TableRow><TableHead>ID</TableHead><TableHead>Name</TableHead><TableHead>Condition</TableHead><TableHead className="text-right">Present</TableHead></TableRow></TableHeader>
            <TableBody>
              {list.map(pt => (
                <TableRow key={pt.id}>
                  <TableCell className="font-mono text-xs">{pt.id}</TableCell>
                  <TableCell className="font-medium">{pt.name}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{pt.condition}</TableCell>
                  <TableCell className="text-right">
                    <Checkbox checked={present[pt.id]} onCheckedChange={v => setPresent(s => ({ ...s, [pt.id]: Boolean(v) }))} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
