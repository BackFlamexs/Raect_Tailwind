import { ExerciseWrapper } from "../components/layout/ExerciseWrapper";
import { KpiCard } from "../components/ui/KpiCard";

export function Ex06KpiCard() {
  return (
    <ExerciseWrapper
      number="06"
      title="KPI Card"
      subtitle="Data hierarchy + semantic status badge"
    >
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
        <KpiCard
          label="Revenue"
          value="R$ 128.4k"
          change="+12.8%"
          comparison="vs previous period"
          trend="positive"
          icon={
            <span className="text-xl font-black italic select-none">$</span>
          }
        />

        <KpiCard
          label="Expenses"
          value="R$ 42.1k"
          change="-4.2%"
          comparison="vs previous period"
          trend="negative"
          icon={
            <span className="text-xl font-black select-none">↓</span>
          }
        />

        <KpiCard
          label="Active Users"
          value="8,402"
          change="0.0%"
          comparison="vs previous period"
          trend="neutral"
          icon={
            <span className="text-xl font-black select-none">☺</span>
          }
        />
      </div>
    </ExerciseWrapper>
  );
}

export default Ex06KpiCard;