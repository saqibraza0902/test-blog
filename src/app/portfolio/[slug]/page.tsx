import { IItem } from "@/app/newportfolio/page";
import CommonLayout from "@/layout";
import { SHARE_ICONS } from "@/mock";
import { ShareIcon } from "@/ui/components/AnimatedIcons";
import { calculateDuration } from "@/utils/calculatedate";
import extractStrongText from "@/utils/text";
import { timestamps } from "@/utils/timestamp";
import { addCustomStyling } from "@/utils/transformation";
import { IPortfolio } from "@/utils/types";
import Image from "next/image";
import React from "react";
import { CiCalendar } from "react-icons/ci";

const getData = async (slug: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/portfolio/${slug}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed");
    }
    return res.json();
  } catch (error) {
    throw new Error("Error");
  }
};
const SinglePortfolio = async (props: any) => {
  const { slug } = props.params;
  const post: IPortfolio = await getData(slug);
  const strongText = extractStrongText(post?.content);
  const duration = calculateDuration(
    // @ts-ignore
    post.timeline.start.seconds,
    // @ts-ignore
    post.timeline.end.seconds
  );
  // console.log("This is duration", duration);
  return (
    <CommonLayout>
      <div className="flex relative justify-center w-full h-full min-h-screen ">
        <div className="h-full w-full">
          <div className="h-screen bg-brand_blue-400 rounded-b-[40px] px-14 py-14 flex flex-col justify-end">
            <h2 className="text-[70px] text-white font-semibold">
              {post.title}
            </h2>
            <div className="bg-white my-5 w-full h-[1px]" />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <CiCalendar color="#fff" size={20} />
                <span className="text-white">
                  {timestamps(post.createdAt.seconds)}
                </span>
              </div>
              <div>
                <a className="text-white" href="#article">
                  Scroll
                </a>
              </div>
            </div>
          </div>

          <div id="article" className="relative flex py-10 px-14">
            <section className="w-1/12 relative">
              <div className="!sticky top-10 pb-20">
                <div className=" !relative">
                  <div className="">
                    <span>Share</span>
                    <div className="flex flex-col gap-2">
                      {SHARE_ICONS.map((el, i) => (
                        <ShareIcon
                          key={i}
                          IconAlt={el.iconAlt}
                          Icon={el.icon}
                          color={el.color}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-11/12">
              <div className="flex gap-10">
                <div className="w-7/12 ">
                  <h3 className="text-2xl font-semibold">{post?.desc}</h3>
                </div>
                <div className="flex gap-1">
                  <div>
                    <p className="text-[#9E9EA9]">Industry</p>
                    <p>
                      {post.tags.map((el, i) => (
                        <span key={i}>
                          {el}
                          {i !== post.tags.length - 1 && ","}
                        </span>
                      ))}
                    </p>
                    <p className="text-[#9E9EA9]">Country</p>
                    <p>{post.client.country}</p>

                    <div>
                      <p className="text-[#9E9EA9]">
                        {post.client.isIndividual
                          ? "Client Name"
                          : "Company Name"}
                      </p>
                      <p>{post.client.name}</p>
                    </div>
                    <div>
                      <p className="text-[#9E9EA9]">Timeline</p>
                      <p>{duration}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black my-5 w-full h-[1px]"></div>
              <div className="flex gap-10 relative">
                <div className="w-7/12">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: addCustomStyling(post?.content),
                    }}
                  />
                </div>
                <div className="w-3/12   start-1">
                  <div className="border-[#b2b2b2]  sticky top-10  rounded-xl border-[1px] w-full h-min   p-[1px]">
                    <div className="relative">
                      <Image
                        alt="Icon"
                        src="/icons/toc-collar_tablet.svg"
                        width={20}
                        height={30}
                        className="absolute w-10 -right-[2px] -top-[2px] bg-white"
                      />
                      <div className=" w-full h-max  rounded-xl flex flex-col gap-5 p-8">
                        <h4 className="uppercase">Processes</h4>
                        <ol className="list-decimal flex flex-col text-sm gap-3">
                          {strongText.map((el: string, i: number) => (
                            <li key={i}>{el}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-black my-5 w-full h-[1px]"></div>
            </section>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default SinglePortfolio;
