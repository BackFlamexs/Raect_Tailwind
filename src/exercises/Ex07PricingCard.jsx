import { ExerciseWrapper } from "../components/layout/ExerciseWrapper";
import { PricingCard } from "../components/ui/PricingCard";

export function Ex07PricingCard() {
  return (
    <ExerciseWrapper
      number="07"
      title="Pricing Card"
      subtitle="Feature list + pricing hierarchy + highlighted CTA"
    >
      <PricingCard
        name="Pro Plan"
        price="$29"
        period="/ month"
        features={[
          "Unlimited projects",
          "Advanced analytics",
          "Priority support",
        ]}
        highlighted={true}
        badge="MOST POPULAR"
      />
    </ExerciseWrapper>
  );
}

export default Ex07PricingCard;