const FeaturesCard = ({ title, children }) => {
  return (
    <div className="md:grid md:grid-cols-[1fr,2fr] md:gap-16">
      <h3 className="line-heading text-[1.125rem] font-[800] text-white">
        {title}
      </h3>
      <p className="text-[0.875rem] text-light-blue">{children}</p>
    </div>
  );
};

export default FeaturesCard;
