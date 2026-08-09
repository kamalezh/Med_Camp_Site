import { o as __toESM } from "../_runtime.mjs";
import { f as patients } from "./data-gIi19eCA.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-BLZ6ednA.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { $ as Check, p as SkipForward, v as QrCode } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-BAvHonDt.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.queue-C2659WXH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function QueuePage() {
	const [queue, setQueue] = (0, import_react.useState)(patients.slice(0, 8).map((p, i) => ({
		...p,
		token: i + 1,
		checkedIn: false
	})));
	const done = (id) => {
		setQueue((q) => q.filter((x) => x.id !== id));
		toast.success("Marked complete");
	};
	const skip = (id) => {
		setQueue((q) => q.map((x) => x.id === id ? {
			...x,
			token: x.token + 10
		} : x).sort((a, b) => a.token - b.token));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Queue Management",
		description: "Live queue for today's camp.",
		crumbs: [{ label: "Queue" }],
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "outline",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "mr-1 h-4 w-4" }), " Scan patient QR"]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "p-4 sm:p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [queue.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4 rounded-xl border border-border/60 p-4 hover:bg-muted/30",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid h-12 w-12 shrink-0 place-items-center rounded-xl text-lg font-bold ${i === 0 ? "gradient-primary text-white shadow-glow" : "bg-muted text-foreground"}`,
						children: p.token
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-medium",
							children: p.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "truncate text-xs text-muted-foreground",
							children: [
								p.condition,
								" · ",
								p.age,
								"y"
							]
						})]
					}),
					i === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-success/15 px-2 py-0.5 text-xs font-medium text-success animate-pulse",
						children: "Now serving"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon",
							variant: "ghost",
							onClick: () => skip(p.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipForward, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon",
							className: "gradient-primary text-white",
							onClick: () => done(p.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
						})]
					})
				]
			}, p.id)), queue.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-10 text-center text-muted-foreground",
				children: "🎉 Queue clear — all patients served."
			})]
		})
	})] });
}
//#endregion
export { QueuePage as component };
