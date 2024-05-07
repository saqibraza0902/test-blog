import CommonLayout from "@/layout";
import { getSinglePost } from "@/utils/function";
import extractStrongText from "@/utils/text";
import { timestamps } from "@/utils/timestamp";
import { IBlog } from "@/utils/types";
import { addCustomStyling } from "@/utils/transformation";
import React from "react";
import { CiCalendar } from "react-icons/ci";
export default async function SinglePost({
  params,
}: {
  params: { slug: string };
}) {
  const blogPost: IBlog = await getSinglePost(params.slug);
  const scrollToSection = () => {
    const section = document.querySelector("#scrollToSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const strongText = extractStrongText(blogPost.content);

  return (
    <CommonLayout>
      <div className="flex relative justify-center w-full h-full min-h-screen ">
        <div className="h-full">
          <div className="h-screen bg-brand_blue-400 rounded-b-[40px] px-14 py-14 flex flex-col justify-end">
            <h2 className="text-[70px] text-white font-semibold">
              {blogPost.title}
            </h2>
            <div className="bg-white my-5 w-full h-[1px]" />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <CiCalendar color="#fff" size={24} />
                <span className="text-white">
                  {/* {timestamps(blogPost.createdAt?.seconds)} */}
                </span>
              </div>
              <div>
                <a className="text-white" href="#article">
                  Scroll
                </a>
              </div>
            </div>
          </div>
          <div id="article" className="relative">
            <section className="px-14  flex gap-10 py-10">
              <div className="sticky start-1 top-0">
                <div className="">
                  <span>Share</span>
                  <div className="flex flex-col gap-2">
                    {[1, 2, 3, 9].map((el, i) => (
                      <div
                        key={el}
                        className="h-9 w-9 rounded-full bg-black"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-7/12">
                <h3 className="text-2xl font-semibold">{blogPost?.desc}</h3>
                {/* Content */}
              </div>
              <div className="flex gap-1">
                <div className="h-12 w-12 rounded-full bg-black"></div>
                <div className="flex flex-col text-sm gap-1">
                  <span>Valentine Boyev </span>
                  <span>CEO of Halo Lab</span>
                </div>
              </div>
            </section>

            <section className="ml-36 mr-14 pb-10">
              <div className="bg-black my-5 w-full h-[1px]"></div>
            </section>
            <section className="h-full flex gap-10 px-14 ">
              <div className="w-12"></div>
              <div className="w-7/12">
                <div
                  dangerouslySetInnerHTML={{
                    __html: addCustomStyling(blogPost?.content),
                  }}
                />
              </div>
              <div className="w-3/12   start-1">
                <div className="border-[#b2b2b2] sticky top-0 polygon rounded-xl border-[1px] w-full h-min   p-[1px]">
                  <div className=" w-full h-max polygon-b rounded-xl flex flex-col gap-5 p-8">
                    <h4 className="uppercase">Table of contents</h4>
                    <ol className="list-decimal flex flex-col text-sm gap-3">
                      {strongText.map((el: string, i: number) => (
                        <li key={i}>{el}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
}
