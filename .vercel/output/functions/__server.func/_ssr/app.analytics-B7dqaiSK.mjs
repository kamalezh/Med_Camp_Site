import { h as revenueTrend, i as campParticipation, p as patientsByDept, r as appointmentsByMonth } from "./data-gIi19eCA.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { H as DollarSign, c as Tent, n as Users, o as TrendingUp } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-BAvHonDt.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
import { t as StatCard } from "./StatCard-BEHM0qq2.mjs";
import { a as YAxis, c as Line, d as Pie, f as Cell, h as Legend, i as LineChart, l as CartesianGrid, m as Tooltip, n as PieChart, o as XAxis, p as ResponsiveContainer, r as BarChart, s as Area, t as AreaChart, u as Bar } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.analytics-B7dqaiSK.js
var import_jsx_runtime = require_jsx_runtime();
function Analytics() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Analytics",
				description: "Hospital-wide performance metrics.",
				crumbs: [{ label: "Analytics" }]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Patients",
						value: "12,480",
						icon: Users,
						tone: "primary",
						delta: "+8.4%"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Appointments",
						value: "4,320",
						icon: TrendingUp,
						tone: "success",
						delta: "+12%"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Camps",
						value: "32",
						icon: Tent,
						tone: "warning",
						delta: "+3 new"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Revenue",
						value: "$412K",
						icon: DollarSign,
						tone: "success",
						delta: "+21%"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-4 font-semibold",
							children: "Appointments"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-72",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
								data: appointmentsByMonth,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "a1",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "0%",
											stopColor: "var(--primary)",
											stopOpacity: .4
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "100%",
											stopColor: "var(--primary)",
											stopOpacity: 0
										})]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										stroke: "var(--border)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "month",
										fontSize: 12
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { fontSize: 12 }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
										dataKey: "appointments",
										stroke: "var(--primary)",
										fill: "url(#a1)"
									})
								]
							}) })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-4 font-semibold",
							children: "Revenue Trend"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-72",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
								data: revenueTrend,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										stroke: "var(--border)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "month",
										fontSize: 12
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { fontSize: 12 }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
										type: "monotone",
										dataKey: "revenue",
										stroke: "var(--secondary)",
										strokeWidth: 3,
										dot: { fill: "var(--secondary)" }
									})
								]
							}) })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-4 font-semibold",
							children: "Camp Participation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-72",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: campParticipation,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										stroke: "var(--border)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "camp",
										fontSize: 12
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { fontSize: 12 }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "registered",
										fill: "var(--primary)",
										radius: [
											8,
											8,
											0,
											0
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "attended",
										fill: "var(--secondary)",
										radius: [
											8,
											8,
											0,
											0
										]
									})
								]
							}) })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-4 font-semibold",
							children: "Patients by Department"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-72",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
									data: patientsByDept,
									dataKey: "value",
									nameKey: "name",
									innerRadius: 50,
									outerRadius: 90,
									paddingAngle: 3,
									children: patientsByDept.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: [
										"var(--chart-1)",
										"var(--chart-2)",
										"var(--chart-3)",
										"var(--chart-4)",
										"var(--chart-5)",
										"var(--primary-glow)"
									][i % 6] }, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {})
							] }) })
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { Analytics as component };
