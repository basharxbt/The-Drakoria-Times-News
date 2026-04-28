import Image from "next/image";
import Link from "next/link";

import { FaEye, FaRegBookmark, FaStar } from "react-icons/fa";

import { IoShareSocialOutline } from "react-icons/io5";

const NewsCard = ({ news, id }) => {
  return (
    <div className="p-1 space-y-3">
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
            <p className="line-clamp-3">{n.details}</p>
            <Link href={`/news/${n._id}`}>
              <button className="font-bold btn btn-md bg-red-400 text-white ">
                Read More
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
  );
};

export default NewsCard;
