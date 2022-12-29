const Register = () => {
  return (
    <div className="my-24 px-8">
      <div className="bg-linear-background mx-auto max-w-[73.125rem] rounded-xl p-6 md:flex md:items-center md:justify-between md:p-[2.875rem]">
        <div>
          <a className="cursor-pointer text-[0.75rem] text-black md:text-right">
            Request Early Access to Get Started
          </a>
          <h2 className="text-[1.5rem] font-[800] text-black md:leading-[2.8125rem]">
            Register today & start exploring the endless possiblities.
          </h2>
        </div>
        <a
          href="#"
          className="mt-4 block rounded-full border-4 border-black bg-black py-[0.75rem] px-[2.8125rem] text-[1.125rem] font-[700] text-white transition duration-300 ease-in-out  hover:bg-transparent hover:text-black md:mt-0"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Register;
