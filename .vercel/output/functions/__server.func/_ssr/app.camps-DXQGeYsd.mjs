import { o as __toESM } from "../_runtime.mjs";
import { a as camps } from "./data-gIi19eCA.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as useApp } from "./AppContext-cCmJfERA.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Button } from "./button-BLZ6ednA.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { E as MapPin, _ as Search, c as Tent, n as Users, y as Plus } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-BAvHonDt.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
import { t as StatusBadge } from "./StatusBadge-4Y7LwOPl.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-CCJRliUM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.camps-DXQGeYsd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CampsPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [tab, setTab] = (0, import_react.useState)("all");
	const { user } = useApp();
	const list = camps.filter((c) => (tab === "all" || c.status.toLowerCase() === tab) && c.name.toLowerCase().includes(q.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Medical Camps",
			description: "Discover, register and manage community medical camps.",
			crumbs: [{ label: "Camps" }],
			actions: user?.role === "admin" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "gradient-primary text-white",
				onClick: () => toast.success("New camp draft created"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1 h-4 w-4" }), " New Camp"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:flex-wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-w-0 sm:w-72",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Search camps…",
					value: q,
					onChange: (e) => setQ(e.target.value),
					className: "pl-9"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				value: tab,
				onValueChange: setTab,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "all",
						children: "All"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "upcoming",
						children: "Upcoming"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "ongoing",
						children: "Ongoing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "completed",
						children: "Completed"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, { value: tab })]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
			children: list.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "overflow-hidden hover-lift",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-32 gradient-hero",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 grid place-items-center opacity-30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tent, { className: "h-16 w-16 text-white" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute right-3 top-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: c.status })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: c.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 line-clamp-2 text-xs text-muted-foreground",
							children: c.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 space-y-1 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }),
									" ",
									c.location
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3 w-3" }),
									" ",
									c.registered,
									"/",
									c.capacity,
									" registered"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full gradient-primary",
								style: { width: `${c.registered / c.capacity * 100}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/app/camps/$id",
								params: { id: c.id },
								className: "flex-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									className: "w-full",
									children: "Details"
								})
							}), user?.role === "patient" && c.status !== "Completed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								className: "flex-1 gradient-primary text-white",
								onClick: () => toast.success(`Registered for ${c.name}`),
								children: "Register"
							})]
						})
					]
				})]
			}, c.id))
		})
	] });
}
//#endregion
export { CampsPage as component };
