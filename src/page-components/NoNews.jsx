"use client";
import Image from "next/image";
const NoNews = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">No News Available</h1>

      <p className="text-gray-500 max-w-md mb-6">
        We couldn’t find any news at the moment. Please check back later or try
        refreshing.
      </p>

      <button
        onClick={() => window.location.reload()}
        className="px-5 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition"
      >
        Refresh
      </button>
    </div>
  );
};

export default NoNews;
