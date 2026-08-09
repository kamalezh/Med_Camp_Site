import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useApp } from "@/context/AppContext";
import { Bell, CheckCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/app/notifications")({ component: Notifs });

function Notifs() {
  const { notifs, markAllRead, markRead } = useApp();
  return (
    <div>
      <PageHeader
        title="Notifications"
        description="All alerts, reminders and updates."
        crumbs={[{ label: "Notifications" }]}
        actions={<Button variant="outline" onClick={markAllRead}><CheckCheck className="mr-1 h-4 w-4" /> Mark all read</Button>}
      />
      <div className="space-y-3">
        {notifs.map(n => (
          <Card key={n.id} className={cn("p-4 hover-lift", !n.read && "border-primary/40 bg-primary/[0.02]")} onClick={() => markRead(n.id)}>
            <div className="flex items-start gap-3">
              <div className={cn("grid h-10 w-10 shrink-0 place-items-center rounded-xl", {
                "bg-success/15 text-success": n.type === "success",
                "bg-warning/20 text-warning-foreground": n.type === "warning",
                "bg-destructive/15 text-destructive": n.type === "error",
                "bg-primary/10 text-primary": n.type === "info",
              })}><Bell className="h-5 w-5" /></div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold">{n.title}</p>
                  <span className="text-xs text-muted-foreground">{n.time}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{n.message}</p>
              </div>
              {!n.read && <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
