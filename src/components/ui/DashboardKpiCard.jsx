export function DashboardKpiCard({ label, value }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <span className="block text-xs font-semibold text-slate-500">{label}</span>
      <strong className="mt-1.5 block text-2xl font-extrabold tracking-tight text-slate-900">
        {value}
      </strong>
    </article>
  );
}

export default DashboardKpiCard;