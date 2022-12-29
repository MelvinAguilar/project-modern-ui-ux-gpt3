const ErrorMessage = ({ children, className = "", ...props }) => {
  return (
    <span
      className={`absolute top-full left-0  w-full rounded-md bg-white/10 px-2 py-1 text-sm text-red-200 transition-all duration-300 ease-in-out ${className}`}
      {...props}
      role="alert"
    >
      {children}
    </span>
  );
};

export default ErrorMessage;
