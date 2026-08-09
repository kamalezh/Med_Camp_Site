import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/PageHeader";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { users, doctors, patients } from "@/mock/data";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/app/users")({ component: UsersPage });

function UsersPage() {
  const all = [
    ...users,
    ...doctors.slice(0, 4).map(d => ({ id: d.id, name: d.name, email: d.email, role: "doctor" as const })),
    ...patients.slice(0, 4).map(p => ({ id: p.id, name: p.name, email: p.email, role: "patient" as const })),
  ];
  return (
    <div>
      <PageHeader title="User Management" description="All users across roles." crumbs={[{ label: "Users" }]}
        actions={<Button className="gradient-primary text-white" onClick={() => toast.success("Invite sent")}><Plus className="mr-1 h-4 w-4" /> Invite user</Button>} />
      <Card className="p-4 sm:p-6">
        <div className="overflow-x-auto rounded-xl border border-border/60">
          <Table>
            <TableHeader><TableRow><TableHead>ID</TableHead><TableHead>Name</TableHead><TableHead>Email</TableHead><TableHead>Role</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader>
            <TableBody>{all.map(u => (
              <TableRow key={u.id}>
                <TableCell className="font-mono text-xs">{u.id}</TableCell>
                <TableCell className="font-medium">{u.name}</TableCell>
                <TableCell>{u.email}</TableCell>
                <TableCell><Badge variant="secondary" className="capitalize">{u.role}</Badge></TableCell>
                <TableCell className="text-right"><div className="inline-flex gap-1">
                  <Button size="icon" variant="ghost"><Pencil className="h-4 w-4" /></Button>
                  <Button size="icon" variant="ghost"><Trash2 className="h-4 w-4 text-destructive" /></Button>
                </div></TableCell>
              </TableRow>
            ))}</TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
