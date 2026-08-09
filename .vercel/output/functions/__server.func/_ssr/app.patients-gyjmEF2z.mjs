import { o as __toESM } from "../_runtime.mjs";
import { f as patients } from "./data-gIi19eCA.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Button } from "./button-BLZ6ednA.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as Pencil, _ as Search, s as Trash2, y as Plus, z as Eye } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-BAvHonDt.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-C0WYWEQX.mjs";
import { t as StatusBadge } from "./StatusBadge-4Y7LwOPl.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-Dg1urBTx.mjs";
import { t as usePagination } from "./usePagination-qbXCEir3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.patients-gyjmEF2z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PatientsPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("all");
	const [items, setItems] = (0, import_react.useState)(patients);
	const p = usePagination((0, import_react.useMemo)(() => items.filter((p) => (status === "all" || p.status === status) && (p.name.toLowerCase().includes(q.toLowerCase()) || p.id.toLowerCase().includes(q.toLowerCase()))), [
		items,
		q,
		status
	]), 10);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Patients",
		description: `${items.length} registered patients`,
		crumbs: [{ label: "Patients" }],
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			className: "gradient-primary text-white",
			onClick: () => toast.success("Registration form opened"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1 h-4 w-4" }), " Add Patient"]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-4 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-w-0 sm:w-72",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Search name or ID…",
						value: q,
						onChange: (e) => setQ(e.target.value),
						className: "pl-9"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: status,
					onValueChange: setStatus,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "w-40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "all",
							children: "All"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Active",
							children: "Active"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Inactive",
							children: "Inactive"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Critical",
							children: "Critical"
						})
					] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-xl border border-border/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "ID" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Name" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Age" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Gender" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Blood" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Contact" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Last Visit" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: "Actions"
					})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: p.current.map((pt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "font-mono text-xs",
						children: pt.id
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-8 w-8 place-items-center rounded-full gradient-primary text-xs font-bold text-white",
							children: pt.name.split(" ").map((n) => n[0]).slice(0, 2).join("")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: pt.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: pt.email
						})] })]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: pt.age }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: pt.gender }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-md bg-destructive/10 px-2 py-0.5 text-xs font-mono text-destructive",
						children: pt.bloodGroup
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-xs",
						children: pt.phone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-xs",
						children: pt.lastVisit
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: pt.status }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-right",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/app/patients/$id",
									params: { id: pt.id },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "icon",
										variant: "ghost",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "icon",
									variant: "ghost",
									onClick: () => toast.info("Edit form"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "icon",
									variant: "ghost",
									onClick: () => {
										setItems((prev) => prev.filter((x) => x.id !== pt.id));
										toast.success("Deleted");
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4 text-destructive" })
								})
							]
						})
					})
				] }, pt.id)) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center justify-between text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Page ",
					p.page,
					" of ",
					p.totalPages,
					" · ",
					p.total,
					" results"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: p.prev,
						disabled: p.page === 1,
						children: "Prev"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: p.next,
						disabled: p.page === p.totalPages,
						children: "Next"
					})]
				})]
			})
		]
	})] });
}
//#endregion
export { PatientsPage as component };
