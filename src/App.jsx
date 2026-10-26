function ProfileAvatar() {
  return (
    <div
      aria-label="Avatar com as iniciais FC"
      className="grid size-16 shrink-0 place-items-center rounded-full bg-blue-600 text-lg font-bold tracking-wide text-white sm:size-20 sm:text-xl"
      role="img"
    >
      FC
    </div>
  )
}

function ProfileHeader() {
  return (
    <header className="flex items-center gap-4">
      <ProfileAvatar />

      <div className="min-w-0">
        <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-blue-600">
          Front-end
        </span>

        <h1 className="mt-1 text-lg font-bold leading-tight tracking-tight text-slate-900 sm:text-xl">
          Florispofildo Mello Costa
        </h1>

        <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
          Dev · React · SPA
        </p>
      </div>
    </header>
  )
}

function ProfileActions() {
  return (
    <div className="mt-4 flex gap-2.5 sm:mt-5">
      <button
        className="flex-1 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:flex-none sm:w-[180px]"
        type="button"
      >
        Seguir
      </button>
      <button
        className="flex-1 rounded-xl bg-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 sm:flex-none sm:w-[130px]"
        type="button"
      >
        Perfil
      </button>
    </div>
  )
}

function ProfileCard() {
  return (
    <article className="mx-auto w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
      <ProfileHeader />

      <p className="mt-4 text-sm leading-6 text-slate-500">
        Estudando como pequenas utilities podem ser combinadas para construir interfaces.
      </p>

      <ProfileActions />
    </article>
  )
}

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#e5e7eb] px-5 py-12 text-slate-900 sm:px-8">
      <ProfileCard />
    </main>
  )
}

export default App
