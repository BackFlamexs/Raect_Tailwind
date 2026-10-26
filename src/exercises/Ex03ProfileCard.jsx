import { ExerciseWrapper } from "../components/layout/ExerciseWrapper";
import { ProfileCard } from "../components/ui/ProfileCard";

export function Ex03ProfileCard() {
  return (
    <ExerciseWrapper
      number="03"
      title="Profile Card"
      subtitle="Composition: Avatar + Badge + Button"
    >
      <div className="flex flex-wrap items-start justify-center gap-6">
        <ProfileCard
          name="Renan Silva Nunes"
          role="Aluno · React · SPA"
          initials="RSN"
          category="Front-end"
          description="Building reusable interfaces with React and Tailwind CSS."
        />

        <ProfileCard
          name="Mariana Costa"
          role="Product Designer · Design Systems"
          initials="MC"
          category="UI / UX"
          avatarVariant="violet"
          badgeVariant="success"
          description="Crafting accessible components and scalable design tokens."
        />
      </div>
    </ExerciseWrapper>
  );
}

export default Ex03ProfileCard;