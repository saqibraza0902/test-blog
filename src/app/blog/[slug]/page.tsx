import CommonLayout from "@/layout";
import { getSinglePost } from "@/utils/function";
import { IBlog } from "@/utils/types";
import Image from "next/image";
import React from "react";

export default async function SinglePost({
  params,
}: {
  params: { slug: string };
}) {
  const blogPost: IBlog = await getSinglePost(params.slug);
  return (
    <CommonLayout>
      <div className="flex justify-center w-full min-h-screen">
        <div className="!w-2/3 grid grid-cols-1 !mx-auto p-4">
          <h2 className="text-2xl  font-semibold">{blogPost.title}</h2>
          {blogPost?.featuredImage?.url ? (
            <div className="relative h-96 group">
              <Image
                fill={true}
                // className="h-full"
                alt={blogPost?.featuredImage?.alt}
                src={blogPost.featuredImage?.url}
              />
            </div>
          ) : (
            <div className="w-full h-96 bg-brand_gray-400"></div>
          )}
          <p>{blogPost?.desc}</p>
          <div dangerouslySetInnerHTML={{ __html: blogPost?.content }} />
        </div>
      </div>
    </CommonLayout>
  );
}
