import { o as departmentsList, s as doctors } from "./data-gIi19eCA.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Button } from "./button-BLZ6ednA.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as PageHeader } from "./PageHeader-BAvHonDt.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-Dg1urBTx.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { t as Textarea } from "./textarea-kko37XEX.mjs";
import { t as useForm } from "../_libs/react-hook-form.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.book-appointment-CkYBJLMf.js
var import_jsx_runtime = require_jsx_runtime();
function BookAppointment() {
	const nav = useNavigate();
	const { register, handleSubmit, setValue, watch, formState: { isSubmitting } } = useForm({ defaultValues: {
		doctor: "",
		department: "",
		date: "",
		time: "",
		type: "Consultation",
		reason: ""
	} });
	const onSubmit = async (d) => {
		await new Promise((r) => setTimeout(r, 500));
		toast.success("Appointment booked! You'll receive a confirmation shortly.");
		nav({ to: "/app/appointments" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Book an Appointment",
		crumbs: [{
			label: "Appointments",
			to: "/app/appointments"
		}, { label: "Book" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "max-w-3xl p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit(onSubmit),
			className: "grid gap-5 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Department" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: watch("department"),
					onValueChange: (v) => setValue("department", v),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Choose department" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: departmentsList.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: d,
						children: d
					}, d)) })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Doctor" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: watch("doctor"),
					onValueChange: (v) => setValue("doctor", v),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Choose doctor" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: doctors.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
						value: d.id,
						children: [
							d.name,
							" — ",
							d.department
						]
					}, d.id)) })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "date",
					...register("date", { required: true })
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Time" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "time",
					...register("time", { required: true })
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Type" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: watch("type"),
					onValueChange: (v) => setValue("type", v),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Consultation",
							children: "Consultation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Follow-up",
							children: "Follow-up"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Check-up",
							children: "Check-up"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Emergency",
							children: "Emergency"
						})
					] })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Reason for visit" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 4,
						...register("reason"),
						placeholder: "Briefly describe your symptoms or reason"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-2 flex justify-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						onClick: () => nav({ to: "/app/appointments" }),
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: isSubmitting,
						className: "gradient-primary text-white",
						children: isSubmitting ? "Booking…" : "Book Appointment"
					})]
				})
			]
		})
	})] });
}
//#endregion
export { BookAppointment as component };
