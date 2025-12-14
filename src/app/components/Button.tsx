interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-display uppercase tracking-wider border-2 border-dark transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  // Neo-brutalist hover effects: translate down-right to cover the shadow
  const variants = {
    primary: "bg-primary text-white shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(18,18,18,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
    secondary: "bg-secondary text-dark shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(18,18,18,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
    dark: "bg-dark text-white shadow-neo hover:bg-gray-900 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(18,18,18,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
    outline: "bg-transparent text-dark border-dark hover:bg-dark hover:text-white",
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base md:text-lg px-8 py-4",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
