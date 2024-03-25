"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/Hooks";
import CommonLayout from "@/layout";
import { addItem, decrementItem, removeItem } from "@/redux/slices/cartSlices";
import Link from "next/link";
import React from "react";

const Cart = () => {
  const { items } = useAppSelector((s) => s.cart);
  const dispatch = useAppDispatch();
  const removeCartItem = (item: any) => {
    dispatch(removeItem(item));
  };
  const incrementCartItem = (item: any) => {
    dispatch(addItem(item));
  };

  const decrementCartItem = (item: any) => {
    dispatch(decrementItem(item));
  };
  return (
    <CommonLayout>
      {items.length === 0 && (
        <div className="h-screen flex justify-center items-center">
          <p>Cart is empty</p>
        </div>
      )}
      <div className="grid grid-cols-3">
        {items.map((post: any) => (
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
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => decrementCartItem(post)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    -
                  </button>
                  <p className="dark:text-black text-black">{post.quantity}</p>
                  <button
                    onClick={() => incrementCartItem(post)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeCartItem(post)}
                  className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Remove from cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CommonLayout>
  );
};

export default Cart;
