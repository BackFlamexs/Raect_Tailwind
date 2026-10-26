import { NavLink } from "./NavLink";
import { Button } from "./Button";

export function Navbar() {
  return (
    <nav className="flex h-[90px] w-full items-center justify-between rounded-[18px] border border-slate-200 bg-white px-6 shadow-xs">
      <div className="text-xl font-black tracking-tight text-teal-600 uppercase">
        Title
      </div>

      <div className="hidden items-center gap-8 md:flex">
        <NavLink href="#" active>
          Home
        </NavLink>
        <NavLink href="#">Products</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Contact</NavLink>
      </div>

      <div className="hidden md:block">
        <Button variant="primary">Get started</Button>
      </div>

      <button
        type="button"
        className="flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
        aria-label="Abrir menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
}

export default Navbar;