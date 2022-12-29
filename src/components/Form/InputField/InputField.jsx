const inputField = ({
  children,
  className,
  label,
  nameGroup,
  validation,
  innerRef,
  ...rest
}) => {
  return (
    <div className={`w-full ${className}`}>
      <input
        className={`border-very-dark-blue/10 focus:border-very-dark-blue/50 h-[3.5rem] w-full border-0 bg-prussian-blue  px-4 py-3 text-white focus:outline-none ${
          validation ? "!border-red-500 pr-10" : ""
        }`}
        name={nameGroup}
        {...rest}
        {...innerRef}
      />

      <label className="sr-only" htmlFor={nameGroup}>
        {label}
      </label>
      {/* {validation && (
        <img src={exclamation} className="absolute right-3 transform -translate-y-1/2 top-1/2" />
      )} */}
      {/* Set the react-hook validation here */}
      {children}
    </div>
  );
};

export default inputField;
