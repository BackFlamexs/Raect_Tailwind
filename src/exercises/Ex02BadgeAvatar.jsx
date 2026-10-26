import { ExerciseWrapper } from "../components/layout/ExerciseWrapper";
import { Avatar } from "../components/ui/Avatar";
import { Badge } from "../components/ui/Badge";

export function Ex02BadgeAvatar() {
  return (
    <ExerciseWrapper
      number="02"
      title="Badge + Avatar"
      subtitle="Small UI primitives with size, radius and semantic color"
    >
      <div className="max-w-md rounded-3xl bg-slate-100 p-6">
        <div className="flex flex-wrap items-center gap-4">
          <Avatar initials="EI" />
          <Avatar initials="UX" variant="violet" />
          <Avatar initials="JS" variant="green" />
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Badge variant="info">Front-end</Badge>
          <Badge variant="success">New</Badge>
          <Badge variant="warning">Warning</Badge>
        </div>

        <p className="mt-5 text-xs text-slate-500">
          Avatar: 56×56 · pill badge · uppercase tracking
        </p>
      </div>
    </ExerciseWrapper>
  );
}

export default Ex02BadgeAvatar;