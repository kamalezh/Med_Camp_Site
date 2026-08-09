import { u as medicalHistory } from "./data-gIi19eCA.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { t as Button } from "./button-BLZ6ednA.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { V as Download, it as CalendarClock } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-BAvHonDt.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.medical-history-WaBAJaXi.js
var import_jsx_runtime = require_jsx_runtime();
function History() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Medical History",
		description: "Complete timeline of your medical activity.",
		crumbs: [{ label: "Medical History" }],
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "outline",
			onClick: () => toast.success("PDF export started"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1 h-4 w-4" }), " Export PDF"]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "relative border-l-2 border-primary/30",
			children: medicalHistory.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "mb-6 ml-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute -left-3 grid h-6 w-6 place-items-center rounded-full gradient-primary text-white shadow-glow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, { className: "h-3 w-3" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								children: e.type
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
								className: "text-xs text-muted-foreground",
								children: e.date
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm",
							children: e.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: ["— ", e.doctor]
						})
					]
				})]
			}, e.id))
		})
	})] });
}
//#endregion
export { History as component };
