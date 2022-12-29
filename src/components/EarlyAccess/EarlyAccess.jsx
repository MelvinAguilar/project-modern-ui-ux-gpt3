const EarlyAccess = () => {
  return (
    <div className="flex flex-col gap-12 bg-maastricht-blue py-32 px-8">
      <h2 className="text-linear-background mx-auto max-w-[19ch] text-center text-2xl font-[800] tracking-[-0.04em] md:text-[3.875rem] md:leading-[4.6875rem]">
        Do you want to step in to the future before others
      </h2>
      <a className="mx-auto cursor-pointer border-2 border-white py-4 px-8 text-white md:text-[1.125rem] hover:bg-white hover:text-dark-blue transition duration-300 ease-in-out ">
        Request Early Access
      </a>
    </div>
  );
};

export default EarlyAccess;
