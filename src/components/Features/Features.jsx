import FeaturesCard from "./FeaturesCard/FeaturesCard";

const Features = () => {
  return (
    <div
      className="blur-02 relative my-16 mx-auto max-w-[77.125rem] px-8 md:grid md:grid-cols-2 md:gap-4"
      id="case-studies"
    >
      <div>
        <h2 className="text-linear-background max-w-[18.5ch] text-2xl font-[800] md:text-[2.125rem] md:leading-[2.8125rem]">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h2>
        <a className="mt-8 mb-14 block w-fit cursor-pointer text-[1rem] text-light-orange transition duration-300 ease-in-out hover:text-orange md:text-right">
          Request Early Access to Get Started
        </a>
      </div>
      <div className="flex flex-wrap justify-around gap-y-16">
        <FeaturesCard title="Improving end distrusts instantly">
          From they fine john he give of rich he. They age and draw mrs like.
          Improving end distrusts may instantly was household applauded.
        </FeaturesCard>
        <FeaturesCard title="Become the tended active">
          Considered sympathize ten uncommonly occasional assistance sufficient
          not. Letter of on become he tended active enable to.
        </FeaturesCard>
        <FeaturesCard title="Message or am nothing">
          Led ask possible mistress relation elegance eat likewise debating. By
          message or am nothing amongst chiefly address.
        </FeaturesCard>
        <FeaturesCard title="Really boy law county">
          Really boy law county she unable her sister. Feet you off its like
          like six. Among sex are leave law built now. In built table in an
          rapid blush.
        </FeaturesCard>
      </div>
    </div>
  );
};

export default Features;
