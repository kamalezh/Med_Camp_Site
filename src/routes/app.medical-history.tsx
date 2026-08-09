import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/PageHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { medicalHistory } from "@/mock/data";
import { CalendarClock, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/app/medical-history")({ component: History });

function History() {
  return (
    <div>
      <PageHeader
        title="Medical History"
        description="Complete timeline of your medical activity."
        crumbs={[{ label: "Medical History" }]}
        actions={<Button variant="outline" onClick={() => toast.success("PDF export started")}><Download className="mr-1 h-4 w-4" /> Export PDF</Button>}
      />
      <Card className="p-6">
        <ol className="relative border-l-2 border-primary/30">
          {medicalHistory.map(e => (
            <li key={e.id} className="mb-6 ml-6">
              <span className="absolute -left-3 grid h-6 w-6 place-items-center rounded-full gradient-primary text-white shadow-glow">
                <CalendarClock className="h-3 w-3" />
              </span>
              <div className="glass rounded-xl p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Badge variant="secondary">{e.type}</Badge>
                  <time className="text-xs text-muted-foreground">{e.date}</time>
                </div>
                <p className="mt-2 text-sm">{e.description}</p>
                <p className="mt-1 text-xs text-muted-foreground">— {e.doctor}</p>
              </div>
            </li>
          ))}
        </ol>
      </Card>
    </div>
  );
}
