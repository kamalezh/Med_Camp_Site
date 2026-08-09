import { o as __toESM } from "../_runtime.mjs";
import { f as patients } from "./data-gIi19eCA.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Button } from "./button-BLZ6ednA.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { s as Trash2, y as Plus } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-BAvHonDt.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-Dg1urBTx.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { t as Textarea } from "./textarea-kko37XEX.mjs";
import { t as useForm } from "../_libs/react-hook-form.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.consultation-Bbi2sWHA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ConsultPage() {
	const [meds, setMeds] = (0, import_react.useState)([{
		name: "",
		dosage: "",
		freq: "",
		duration: ""
	}]);
	const [patientId, setPatientId] = (0, import_react.useState)(patients[0].id);
	const { register, handleSubmit } = useForm({ defaultValues: {
		symptoms: "",
		diagnosis: "",
		notes: "",
		followUp: ""
	} });
	const submit = () => toast.success("Consultation saved & prescription issued");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Consultation",
		description: "Record diagnosis, prescription and follow-up.",
		crumbs: [{ label: "Consultation" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[320px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Select patient" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: patientId,
					onValueChange: setPatientId,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "mt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: patients.slice(0, 15).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
						value: p.id,
						children: [
							p.name,
							" — ",
							p.id
						]
					}, p.id)) })]
				}),
				(() => {
					const p = patients.find((x) => x.id === patientId);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 rounded-xl bg-muted/40 p-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									p.age,
									"y · ",
									p.gender,
									" · ",
									p.bloodGroup
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs",
								children: ["Condition: ", p.condition]
							})
						]
					});
				})()
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit(submit),
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Symptoms" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 3,
						placeholder: "Patient reported symptoms…",
						...register("symptoms")
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Diagnosis" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Primary diagnosis",
						...register("diagnosis")
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Prescription — medicines" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							size: "sm",
							variant: "outline",
							onClick: () => setMeds((m) => [...m, {
								name: "",
								dosage: "",
								freq: "",
								duration: ""
							}]),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1 h-3 w-3" }), " Add"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 space-y-2",
						children: meds.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-12 items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									className: "col-span-4",
									placeholder: "Medicine",
									value: m.name,
									onChange: (e) => setMeds((x) => x.map((y, j) => j === i ? {
										...y,
										name: e.target.value
									} : y))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									className: "col-span-3",
									placeholder: "Dosage",
									value: m.dosage,
									onChange: (e) => setMeds((x) => x.map((y, j) => j === i ? {
										...y,
										dosage: e.target.value
									} : y))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									className: "col-span-2",
									placeholder: "Freq",
									value: m.freq,
									onChange: (e) => setMeds((x) => x.map((y, j) => j === i ? {
										...y,
										freq: e.target.value
									} : y))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									className: "col-span-2",
									placeholder: "Duration",
									value: m.duration,
									onChange: (e) => setMeds((x) => x.map((y, j) => j === i ? {
										...y,
										duration: e.target.value
									} : y))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "col-span-1",
									size: "icon",
									variant: "ghost",
									type: "button",
									onClick: () => setMeds((x) => x.filter((_, j) => j !== i)),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4 text-destructive" })
								})
							]
						}, i))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Doctor's notes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 3,
						placeholder: "Private notes…",
						...register("notes")
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Follow-up date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "date",
						...register("followUp")
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							children: "Request lab test"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "gradient-primary text-white",
							children: "Save consultation"
						})]
					})
				]
			})
		})]
	})] });
}
//#endregion
export { ConsultPage as component };
