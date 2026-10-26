import { Ex01ButtonSystem } from "./exercises/Ex01ButtonSystem";
import { Ex02BadgeAvatar } from "./exercises/Ex02BadgeAvatar";
import { Ex03ProfileCard } from "./exercises/Ex03ProfileCard";
import { Ex04ProductCard } from "./exercises/Ex04ProductCard";
import { Ex05LoginForm } from "./exercises/Ex05LoginForm";
import { Ex06KpiCard } from "./exercises/Ex06KpiCard";
import { Ex07PricingCard } from "./exercises/Ex07PricingCard";
import { Ex08AlertNotification } from "./exercises/Ex08AlertNotification";
import { Ex09ResponsiveNavbar } from "./exercises/Ex09ResponsiveNavbar";
import { Ex10MiniDashboard } from "./exercises/Ex10MiniDashboard";

export default function App() {
  return (
    <main className="min-h-screen space-y-8 bg-slate-100 p-6 font-sans md:p-10">
      <Ex01ButtonSystem />
      <Ex02BadgeAvatar />
      <Ex03ProfileCard />
      <Ex04ProductCard />
      <Ex05LoginForm />
      <Ex06KpiCard />
      <Ex07PricingCard />
      <Ex08AlertNotification />
      <Ex09ResponsiveNavbar />
      <Ex10MiniDashboard />
    </main>
  );
}