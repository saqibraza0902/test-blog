import CommonLayout from "@/layout";
import { get_blogs } from "@/utils/function";
import { IBlog } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default async function Blog() {
  const blogPosts = await get_blogs();
  return (
    <CommonLayout>
      {blogPosts?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 p-10 ">
          {blogPosts.map((post: IBlog) => (
            <div key={post.id}>
              {post.featuredImage.url ? (
                <div className="relative h-80 group">
                  <Image
                    layout="fill"
                    // className="h-full"
                    alt={post?.featuredImage?.alt}
                    src={post.featuredImage?.url}
                  />
                </div>
              ) : (
                <div className="h-80 w-full bg-brand_gray-400"></div>
              )}
              <Link className="cursor-pointer" href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-justify line-clamp-2">{post.desc}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No blog posts found.</p>
      )}
    </CommonLayout>
  );
}
