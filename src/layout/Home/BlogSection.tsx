import { get_featured_blogs } from "@/utils/function";
import { IBlog } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
};
const BlogSection = () => {
  const { data, mutate, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/featuredblogs`,
    fetcher
  );
  console.log(data);
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
        {data?.map((item: IBlog, i: number) => (
          <div
            key={i}
            className="!h-96 rounded-[40px] bg-black relative w-full"
          >
            <div className="bg-white !h-full rounded-[30px] absolute -top-4 w-full -left-4">
              <div className="w-full pt-5">
                <div className="h-full w-11/12 mx-auto">
                  <Image
                    src={item.featuredImage.url}
                    alt={item.featuredImage.alt}
                    height={400}
                    className="h-72 w-full rounded-3xl object-center"
                    width={400}
                  />
                  <Link
                    href={`/blog/${item.slug}`}
                    className="line-clamp-1 font-bold text-xl"
                  >
                    {item.title}
                  </Link>
                  <p className="line-clamp-1">{item.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
