import { Badge } from "./Badge";
import { Button } from "./Button";

export function PricingCard({
  name,
  price,
  period,
  features = [],
  highlighted = false,
  badge,
}) {
  return (
    <article
      className={`w-full max-w-[400px] rounded-3xl border bg-white p-8 shadow-xs transition-shadow hover:shadow-md ${
        highlighted ? "border-violet-200" : "border-slate-200"
      }`}
    >
      {badge && (
        <div className="mb-5">
          <Badge variant="violet">{badge}</Badge>
        </div>
      )}

      <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
        {name}
      </h2>

      <div className="mt-4 flex items-baseline gap-1">
        <strong className="text-5xl font-extrabold tracking-tight text-slate-900">
          {price}
        </strong>
        <span className="text-sm font-medium text-slate-500">{period}</span>
      </div>

      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-sm text-slate-600">
            <span className="text-sm font-bold text-slate-800">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <Button
        variant={highlighted ? "violet" : "primary"}
        className="mt-8 w-full"
      >
        Start free trial
      </Button>
    </article>
  );
}

export default PricingCard;