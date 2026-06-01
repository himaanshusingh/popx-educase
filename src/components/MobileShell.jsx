const MobileShell = ({ children, className = "" }) => {
  return (
    <div className="box-border flex h-dvh items-center justify-center overflow-hidden bg-popx-page p-4">
      <div
        className={`relative flex h-full max-h-[812px] w-full max-w-[375px] flex-col overflow-hidden rounded-2xl bg-popx-surface shadow-[0_8px_32px_rgb(0_0_0/12%)] ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default MobileShell;
