import mockup from "../../assets/images/possibility.png";

const PossibilitySection = () => {
  return (
    <div
      className="my-16 mx-auto grid max-w-[77.125rem] gap-4  px-8 md:grid-cols-2 md:items-end"
      id="open-ai"
    >
      <div className="width-fill-available">
        <img
          src={mockup}
          alt=""
          aria-hidden="true"
          width={607}
          height={546}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-8">
        <a className="cursor-pointer text-[1rem] text-electric-blue transition duration-300 ease-in-out hover:text-light-blue">
          Request Early Access to Get Started
        </a>
        <h2 className="text-linear-background text-2xl font-[800] leading-[2.8125rem] md:text-[2.125rem]">
          The possibilities are beyond your imagination
        </h2>
        <p className="text-[1rem] text-light-blue">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <a className="mb-8 cursor-pointer text-[1rem] text-light-orange transition duration-300 ease-in-out hover:text-orange">
          Request Early Access to Get Started
        </a>
      </div>
    </div>
  );
};

export default PossibilitySection;
