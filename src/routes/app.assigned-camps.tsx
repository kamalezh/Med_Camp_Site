import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/PageHeader";
import { Card } from "@/components/ui/card";
import { camps } from "@/mock/data";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/app/StatusBadge";
import { MapPin, Users } from "lucide-react";

export const Route = createFileRoute("/app/assigned-camps")({ component: AssignedCamps });

function AssignedCamps() {
  const list = camps.slice(0, 5);
  return (
    <div>
      <PageHeader title="Assigned Camps" description="Camps you're volunteering at." crumbs={[{ label: "Assigned Camps" }]} />
      <div className="grid gap-4 lg:grid-cols-2">
        {list.map(c => (
          <Card key={c.id} className="p-5 hover-lift">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold">{c.name}</p>
                <p className="mt-1 text-xs text-muted-foreground"><MapPin className="mr-1 inline h-3 w-3" />{c.location}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.date} — {c.endDate}</p>
                <p className="mt-2 flex items-center gap-1 text-xs text-primary"><Users className="h-3 w-3" /> {c.registered} registered</p>
              </div>
              <StatusBadge status={c.status} />
            </div>
            <div className="mt-4 flex gap-2">
              <Link to="/app/camps/$id" params={{ id: c.id }} className="flex-1"><Button size="sm" variant="outline" className="w-full">Details</Button></Link>
              <Link to="/app/queue" className="flex-1"><Button size="sm" className="w-full gradient-primary text-white">Manage queue</Button></Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
