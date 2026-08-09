import { _ as users, f as patients, s as doctors } from "./data-gIi19eCA.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { t as Button } from "./button-BLZ6ednA.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as Pencil, s as Trash2, y as Plus } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-BAvHonDt.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-C0WYWEQX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.users-DAlxj_QH.js
var import_jsx_runtime = require_jsx_runtime();
function UsersPage() {
	const all = [
		...users,
		...doctors.slice(0, 4).map((d) => ({
			id: d.id,
			name: d.name,
			email: d.email,
			role: "doctor"
		})),
		...patients.slice(0, 4).map((p) => ({
			id: p.id,
			name: p.name,
			email: p.email,
			role: "patient"
		}))
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "User Management",
		description: "All users across roles.",
		crumbs: [{ label: "Users" }],
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			className: "gradient-primary text-white",
			onClick: () => toast.success("Invite sent"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1 h-4 w-4" }), " Invite user"]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "p-4 sm:p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto rounded-xl border border-border/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "ID" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Name" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Email" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Role" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "text-right",
					children: "Actions"
				})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: all.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "font-mono text-xs",
					children: u.id
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "font-medium",
					children: u.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: u.email }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "secondary",
					className: "capitalize",
					children: u.role
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "text-right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon",
							variant: "ghost",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon",
							variant: "ghost",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4 text-destructive" })
						})]
					})
				})
			] }, u.id)) })] })
		})
	})] });
}
//#endregion
export { UsersPage as component };
