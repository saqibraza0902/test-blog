import CommonLayout from "@/layout";
import { getSinglePost } from "@/utils/function";
import { IBlog } from "@/utils/types";
import React from "react";

export default async function SinglePost({
  params,
}: {
  params: { slug: string };
}) {
  // const blogPost: IBlog = await getSinglePost(params.slug);
  return (
    <CommonLayout>
      <div className="flex justify-center w-full min-h-screen">
        <div className="w-2/3 mx-auto p-4">
          {/* <h2 className="text-2xl  font-semibold">{blogPost.title}</h2>
          {blogPost?.featuredImage?.url ? (
            <div className=" w-full">
              <img
                className="object-center"
                src={blogPost?.featuredImage?.url}
                alt={blogPost?.featuredImage?.alt}
              />
            </div>
          ) : (
            <div className="w-full h-96 bg-brand_gray-400"></div>
          )}
          <p>{blogPost?.desc}</p>
          <div dangerouslySetInnerHTML={{ __html: blogPost?.content }} /> */}
        </div>
      </div>
    </CommonLayout>
  );
}
