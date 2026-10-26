export function ExerciseWrapper({ number, title, subtitle, children }) {
  return (
    <section className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xs">
      <header className="mb-8 border-b border-slate-200 pb-5">
        <span className="inline-block rounded-full bg-teal-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-600">
          Exercise {number}
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900">
          {title}
        </h1>
        <p className="mt-1.5 text-sm text-slate-500">{subtitle}</p>
      </header>

      <div>{children}</div>
    </section>
  );
}

export default ExerciseWrapper;