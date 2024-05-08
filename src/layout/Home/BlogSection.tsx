import BlogBox from "@/ui/components/BlogBox";
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
          <BlogBox item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
