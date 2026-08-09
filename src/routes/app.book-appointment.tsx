import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { PageHeader } from "@/components/app/PageHeader";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { doctors, departmentsList } from "@/mock/data";
import { toast } from "sonner";

export const Route = createFileRoute("/app/book-appointment")({ component: BookAppointment });

type FormData = { doctor: string; department: string; date: string; time: string; type: string; reason: string };

function BookAppointment() {
  const nav = useNavigate();
  const { register, handleSubmit, setValue, watch, formState: { isSubmitting } } = useForm<FormData>({
    defaultValues: { doctor: "", department: "", date: "", time: "", type: "Consultation", reason: "" },
  });

  const onSubmit = async (d: FormData) => {
    await new Promise(r => setTimeout(r, 500));
    toast.success("Appointment booked! You'll receive a confirmation shortly.");
    nav({ to: "/app/appointments" });
  };

  return (
    <div>
      <PageHeader title="Book an Appointment" crumbs={[{ label: "Appointments", to: "/app/appointments" }, { label: "Book" }]} />
      <Card className="max-w-3xl p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label>Department</Label>
            <Select value={watch("department")} onValueChange={(v) => setValue("department", v)}>
              <SelectTrigger><SelectValue placeholder="Choose department" /></SelectTrigger>
              <SelectContent>{departmentsList.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div>
            <Label>Doctor</Label>
            <Select value={watch("doctor")} onValueChange={(v) => setValue("doctor", v)}>
              <SelectTrigger><SelectValue placeholder="Choose doctor" /></SelectTrigger>
              <SelectContent>{doctors.map(d => <SelectItem key={d.id} value={d.id}>{d.name} — {d.department}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div><Label>Date</Label><Input type="date" {...register("date", { required: true })} /></div>
          <div><Label>Time</Label><Input type="time" {...register("time", { required: true })} /></div>
          <div>
            <Label>Type</Label>
            <Select value={watch("type")} onValueChange={(v) => setValue("type", v)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Consultation">Consultation</SelectItem>
                <SelectItem value="Follow-up">Follow-up</SelectItem>
                <SelectItem value="Check-up">Check-up</SelectItem>
                <SelectItem value="Emergency">Emergency</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="sm:col-span-2"><Label>Reason for visit</Label><Textarea rows={4} {...register("reason")} placeholder="Briefly describe your symptoms or reason" /></div>
          <div className="sm:col-span-2 flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => nav({ to: "/app/appointments" })}>Cancel</Button>
            <Button type="submit" disabled={isSubmitting} className="gradient-primary text-white">{isSubmitting ? "Booking…" : "Book Appointment"}</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
