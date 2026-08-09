import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/app/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { patients } from "@/mock/data";
import { Check, SkipForward, QrCode } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/app/queue")({ component: QueuePage });

function QueuePage() {
  const [queue, setQueue] = useState(patients.slice(0, 8).map((p, i) => ({ ...p, token: i + 1, checkedIn: false })));
  const done = (id: string) => { setQueue(q => q.filter(x => x.id !== id)); toast.success("Marked complete"); };
  const skip = (id: string) => { setQueue(q => q.map(x => x.id === id ? { ...x, token: x.token + 10 } : x).sort((a,b) => a.token - b.token)); };

  return (
    <div>
      <PageHeader title="Queue Management" description="Live queue for today's camp." crumbs={[{ label: "Queue" }]}
        actions={<Button variant="outline"><QrCode className="mr-1 h-4 w-4" /> Scan patient QR</Button>}
      />
      <Card className="p-4 sm:p-6">
        <div className="space-y-3">
          {queue.map((p, i) => (
            <div key={p.id} className="flex items-center gap-4 rounded-xl border border-border/60 p-4 hover:bg-muted/30">
              <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl text-lg font-bold ${i === 0 ? "gradient-primary text-white shadow-glow" : "bg-muted text-foreground"}`}>{p.token}</div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{p.name}</p>
                <p className="truncate text-xs text-muted-foreground">{p.condition} · {p.age}y</p>
              </div>
              {i === 0 && <span className="rounded-full bg-success/15 px-2 py-0.5 text-xs font-medium text-success animate-pulse">Now serving</span>}
              <div className="flex gap-1">
                <Button size="icon" variant="ghost" onClick={() => skip(p.id)}><SkipForward className="h-4 w-4" /></Button>
                <Button size="icon" className="gradient-primary text-white" onClick={() => done(p.id)}><Check className="h-4 w-4" /></Button>
              </div>
            </div>
          ))}
          {queue.length === 0 && <p className="py-10 text-center text-muted-foreground">🎉 Queue clear — all patients served.</p>}
        </div>
      </Card>
    </div>
  );
}
