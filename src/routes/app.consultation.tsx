import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PageHeader } from "@/components/app/PageHeader";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { patients } from "@/mock/data";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Route = createFileRoute("/app/consultation")({ component: ConsultPage });

type Med = { name: string; dosage: string; freq: string; duration: string };

function ConsultPage() {
  const [meds, setMeds] = useState<Med[]>([{ name: "", dosage: "", freq: "", duration: "" }]);
  const [patientId, setPatientId] = useState<string>(patients[0].id);
  const { register, handleSubmit } = useForm({ defaultValues: { symptoms: "", diagnosis: "", notes: "", followUp: "" } });

  const submit = () => toast.success("Consultation saved & prescription issued");

  return (
    <div>
      <PageHeader title="Consultation" description="Record diagnosis, prescription and follow-up." crumbs={[{ label: "Consultation" }]} />
      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <Card className="p-6">
          <Label>Select patient</Label>
          <Select value={patientId} onValueChange={setPatientId}>
            <SelectTrigger className="mt-2"><SelectValue /></SelectTrigger>
            <SelectContent>{patients.slice(0, 15).map(p => <SelectItem key={p.id} value={p.id}>{p.name} — {p.id}</SelectItem>)}</SelectContent>
          </Select>
          {(() => {
            const p = patients.find(x => x.id === patientId)!;
            return (
              <div className="mt-4 rounded-xl bg-muted/40 p-4 text-sm">
                <p className="font-semibold">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.age}y · {p.gender} · {p.bloodGroup}</p>
                <p className="mt-2 text-xs">Condition: {p.condition}</p>
              </div>
            );
          })()}
        </Card>
        <Card className="p-6">
          <form onSubmit={handleSubmit(submit)} className="space-y-5">
            <div><Label>Symptoms</Label><Textarea rows={3} placeholder="Patient reported symptoms…" {...register("symptoms")} /></div>
            <div><Label>Diagnosis</Label><Input placeholder="Primary diagnosis" {...register("diagnosis")} /></div>
            <div>
              <div className="flex items-center justify-between"><Label>Prescription — medicines</Label>
                <Button type="button" size="sm" variant="outline" onClick={() => setMeds(m => [...m, { name:"", dosage:"", freq:"", duration:"" }])}><Plus className="mr-1 h-3 w-3" /> Add</Button>
              </div>
              <div className="mt-2 space-y-2">
                {meds.map((m, i) => (
                  <div key={i} className="grid grid-cols-12 items-center gap-2">
                    <Input className="col-span-4" placeholder="Medicine" value={m.name} onChange={e => setMeds(x => x.map((y, j) => j===i ? { ...y, name: e.target.value } : y))} />
                    <Input className="col-span-3" placeholder="Dosage" value={m.dosage} onChange={e => setMeds(x => x.map((y, j) => j===i ? { ...y, dosage: e.target.value } : y))} />
                    <Input className="col-span-2" placeholder="Freq" value={m.freq} onChange={e => setMeds(x => x.map((y, j) => j===i ? { ...y, freq: e.target.value } : y))} />
                    <Input className="col-span-2" placeholder="Duration" value={m.duration} onChange={e => setMeds(x => x.map((y, j) => j===i ? { ...y, duration: e.target.value } : y))} />
                    <Button className="col-span-1" size="icon" variant="ghost" type="button" onClick={() => setMeds(x => x.filter((_, j) => j !== i))}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                  </div>
                ))}
              </div>
            </div>
            <div><Label>Doctor's notes</Label><Textarea rows={3} placeholder="Private notes…" {...register("notes")} /></div>
            <div><Label>Follow-up date</Label><Input type="date" {...register("followUp")} /></div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline">Request lab test</Button>
              <Button type="submit" className="gradient-primary text-white">Save consultation</Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
