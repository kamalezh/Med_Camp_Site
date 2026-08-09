import { o as __toESM } from "../_runtime.mjs";
import { n as appointments } from "./data-gIi19eCA.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as useApp } from "./AppContext-cCmJfERA.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Button } from "./button-BLZ6ednA.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { $ as Check, _ as Search, lt as Ban, t as X, y as Plus } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-BAvHonDt.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-C0WYWEQX.mjs";
import { t as StatusBadge } from "./StatusBadge-4Y7LwOPl.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-Dg1urBTx.mjs";
import { t as usePagination } from "./usePagination-qbXCEir3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.appointments-BAZLM4DS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AppointmentsPage() {
	const { user } = useApp();
	const [q, setQ] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("all");
	const [items, setItems] = (0, import_react.useState)(appointments);
	const p = usePagination((0, import_react.useMemo)(() => items.filter((a) => (status === "all" || a.status === status) && (q === "" || a.patientName.toLowerCase().includes(q.toLowerCase()) || a.doctorName.toLowerCase().includes(q.toLowerCase()))), [
		items,
		q,
		status
	]), 8);
	const setStatusFor = (id, s) => {
		setItems((prev) => prev.map((a) => a.id === id ? {
			...a,
			status: s
		} : a));
		toast.success(`Appointment ${s.toLowerCase()}`);
	};
	const canManage = user?.role === "doctor" || user?.role === "admin";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Appointments",
		description: "Manage bookings, approvals and status.",
		crumbs: [{ label: "Appointments" }],
		actions: user?.role === "patient" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/app/book-appointment",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "gradient-primary text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1 h-4 w-4" }), " Book"]
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-4 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-w-0 sm:w-72",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Search patient or doctor…",
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
							children: "All statuses"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Pending",
							children: "Pending"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Approved",
							children: "Approved"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Completed",
							children: "Completed"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Cancelled",
							children: "Cancelled"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Rejected",
							children: "Rejected"
						})
					] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-xl border border-border/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "ID" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Patient" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Doctor" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Department" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Date / Time" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Token" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Type" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: "Actions"
					})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [p.current.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "font-mono text-xs",
						children: a.id
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "font-medium",
						children: a.patientName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: a.doctorName }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "secondary",
						children: a.department
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm",
						children: a.date
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: a.time
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-md bg-primary/10 px-2 py-1 text-xs font-mono text-primary",
						children: ["#", a.token]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						children: a.type
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: a.status }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-right",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex gap-1",
							children: [canManage && a.status === "Pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								variant: "ghost",
								onClick: () => setStatusFor(a.id, "Approved"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-success" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								variant: "ghost",
								onClick: () => setStatusFor(a.id, "Rejected"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4 text-destructive" })
							})] }), a.status !== "Cancelled" && a.status !== "Completed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon",
								variant: "ghost",
								onClick: () => setStatusFor(a.id, "Cancelled"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ban, { className: "h-4 w-4" })
							})]
						})
					})
				] }, a.id)), p.current.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					colSpan: 9,
					className: "py-8 text-center text-muted-foreground",
					children: "No appointments match your filters."
				}) })] })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pager, { p })
		]
	})] });
}
function Pager({ p }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
	});
}
//#endregion
export { AppointmentsPage as component };
