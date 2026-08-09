import { l as labReports } from "./data-gIi19eCA.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as useApp } from "./AppContext-cCmJfERA.mjs";
import { t as Button } from "./button-BLZ6ednA.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { V as Download, y as Plus } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-BAvHonDt.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-C0WYWEQX.mjs";
import { t as StatusBadge } from "./StatusBadge-4Y7LwOPl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.lab-reports-DVNhJUsL.js
var import_jsx_runtime = require_jsx_runtime();
function Lab() {
	const { user } = useApp();
	const isDoctor = user?.role === "doctor";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: isDoctor ? "Lab Reports & Requests" : "Lab Reports",
		description: "All laboratory investigations and results.",
		crumbs: [{ label: "Lab Reports" }],
		actions: isDoctor && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			className: "gradient-primary text-white",
			onClick: () => toast.success("Lab request created"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1 h-4 w-4" }), " New Request"]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "p-4 sm:p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto rounded-xl border border-border/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "ID" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Test" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Requested by" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Date" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Result" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "text-right",
					children: "Action"
				})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: labReports.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "font-mono text-xs",
					children: l.id
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "font-medium",
					children: l.test
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: l.doctorName }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: l.date }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "text-sm text-muted-foreground",
					children: l.result ?? "Pending"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: l.status }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "text-right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "ghost",
						onClick: () => toast.success("Downloaded"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" })
					})
				})
			] }, l.id)) })] })
		})
	})] });
}
//#endregion
export { Lab as component };
