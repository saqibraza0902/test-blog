import React from "react";

const BlogSection = () => {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="font-SuisseBold w-1/12 lg:w-full text-6xl text-black">
        Our Blogs
      </h2>
      <p className="font-Suisse text-lg text-black">
        To lay a solid foundation for the creative process that follows, we
        begin our journey with the discovery phase.To lay a solid foundation for
        the creative process that follows, we begin our journey with the
        discovery phase.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ml-4 lg:ml-0">
        {[0, 0, 0, 0].map((i) => (
          <div
            key={i}
            className="!h-96 rounded-[40px] bg-black relative w-full"
          >
            <div className="bg-white !h-full rounded-[30px] absolute -top-4 w-full -left-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
