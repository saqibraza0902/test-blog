"use client";
import CommonLayout from "@/layout";
import React, { useEffect, useState } from "react";
const get_single_posts = async (slug: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/collectibles/${slug}`
    );

    if (!res.ok) {
      throw new Error("Failed");
    }

    return res.json();
  } catch (error: any) {
    return new Error(error);
  }
};
const SingleCollectible = ({ params }: { params: { slug: string } }) => {
  //   console.log(props);
  const [newdata, setNewData] = useState<any>();
  useEffect(() => {
    const get_data = async () => {
      try {
        const data = await get_single_posts(params.slug);
        setNewData(data);
      } catch (error) {
        console.log(error);
      }
    };
    get_data();
  }, [params]);
  return (
    <CommonLayout>
      <div>
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl">
          <img
            className="w-full h-64 object-cover object-center"
            src={newdata?.image}
            alt="Collectible Image"
          />
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-2">Title: {newdata?.title}</h1>

            <p className="text-gray-700 text-lg mb-2">
              Price: ${newdata?.price}
            </p>

            <p className="text-gray-700 mb-4">
              Type: {newdata?.type} | Subtype: {newdata?.subtype}
            </p>

            <div dangerouslySetInnerHTML={{ __html: newdata?.content }} />
            <a
              href={newdata?.downloadUrl}
              className="block bg-brand_blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Download Now
            </a>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default SingleCollectible;
