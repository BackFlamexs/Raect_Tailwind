const variantStyles = {
  success: {
    container: "bg-emerald-50",
    text: "text-emerald-700",
    icon: "!",
  },
  warning: {
    container: "bg-amber-50",
    text: "text-amber-700",
    icon: "!", 
  },
  error: {
    container: "bg-red-50",
    text: "text-red-700",
    icon: "!", 
  },
};

export function Alert({ variant = "success", title, children }) {
  const styles = variantStyles[variant] || variantStyles.success;

  return (
    <div className={`flex items-start gap-3.5 rounded-2xl p-4 w-full max-w-sm ${styles.container}`}>
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-current bg-white/50 font-black ${styles.text}`}
      >
        {styles.icon}
      </div>

      <div className="flex flex-col pt-1">
        {title && (
          <strong className={`text-sm font-extrabold tracking-tight ${styles.text}`}>
            {title}
          </strong>
        )}
        <p className={`mt-0.5 text-sm font-medium opacity-80 ${styles.text}`}>
          {children}
        </p>
      </div>
    </div>
  );
}

export default Alert;