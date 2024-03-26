import CommonLayout from "@/layout";
// import { get_blogs } from "@/utils/function";
import { IBlog } from "@/utils/types";
import Link from "next/link";
import React from "react";
import { MdManageHistory } from "react-icons/md";
const get_blogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts`, {
      method: "GET",
      next: { revalidate: 10 },
    });
    if (res.ok) {
      return console.log("Error");
    }
    return res.json();
  } catch (error) {
    return error;
  }
};
export default async function Blog() {
  const blogPosts = await get_blogs();
  return (
    <CommonLayout>
      {blogPosts?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 p-10 ">
          {blogPosts.map((post: IBlog) => (
            <div key={post.id}>
              {post.featuredImage.url ? (
                <div className="relative group">
                  <img
                    className="h-80"
                    alt={post.featuredImage?.alt}
                    src={post.featuredImage?.url}
                  />
                  <div className="absolute top-5 left-5 inset-0  opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link href={`/actions?id=${post?.id}&slug=blog`}>
                      <MdManageHistory size={25} color="#a0a0a0" />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="h-80 w-full bg-brand_gray-400">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link href={`/actions?id=${post?.id}&slug=portfolio`}>
                      <MdManageHistory />
                    </Link>
                  </div>
                </div>
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
