import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.camps._id-CEXPHm4k.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "p-8 text-center text-muted-foreground",
	children: ["Camp not found. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/app/camps",
		className: "text-primary",
		children: "Back to camps"
	})]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
