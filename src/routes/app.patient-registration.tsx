import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { PageHeader } from "@/components/app/PageHeader";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { camps } from "@/mock/data";
import { toast } from "sonner";
import { QrCode } from "lucide-react";

export const Route = createFileRoute("/app/patient-registration")({ component: RegisterPatient });

function RegisterPatient() {
  const { register, handleSubmit, reset, setValue, watch } = useForm({
    defaultValues: { name: "", age: "", gender: "Male", phone: "", email: "", bloodGroup: "O+", camp: camps[0].id, address: "" },
  });
  const submit = () => { toast.success("Patient registered and QR issued"); reset(); };

  return (
    <div>
      <PageHeader title="Patient Registration" description="On-site registration for a medical camp." crumbs={[{ label: "Register Patient" }]}
        actions={<Button variant="outline"><QrCode className="mr-1 h-4 w-4" /> Scan QR</Button>}
      />
      <Card className="max-w-3xl p-6">
        <form onSubmit={handleSubmit(submit)} className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2"><Label>Full name</Label><Input {...register("name", { required: true })} /></div>
          <div><Label>Age</Label><Input type="number" {...register("age", { required: true })} /></div>
          <div>
            <Label>Gender</Label>
            <Select value={watch("gender")} onValueChange={v => setValue("gender", v)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent><SelectItem value="Male">Male</SelectItem><SelectItem value="Female">Female</SelectItem><SelectItem value="Other">Other</SelectItem></SelectContent>
            </Select>
          </div>
          <div><Label>Phone</Label><Input {...register("phone", { required: true })} /></div>
          <div><Label>Email</Label><Input type="email" {...register("email")} /></div>
          <div>
            <Label>Blood group</Label>
            <Select value={watch("bloodGroup")} onValueChange={v => setValue("bloodGroup", v)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>{["O+","A+","B+","AB+","O-","A-","B-","AB-"].map(x => <SelectItem key={x} value={x}>{x}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div>
            <Label>Camp</Label>
            <Select value={watch("camp")} onValueChange={v => setValue("camp", v)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>{camps.map(c => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div className="sm:col-span-2"><Label>Address</Label><Input {...register("address")} /></div>
          <div className="sm:col-span-2 flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => reset()}>Reset</Button>
            <Button type="submit" className="gradient-primary text-white">Register & issue QR</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
