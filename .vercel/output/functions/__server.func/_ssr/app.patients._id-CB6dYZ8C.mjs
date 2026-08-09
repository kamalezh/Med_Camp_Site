import { f as patients } from "./data-gIi19eCA.mjs";
import { M as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.patients._id-CB6dYZ8C.js
var $$splitNotFoundComponentImporter = () => import("./app.patients._id-L01ISAn7.mjs");
var $$splitComponentImporter = () => import("./app.patients._id-DifnOQnG.mjs");
var Route = createFileRoute("/app/patients/$id")({
	loader: ({ params }) => {
		const patient = patients.find((p) => p.id === params.id);
		if (!patient) throw notFound();
		return { patient };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
