const InformationCard = ({ title, children }) => {
  return (
    <div className="basis-72">
      <h3 className="line-heading mb-8 text-[1.5rem] font-[800] text-white">
        {title}
      </h3>
      <p className="text-[1rem] text-light-blue">{children}</p>
    </div>
  );
};

export default InformationCard;
