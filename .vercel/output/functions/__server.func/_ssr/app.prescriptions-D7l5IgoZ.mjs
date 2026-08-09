import { m as prescriptions } from "./data-gIi19eCA.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { t as Button } from "./button-BLZ6ednA.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { V as Download, b as Pill } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-BAvHonDt.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.prescriptions-D7l5IgoZ.js
var import_jsx_runtime = require_jsx_runtime();
function Rx() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Prescriptions",
		description: "All medicines prescribed by your care team.",
		crumbs: [{ label: "Prescriptions" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 lg:grid-cols-2",
		children: prescriptions.map((rx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "p-6 hover-lift",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: rx.diagnosis
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								rx.doctorName,
								" · ",
								rx.date
							]
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						children: rx.id
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: rx.medicines.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between rounded-lg bg-muted/40 px-3 py-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: m.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								m.dosage,
								" · ",
								m.frequency
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							children: m.duration
						})]
					}, m.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-xs text-muted-foreground",
					children: ["Notes: ", rx.notes]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					variant: "ghost",
					className: "mt-3",
					onClick: () => toast.success("Downloaded"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1 h-4 w-4" }), " Download"]
				})
			]
		}, rx.id))
	})] });
}
//#endregion
export { Rx as component };
