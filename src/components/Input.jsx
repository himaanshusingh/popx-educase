const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-popx-text">
        {label}
        {required && <span className="text-popx-primary"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-md border border-popx-border bg-popx-surface px-3 py-2.5 text-sm text-popx-text outline-none transition placeholder:text-popx-muted/70 focus:border-popx-primary focus:ring-2 focus:ring-popx-primary/20"
      />
    </label>
  );
};

export default Input;
