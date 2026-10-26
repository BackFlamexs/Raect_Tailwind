const variants = {
  primary: "bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800 focus-visible:ring-teal-600",
  secondary: "bg-slate-200 text-slate-900 hover:bg-slate-300 active:bg-slate-300/90 focus-visible:ring-slate-400",
  danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-600",
  dark: "bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950 focus-visible:ring-slate-900",
  violet: "bg-violet-600 text-white hover:bg-violet-700 active:bg-violet-800 focus-visible:ring-violet-600",
};

export function Button({ children, variant = "primary", disabled = false, type = "button", className = "" }) {
  const baseClasses = "inline-flex h-11 min-w-[100px] cursor-pointer items-center justify-center rounded-xl px-5 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500";
  const variantClasses = variants[variant] || variants.primary;

  return (
    <button type={type} disabled={disabled} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  );
}

export default Button;