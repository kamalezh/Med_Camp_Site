import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/PageHeader";
import { Card } from "@/components/ui/card";
import { StatusBadge } from "@/components/app/StatusBadge";
import { labReports } from "@/mock/data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download, Plus } from "lucide-react";
import { toast } from "sonner";
import { useApp } from "@/context/AppContext";

export const Route = createFileRoute("/app/lab-reports")({ component: Lab });

function Lab() {
  const { user } = useApp();
  const isDoctor = user?.role === "doctor";
  return (
    <div>
      <PageHeader
        title={isDoctor ? "Lab Reports & Requests" : "Lab Reports"}
        description="All laboratory investigations and results."
        crumbs={[{ label: "Lab Reports" }]}
        actions={isDoctor && <Button className="gradient-primary text-white" onClick={() => toast.success("Lab request created")}><Plus className="mr-1 h-4 w-4" /> New Request</Button>}
      />
      <Card className="p-4 sm:p-6">
        <div className="overflow-x-auto rounded-xl border border-border/60">
          <Table>
            <TableHeader><TableRow>
              <TableHead>ID</TableHead><TableHead>Test</TableHead><TableHead>Requested by</TableHead>
              <TableHead>Date</TableHead><TableHead>Result</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Action</TableHead>
            </TableRow></TableHeader>
            <TableBody>
              {labReports.map(l => (
                <TableRow key={l.id}>
                  <TableCell className="font-mono text-xs">{l.id}</TableCell>
                  <TableCell className="font-medium">{l.test}</TableCell>
                  <TableCell>{l.doctorName}</TableCell>
                  <TableCell>{l.date}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{l.result ?? "Pending"}</TableCell>
                  <TableCell><StatusBadge status={l.status} /></TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="ghost" onClick={() => toast.success("Downloaded")}><Download className="h-4 w-4" /></Button>
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
