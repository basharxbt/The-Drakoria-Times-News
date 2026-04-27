import React from "react";
import Marquee from "react-fast-marquee";

const Headline = () => {
  return (
    <div className="flex container mx-auto bg-base-200 p-4 my-4 rounded-sm">
      <p className="bg-red-600 text-white font-semibold py-1 px-4 ">Latest</p>
      <Marquee pauseOnHover={true}>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          deleniti pariatur officia molestiae eum fugiat deserunt suscipit. Iure
          provident consectetur quaerat laboriosam cumque in dolorem hic dolorum
          esse officia est sapiente quos perferendis, eos magni quidem maiores?
          Molestiae quasi quae nisi rem similique temporibus, reiciendis
          eligendi facilis id culpa cumque.
        </p>
      </Marquee>
    </div>
  );
};

export default Headline;
