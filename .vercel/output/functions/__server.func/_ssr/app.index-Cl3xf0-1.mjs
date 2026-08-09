import { a as camps, f as patients, n as appointments, p as patientsByDept, r as appointmentsByMonth, s as doctors } from "./data-gIi19eCA.mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as useApp } from "./AppContext-cCmJfERA.mjs";
import { t as Button } from "./button-BLZ6ednA.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { G as ClipboardCheck, L as FileText, N as HeartPulse, b as Pill, c as Tent, i as UserPlus, k as ListOrdered, n as Users, o as TrendingUp, pt as Activity, rt as Calendar, u as Stethoscope } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-BAvHonDt.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
import { t as StatCard } from "./StatCard-BEHM0qq2.mjs";
import { a as YAxis, d as Pie, f as Cell, h as Legend, l as CartesianGrid, m as Tooltip, n as PieChart, o as XAxis, p as ResponsiveContainer, s as Area, t as AreaChart } from "../_libs/recharts+[...].mjs";
import { t as StatusBadge } from "./StatusBadge-4Y7LwOPl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.index-Cl3xf0-1.js
var import_jsx_runtime = require_jsx_runtime();
function Dashboard() {
	const { user } = useApp();
	if (!user) return null;
	const role = user.role;
	const upcoming = appointments.filter((a) => a.status === "Approved" || a.status === "Pending").slice(0, 5);
	const activeCamps = camps.filter((c) => c.status !== "Completed").slice(0, 4);
	const greeting = `Welcome back, ${user.name.split(" ")[0]} 👋`;
	const desc = {
		patient: "Here's your health snapshot.",
		doctor: "Your consultations, queue and camp schedule at a glance.",
		volunteer: "Your tasks and assigned camps for today.",
		admin: "Hospital-wide performance and operations."
	}[role];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: greeting,
				description: desc
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					role === "patient" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Upcoming Appointments",
							value: 3,
							icon: Calendar,
							tone: "primary",
							delta: "+1 this week"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Active Prescriptions",
							value: 2,
							icon: Pill,
							tone: "success"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Pending Reports",
							value: 1,
							icon: FileText,
							tone: "warning"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Registered Camps",
							value: 2,
							icon: Tent,
							tone: "primary"
						})
					] }),
					role === "doctor" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Today's Appointments",
							value: 12,
							icon: Calendar,
							tone: "primary",
							delta: "+3 vs yesterday"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Patients in Queue",
							value: 5,
							icon: ListOrdered,
							tone: "warning"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Consultations (Wk)",
							value: 64,
							icon: Stethoscope,
							tone: "success",
							delta: "+18%"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Assigned Camps",
							value: 3,
							icon: Tent,
							tone: "primary"
						})
					] }),
					role === "volunteer" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Assigned Camps",
							value: 2,
							icon: Tent,
							tone: "primary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Today's Tasks",
							value: 7,
							icon: ClipboardCheck,
							tone: "warning"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Patients Registered",
							value: 38,
							icon: UserPlus,
							tone: "success",
							delta: "Today"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Attendance Rate",
							value: "96%",
							icon: TrendingUp,
							tone: "success"
						})
					] }),
					role === "admin" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Total Patients",
							value: patients.length * 24,
							icon: Users,
							tone: "primary",
							delta: "+12% MoM"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Active Doctors",
							value: doctors.length,
							icon: Stethoscope,
							tone: "success"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Ongoing Camps",
							value: camps.filter((c) => c.status !== "Completed").length,
							icon: Tent,
							tone: "warning"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							label: "Revenue (MTD)",
							value: "$54.3K",
							icon: TrendingUp,
							tone: "success",
							delta: "+21%"
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "lg:col-span-2 p-6 hover-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: "Appointments trend"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Last 7 months"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-5 w-5 text-primary" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-72",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
								data: appointmentsByMonth,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "c1",
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
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "c2",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "0%",
											stopColor: "var(--secondary)",
											stopOpacity: .4
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "100%",
											stopColor: "var(--secondary)",
											stopOpacity: 0
										})]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										strokeDasharray: "3 3",
										stroke: "var(--border)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "month",
										stroke: "var(--muted-foreground)",
										fontSize: 12
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										stroke: "var(--muted-foreground)",
										fontSize: 12
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
										background: "var(--popover)",
										border: "1px solid var(--border)",
										borderRadius: 12
									} }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
										type: "monotone",
										dataKey: "appointments",
										stroke: "var(--primary)",
										fill: "url(#c1)",
										strokeWidth: 2
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
										type: "monotone",
										dataKey: "completed",
										stroke: "var(--secondary)",
										fill: "url(#c2)",
										strokeWidth: 2
									})
								]
							})
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6 hover-lift",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: "By department"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Patient distribution"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-72",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
										data: patientsByDept,
										dataKey: "value",
										nameKey: "name",
										innerRadius: 50,
										outerRadius: 80,
										paddingAngle: 2,
										children: patientsByDept.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: [
											"var(--chart-1)",
											"var(--chart-2)",
											"var(--chart-3)",
											"var(--chart-4)",
											"var(--chart-5)",
											"var(--primary-glow)"
										][i % 6] }, i))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
										background: "var(--popover)",
										border: "1px solid var(--border)",
										borderRadius: 12
									} }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
										iconType: "circle",
										wrapperStyle: { fontSize: 11 }
									})
								] })
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6 hover-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: "Upcoming appointments"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/app/appointments",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								children: "View all"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: upcoming.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-xl border border-border/50 p-3 hover:bg-muted/30",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-medium",
										children: a.patientName
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "truncate text-xs text-muted-foreground",
										children: [
											a.doctorName,
											" · ",
											a.department
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: a.date
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: a.time
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: a.status })
							]
						}, a.id))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6 hover-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: "Active camps"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/app/camps",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								children: "Explore"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: activeCamps.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/app/camps/$id",
							params: { id: c.id },
							className: "block rounded-xl border border-border/50 p-3 hover:bg-muted/30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-sm font-medium",
											children: c.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "truncate text-xs text-muted-foreground",
											children: [
												c.location,
												" · ",
												c.date
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-full gradient-primary",
												style: { width: `${Math.min(100, c.registered / c.capacity * 100)}%` }
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-[10px] text-muted-foreground",
											children: [
												c.registered,
												"/",
												c.capacity,
												" registered"
											]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: c.status })]
							})
						}, c.id))
					})]
				})]
			})
		]
	});
}
//#endregion
export { Dashboard as component };
