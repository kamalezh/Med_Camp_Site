import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/app/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/app/StatusBadge";
import { camps } from "@/mock/data";
import { Search, MapPin, Users, Tent, Plus } from "lucide-react";
import { useState } from "react";
import { useApp } from "@/context/AppContext";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/app/camps")({ component: CampsPage });

function CampsPage() {
  const [q, setQ] = useState("");
  const [tab, setTab] = useState("all");
  const { user } = useApp();

  const list = camps.filter(c =>
    (tab === "all" || c.status.toLowerCase() === tab) &&
    c.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div>
      <PageHeader
        title="Medical Camps"
        description="Discover, register and manage community medical camps."
        crumbs={[{ label: "Camps" }]}
        actions={user?.role === "admin" && <Button className="gradient-primary text-white" onClick={() => toast.success("New camp draft created")}><Plus className="mr-1 h-4 w-4" /> New Camp</Button>}
      />
      <div className="mb-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:flex-wrap">
        <div className="relative min-w-0 sm:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search camps…" value={q} onChange={e => setQ(e.target.value)} className="pl-9" />
        </div>
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value={tab} />
        </Tabs>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map(c => (
          <Card key={c.id} className="overflow-hidden hover-lift">
            <div className="relative h-32 gradient-hero">
              <div className="absolute inset-0 grid place-items-center opacity-30"><Tent className="h-16 w-16 text-white" /></div>
              <div className="absolute right-3 top-3"><StatusBadge status={c.status} /></div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">{c.name}</h3>
              <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{c.description}</p>
              <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                <p className="flex items-center gap-2"><MapPin className="h-3 w-3" /> {c.location}</p>
                <p className="flex items-center gap-2"><Users className="h-3 w-3" /> {c.registered}/{c.capacity} registered</p>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full gradient-primary" style={{ width: `${(c.registered / c.capacity) * 100}%` }} />
              </div>
              <div className="mt-4 flex gap-2">
                <Link to="/app/camps/$id" params={{ id: c.id }} className="flex-1">
                  <Button size="sm" variant="outline" className="w-full">Details</Button>
                </Link>
                {user?.role === "patient" && c.status !== "Completed" && (
                  <Button size="sm" className="flex-1 gradient-primary text-white" onClick={() => toast.success(`Registered for ${c.name}`)}>Register</Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
