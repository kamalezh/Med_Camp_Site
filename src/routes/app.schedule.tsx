import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/PageHeader";
import { Card } from "@/components/ui/card";
import { camps } from "@/mock/data";
import { StatusBadge } from "@/components/app/StatusBadge";
import { Calendar as CalIcon, MapPin } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export const Route = createFileRoute("/app/schedule")({ component: SchedulePage });

function SchedulePage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div>
      <PageHeader title="Camp Schedule" description="Your assigned camps and availability." crumbs={[{ label: "Schedule" }]} />
      <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
        <Card className="p-4"><Calendar mode="single" selected={date} onSelect={setDate} /></Card>
        <div className="space-y-3">
          {camps.map(c => (
            <Card key={c.id} className="flex items-center gap-4 p-4 hover-lift">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl gradient-primary text-white"><CalIcon className="h-6 w-6" /></div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold">{c.name}</p>
                <p className="truncate text-xs text-muted-foreground"><MapPin className="mr-1 inline h-3 w-3" />{c.location} · {c.date}</p>
              </div>
              <StatusBadge status={c.status} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
