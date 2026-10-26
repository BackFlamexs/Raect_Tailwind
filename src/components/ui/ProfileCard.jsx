import { Avatar } from "./Avatar";
import { Badge } from "./Badge";
import { Button } from "./Button";

export function ProfileCard({
  name,
  role,
  initials,
  category,
  description,
  avatarVariant = "teal",
  badgeVariant = "info",
}) {
  return (
    <article className="w-full max-w-[420px] rounded-3xl border border-slate-200 bg-white p-6 shadow-xs">
      <header className="flex items-center gap-4">
        <Avatar initials={initials} size="lg" variant={avatarVariant} />

        <div>
          <Badge variant={badgeVariant}>{category}</Badge>
          <h2 className="mt-2 text-xl font-extrabold tracking-tight text-slate-900">
            {name}
          </h2>
          <p className="mt-0.5 text-xs text-slate-500">{role}</p>
        </div>
      </header>

      <p className="mt-4 text-sm text-slate-600">{description}</p>

      <div className="mt-5 flex items-center gap-3">
        <Button variant="primary" className="flex-1">
          Follow
        </Button>
        <Button variant="secondary">Profile</Button>
      </div>
    </article>
  );
}

export default ProfileCard;