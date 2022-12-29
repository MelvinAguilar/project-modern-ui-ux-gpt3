import hero from "../../assets/images/ai.png";
import people from "../../assets/images/people.png";
import Form from "../Form/Form";

const Introduction = () => {
  return (
    <div className="blur-01 mx-auto flex max-w-[77.125rem] flex-col items-center justify-center py-16 px-8 lg:flex-row-reverse lg:justify-between lg:gap-16">
      <div className="width-fill-available flex-1">
        <img
          src={hero}
          alt=""
          aria-hidden="true"
          width={657}
          height={466}
          className="mx-auto"
        />
      </div>

      <div className="flex flex-[1.3] flex-col gap-8 text-center lg:text-left">
        <h1 className="text-linear-background text-2xl font-[800] tracking-[-0.04em] md:text-[3.875rem] md:leading-[4.6875rem]">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="text-light-blue md:text-[1.25rem]">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <Form />
        <div className="mx-auto mt-3 flex w-full max-w-[39.375rem] flex-col items-center justify-center gap-4 md:flex-row lg:justify-start">
          <img src={people} alt="" aria-hidden="true" width={182} height={38} />
          <p className="text-[0.75rem] text-white">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
