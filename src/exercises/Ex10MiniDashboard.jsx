import { ExerciseWrapper } from "../components/layout/ExerciseWrapper";
import { Button } from "../components/ui/Button";
import { DashboardKpiCard } from "../components/ui/DashboardKpiCard";

const metrics = [
  { label: "Revenue", value: "128k" },
  { label: "Orders", value: "1,842" },
  { label: "Conv.", value: "4.7%" },
];

export function Ex10MiniDashboard() {
  return (
    <ExerciseWrapper
      number="10"
      title="Mini Dashboard"
      subtitle="Compose reusable cards into a responsive section"
    >
      <section className="w-full max-w-4xl rounded-3xl bg-slate-100 p-8 shadow-inner">
        <header className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
            Overview
          </h2>
          <Button variant="dark">Export</Button>
        </header>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {metrics.map((metric, index) => (
            <DashboardKpiCard
              key={index}
              label={metric.label}
              value={metric.value}
            />
          ))}
        </div>

        <div className="mt-4 flex flex-col items-stretch gap-4 md:flex-row">
          <article className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-xs font-bold text-slate-900">Performance</h3>

            <div className="mt-6 flex h-24 items-end gap-3 sm:gap-5 pr-6">
              <span className="h-6 w-full max-w-[40px] rounded-lg bg-slate-200"></span>
              <span className="h-9 w-full max-w-[40px] rounded-lg bg-slate-200"></span>
              <span className="h-12 w-full max-w-[40px] rounded-lg bg-slate-200"></span>
              <span className="h-16 w-full max-w-[40px] rounded-lg bg-slate-200"></span>
              <span className="h-20 w-full max-w-[40px] rounded-lg bg-slate-200"></span>
              <span className="h-24 w-full max-w-[40px] rounded-lg bg-teal-600"></span>
            </div>
          </article>

          <aside className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:w-56">
            <h3 className="text-xs font-bold text-slate-900">Activity</h3>
            
            <ul className="mt-4 space-y-2.5 text-xs text-slate-500">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-slate-400"></span>
                New order
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-slate-400"></span>
                Payment approved
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-slate-400"></span>
                User created
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </ExerciseWrapper>
  );
}

export default Ex10MiniDashboard;