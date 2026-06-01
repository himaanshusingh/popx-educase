const variantStyles = {
  primary: "bg-popx-primary text-white hover:bg-[#4f1f85] active:bg-[#431a72]",
  secondary:
    "bg-popx-primary-light text-popx-primary hover:bg-[#e2d9f3] active:bg-[#d8ccef]",
};

const Button = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`w-full rounded-md px-4 py-3 text-sm font-semibold transition cursor-pointer ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
