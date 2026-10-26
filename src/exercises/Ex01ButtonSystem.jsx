import { ExerciseWrapper } from "../components/layout/ExerciseWrapper";
import { Button } from "../components/ui/Button";

export function Ex01ButtonSystem() {
  return (
    <ExerciseWrapper
      number="01"
      title="Button System"
      subtitle="Variants + hover/focus/disabled states"
    >
      <div className="max-w-lg rounded-3xl bg-slate-100 p-6">
        <div className="flex flex-wrap gap-3.5">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
        </div>

        <div className="mt-3.5">
          <Button disabled>Disabled</Button>
        </div>

        <p className="mt-5 text-xs text-slate-500">
          44px height · 12px radius · px 20 · semibold
        </p>
      </div>
    </ExerciseWrapper>
  );
}

export default Ex01ButtonSystem;