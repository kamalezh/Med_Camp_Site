import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/PageHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { prescriptions } from "@/mock/data";
import { Pill, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/app/prescriptions")({ component: Rx });

function Rx() {
  return (
    <div>
      <PageHeader title="Prescriptions" description="All medicines prescribed by your care team." crumbs={[{ label: "Prescriptions" }]} />
      <div className="grid gap-4 lg:grid-cols-2">
        {prescriptions.map(rx => (
          <Card key={rx.id} className="p-6 hover-lift">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Pill className="h-5 w-5" /></div>
                <div>
                  <p className="font-semibold">{rx.diagnosis}</p>
                  <p className="text-xs text-muted-foreground">{rx.doctorName} · {rx.date}</p>
                </div>
              </div>
              <Badge variant="outline">{rx.id}</Badge>
            </div>
            <ul className="mt-4 space-y-2">
              {rx.medicines.map(m => (
                <li key={m.name} className="flex items-center justify-between rounded-lg bg-muted/40 px-3 py-2 text-sm">
                  <div>
                    <p className="font-medium">{m.name}</p>
                    <p className="text-xs text-muted-foreground">{m.dosage} · {m.frequency}</p>
                  </div>
                  <Badge variant="secondary">{m.duration}</Badge>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">Notes: {rx.notes}</p>
            <Button size="sm" variant="ghost" className="mt-3" onClick={() => toast.success("Downloaded")}><Download className="mr-1 h-4 w-4" /> Download</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
