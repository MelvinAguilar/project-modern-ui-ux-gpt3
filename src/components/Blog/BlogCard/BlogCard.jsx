const BlogCard = ({ image, title, link, date, className = "" }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="width-fill-available">
        <img
          src={image}
          alt={title}
          width={327}
          height={130}
          loading="lazy"
          className="w-full"
        />
      </div>

      <div className="flex h-full flex-col gap-8 bg-prussian-blue-aux p-6">
        <p className="text-[0.7281rem] text-white">{date}</p>
        <h3 className="text-[1.5694rem] font-[800] text-white">{title}</h3>
        <a
          className="mt-auto cursor-pointer text-[0.7281rem] text-white transition duration-300 ease-in-out hover:text-electric-blue"
          href={link}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
