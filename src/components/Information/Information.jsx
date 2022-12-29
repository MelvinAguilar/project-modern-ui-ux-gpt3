import InformationCard from "./InformationCard/InformationCard";

const Information = () => {
  return (
    <div className="px-8 py-[0.0625rem]" id="what-is-gpt">
      <div className="my-16 mx-auto flex max-w-[73.125rem] flex-col gap-4 bg-prussian-blue-aux p-5 md:gap-24 md:p-14">
        <div className="md:grid md:grid-cols-[1fr,2fr] md:gap-4">
          <h2 className="line-heading mt-4 text-2xl font-[800] text-white md:mt-0">
            What is GPT-3
          </h2>
          <p className="text-[1rem] text-light-blue">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
        <div className="my-8 md:my-0 md:grid md:grid-cols-[2fr,1fr] md:gap-4">
          <h2 className="text-linear-background max-w-[21ch] text-2xl font-[800] md:text-[2.125rem]">
            The possibilities are beyond your imagination
          </h2>
          <a className="cursor-pointer text-[1rem] text-light-orange transition duration-300 ease-in-out hover:text-orange md:text-right">
            Explore The Library
          </a>
        </div>
        <div className="flex flex-wrap justify-around gap-y-12 gap-x-4 md:gap-y-24 lg:justify-between">
          <InformationCard title="Chatbots">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought.
          </InformationCard>
          <InformationCard title="Knowledgebase">
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b
          </InformationCard>
          <InformationCard title="Education">
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b
          </InformationCard>
        </div>
      </div>
    </div>
  );
};

export default Information;
