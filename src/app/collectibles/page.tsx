"use client";
import { useAppDispatch } from "@/hooks/Hooks";
import CommonLayout from "@/layout";
import { addItem } from "@/redux/slices/cartSlices";
import { db } from "@/utils/firebase";
import { increment } from "firebase/database";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";

const Collectibles = () => {
  const [collectible, setCollectible] = useState<any>([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const get_data = async () => {
      try {
        const colRef = collection(db, "Collectibles");
        const snapshot = await getDocs(colRef);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCollectible(data);
      } catch (error) {
        console.log(error);
      }
    };
    get_data();
  }, []);
  const addToCart = async (item: any) => {
    try {
      dispatch(addItem(item));
      console.log("Item added to cart!");
    } catch (error) {
      console.error("Error adding to cart: ", error);
    }
  };
  return (
    <CommonLayout>
      <div className="grid grid-cols-3">
        {collectible.map((post: any) => (
          <div key={post.id}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 w-80">
              <Link href={`/collectibles/${post.id}`}>
                <img
                  className="w-full h-48 object-cover object-center"
                  src={post.image}
                  alt={post.title}
                />
              </Link>
              <div className="p-4">
                <h2 className="text-gray-800 text-xl font-semibold">
                  {post.title}
                </h2>
                <p className="mt-2 text-gray-600">Type: {post.type}</p>
                <p className="text-gray-600">Sub-Type: {post.subtype}</p>
                <p className="mt-2 text-gray-800 font-semibold">
                  ${post.price}
                </p>
                <button
                  onClick={() => addToCart(post)}
                  className="mt-4 bg-brand_blue-500 flex hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  <BiPlus />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CommonLayout>
  );
};

export default Collectibles;
