import { a as camps } from "./data-gIi19eCA.mjs";
import { M as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.camps._id-CrVG2Yqi.js
var $$splitNotFoundComponentImporter = () => import("./app.camps._id-CEXPHm4k.mjs");
var $$splitComponentImporter = () => import("./app.camps._id-CFPGe_Zg.mjs");
var Route = createFileRoute("/app/camps/$id")({
	loader: ({ params }) => {
		const camp = camps.find((c) => c.id === params.id);
		if (!camp) throw notFound();
		return { camp };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
