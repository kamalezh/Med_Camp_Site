import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.patients._id-L01ISAn7.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "p-8 text-center text-muted-foreground",
	children: ["Patient not found. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/app/patients",
		className: "text-primary",
		children: "Back"
	})]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
