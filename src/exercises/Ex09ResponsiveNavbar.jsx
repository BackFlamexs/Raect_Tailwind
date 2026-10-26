import { ExerciseWrapper } from "../components/layout/ExerciseWrapper";
import { Navbar } from "../components/ui/Navbar";

export function Ex09ResponsiveNavbar() {
  return (
    <ExerciseWrapper
      number="09"
      title="Responsive Navbar"
      subtitle="Logo + navigation + CTA + mobile-thinking"
    >
      <div className="flex w-full flex-col items-center gap-8 rounded-3xl bg-slate-50/50 p-6 sm:p-10">
        <Navbar />
        
        <p className="text-center text-xs font-medium text-slate-500">
          Challenge: create desktop + mobile variants with Tailwind breakpoints.
        </p>
      </div>
    </ExerciseWrapper>
  );
}

export default Ex09ResponsiveNavbar;