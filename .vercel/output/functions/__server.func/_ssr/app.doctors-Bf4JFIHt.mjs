import { o as __toESM } from "../_runtime.mjs";
import { o as departmentsList, s as doctors } from "./data-gIi19eCA.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Button } from "./button-BLZ6ednA.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as Search, d as Star, y as Plus } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-BAvHonDt.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
import { t as StatusBadge } from "./StatusBadge-4Y7LwOPl.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-Dg1urBTx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.doctors-Bf4JFIHt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DoctorsPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [dept, setDept] = (0, import_react.useState)("all");
	const list = doctors.filter((d) => (dept === "all" || d.department === dept) && d.name.toLowerCase().includes(q.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Doctors",
			description: `${doctors.length} doctors on staff`,
			crumbs: [{ label: "Doctors" }],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "gradient-primary text-white",
				onClick: () => toast.success("Doctor form opened"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1 h-4 w-4" }), " Add Doctor"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:flex-wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-w-0 sm:w-72",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search doctors…",
					className: "pl-9"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
				value: dept,
				onValueChange: setDept,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					className: "w-48",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: "all",
					children: "All departments"
				}), departmentsList.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: d,
					children: d
				}, d))] })]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: list.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5 hover-lift",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-14 w-14 shrink-0 place-items-center rounded-2xl gradient-primary text-lg font-bold text-white shadow-glow",
						children: d.name.replace("Dr. ", "").split(" ").map((n) => n[0]).slice(0, 2).join("")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-semibold",
								children: d.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-xs text-muted-foreground",
								children: d.specialization
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "secondary",
									children: d.department
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: d.availability })]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid grid-cols-3 gap-2 text-center text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-muted/40 p-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-bold",
								children: [d.experience, "y"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: "Exp"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-muted/40 p-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center justify-center gap-1 font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-warning text-warning" }), d.rating.toFixed(1)]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: "Rating"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-muted/40 p-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold",
								children: d.patients
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: "Patients"
							})]
						})
					]
				})]
			}, d.id))
		})
	] });
}
//#endregion
export { DoctorsPage as component };
