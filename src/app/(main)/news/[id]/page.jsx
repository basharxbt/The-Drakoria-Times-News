import { getNewsById } from "@/lib/data";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaEye, FaRegBookmark, FaStar } from "react-icons/fa";

import { IoShareSocialOutline } from "react-icons/io5";
import RightSide from "@/page-components/RightSide";
import { BiLeftArrow } from "react-icons/bi";

const page = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsById(id);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-5">
        <div className="p-1 space-y-3 col-span-2">
          <h1 className="text-3xl font-bold text-neutral-600">
            The Drakoria Times
          </h1>
          {news.map((n) => (
            <div key={n._id} className="border border-gray-200 rounded my-5 ">
              <div className="flex justify-between items-center bg-base-200 p-4 rounded">
                <div className="flex gap-3 items-center">
                  <Image
                    className="rounded-full"
                    src={n.author.img}
                    alt="author image"
                    width={50}
                    height={50}
                  />
                  <div className="space-y-1">
                    <p className="font-bold text-xl">{n.author.name}</p>
                    <p className="font-semibold text-neutral-500">
                      {n.author.published_date}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 text-2xl">
                  <FaRegBookmark />
                  <IoShareSocialOutline />
                </div>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-2xl font-semibold">{n.title}</h3>
                <Image
                  className="w-full"
                  src={n.image_url}
                  alt={n.title}
                  width={500}
                  height={300}
                ></Image>
                <p>{n.details}</p>
                <Link href={`/category/${n.category_id}`}>
                  <button className="font-bold btn btn-md bg-red-600 text-white ">
                    <BiLeftArrow></BiLeftArrow> All news in this category
                  </button>
                </Link>
                <div className="flex justify-between items-center">
                  <div className="my-2 flex gap-2 items-center text-xl">
                    <FaStar className="text-yellow-500" />
                    <p className="font-semibold  text-neutral-500">
                      {n.rating.number}
                    </p>
                  </div>
                  <div className="font-semibold text-xl text-neutral-500 flex items-center gap-1">
                    <FaEye className="text-2xl" />
                    <p>{n.total_view}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-1">
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default page;
