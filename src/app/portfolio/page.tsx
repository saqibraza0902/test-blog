import CommonLayout from "@/layout";
import { get_portfolios } from "@/utils/function";
import { IPortfolio } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = async () => {
  const newposts = await get_portfolios();

  return (
    <CommonLayout>
      {newposts?.length > 0 ? (
        <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 p-10">
          {newposts?.map((post: IPortfolio, index: number) => (
            <div key={index}>
              <div>
                {post?.gallery?.length > 0 ? (
                  <div className="relative h-80 group">
                    <Image
                      fill={true}
                      className=""
                      alt={post?.gallery[0]?.alt}
                      src={post?.gallery[0]?.url}
                    />
                  </div>
                ) : (
                  <div className="h-80 w-full bg-slate-400"></div>
                )}
                <Link
                  className="cursor-pointer"
                  href={`/portfolio/${post.id}`}
                  key={post.id}
                >
                  <p className="text-xl font-semibold">{post.title}</p>
                  <p className="text-justify line-clamp-2">{post.desc}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No Portfolio posts found.</p>
      )}
    </CommonLayout>
  );
};

export default Portfolio;
