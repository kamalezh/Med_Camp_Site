import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { User } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { RegisterShell, validators } from "@/components/app/RegisterShell";
import { registerUserWithRole } from "@/lib/auth"; // Firebase register helper function

type Values = { fullName: string; email: string; phone: string; password: string; confirm: string };

export default function PatientRegister() {
  const nav = useNavigate();
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<Values>();
  const password = watch("password");

  const submit = async (v: Values) => {
    try {
      // Firebase connection
      await registerUserWithRole({
        email: v.email,
        password: v.password,
        name: v.fullName,
        role: "patient", // Role set to patient
        extraData: {
          phone: v.phone, // Phone number-ai extraData va store pannuroam
        },
      });

      toast.success(`Patient account created for ${v.fullName}`);
      nav({ to: "/login" });
    } catch (error: any) {
      // Firebase errors-ai user-ku friendly-ah toast panrom
      let errorMessage = "Failed to create account. Please try again.";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "This email is already registered.";
      } else if (error.message) {
        errorMessage = error.message;
      }
      toast.error(errorMessage);
    }
  };

  return (
    <RegisterShell title="Patient" subtitle="Fill in your details to create your MediCamp patient account." icon={User}>
      <Card className="glass p-6 shadow-card">
        <form onSubmit={handleSubmit(submit)} className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2"><Label>Full name</Label><Input {...register("fullName", { required: "Required" })} />{errors.fullName && <p className="mt-1 text-xs text-destructive">{errors.fullName.message}</p>}</div>
          <div><Label>Email</Label><Input type="email" {...register("email", { required: "Required", validate: validators.email })} />{errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message as string}</p>}</div>
          <div><Label>Phone number</Label><Input {...register("phone", { required: "Required", validate: validators.phone })} />{errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message as string}</p>}</div>
          <div><Label>Password</Label><Input type="password" {...register("password", { required: "Required", validate: validators.strongPassword })} />{errors.password && <p className="mt-1 text-xs text-destructive">{errors.password.message as string}</p>}</div>
          <div><Label>Confirm password</Label><Input type="password" {...register("confirm", { required: "Required", validate: v => v === password || "Passwords do not match" })} />{errors.confirm && <p className="mt-1 text-xs text-destructive">{errors.confirm.message as string}</p>}</div>
          <div className="sm:col-span-2">
            <Button type="submit" disabled={isSubmitting} className="w-full gradient-primary text-white shadow-soft">
              {isSubmitting ? "Creating account…" : "Create account"}
            </Button>
          </div>
        </form>
      </Card>
    </RegisterShell>
  );
}