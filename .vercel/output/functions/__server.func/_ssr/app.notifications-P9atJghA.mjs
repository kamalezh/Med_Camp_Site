import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as useApp } from "./AppContext-cCmJfERA.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-BLZ6ednA.mjs";
import { ct as Bell, et as CheckCheck } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-BAvHonDt.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.notifications-P9atJghA.js
var import_jsx_runtime = require_jsx_runtime();
function Notifs() {
	const { notifs, markAllRead, markRead } = useApp();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Notifications",
		description: "All alerts, reminders and updates.",
		crumbs: [{ label: "Notifications" }],
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "outline",
			onClick: markAllRead,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, { className: "mr-1 h-4 w-4" }), " Mark all read"]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: notifs.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: cn("p-4 hover-lift", !n.read && "border-primary/40 bg-primary/[0.02]"),
			onClick: () => markRead(n.id),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("grid h-10 w-10 shrink-0 place-items-center rounded-xl", {
							"bg-success/15 text-success": n.type === "success",
							"bg-warning/20 text-warning-foreground": n.type === "warning",
							"bg-destructive/15 text-destructive": n.type === "error",
							"bg-primary/10 text-primary": n.type === "info"
						}),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: n.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: n.time
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: n.message
						})]
					}),
					!n.read && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" })
				]
			})
		}, n.id))
	})] });
}
//#endregion
export { Notifs as component };
