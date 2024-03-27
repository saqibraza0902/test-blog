import { IItem } from "@/app/newportfolio/page";
import CommonLayout from "@/layout";
import { IPortfolio } from "@/utils/types";
import Image from "next/image";
import React from "react";

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
  const data: IPortfolio = await getData(slug);
  return (
    <CommonLayout>
      <div className="flex justify-center w-full min-h-screen">
        <div className="w-2/3 mx-auto flex flex-col gap-10 p-4">
          <h2 className="text-2xl  font-semibold">{data.title}</h2>
          {data?.gallery.length > 0 && (
            <div className="grid grid-cols-4 gap-2">
              {data?.gallery?.map((item: IItem, index) => (
                <div className=" w-full h-80 relative group" key={index}>
                  <Image
                    fill={true}
                    className="object-contain"
                    src={item?.url}
                    alt={item?.alt}
                  />
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-between">
            <p>Country:{data?.client?.country}</p>
            <p>Name:{data?.client?.name}</p>
            <p>Individual: {data?.client?.isIndividual ? "Yes" : "No"}</p>
          </div>
          <p>{data?.desc}</p>
          <div dangerouslySetInnerHTML={{ __html: data?.content }} />
        </div>
      </div>
    </CommonLayout>
  );
};

export default SinglePortfolio;
