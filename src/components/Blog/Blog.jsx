import BlogCard from "./BlogCard/BlogCard";

import blog1 from "../../assets/images/blog01.png";
import blog2 from "../../assets/images/blog02.png";
import blog3 from "../../assets/images/blog03.png";
import blog4 from "../../assets/images/blog04.png";
import blog5 from "../../assets/images/blog05.png";

const Blog = () => {
  return (
    <div className="my-16 mx-auto max-w-[77.125rem] px-8" id="library">
      <h2 className="text-linear-background mb-16 max-w-[24ch] text-2xl font-[800] tracking-[-0.04em] md:text-[3.875rem] md:leading-[4.6875rem]">
        A lot is happening, We are blogging about it.
      </h2>
      <div className="grid gap-8 md:grid-cols-[repeat(2,1fr)] md:grid-rows-2 lg:grid-cols-[26.0625rem_repeat(2,1fr)]">
        <BlogCard
          className="md:row-span-2"
          image={blog1}
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
          link="#"
        />
        <BlogCard
          image={blog2}
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
          link="#"
        />
        <BlogCard
          image={blog3}
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
          link="#"
        />
        <BlogCard
          image={blog4}
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
          link="#"
        />
        <BlogCard
          image={blog5}
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
          link="#"
        />
      </div>
    </div>
  );
};

export default Blog;
