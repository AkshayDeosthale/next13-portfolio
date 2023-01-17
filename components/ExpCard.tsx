import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

const ExpCard = ({}: Props) => {
  return (
    <article className=" mt-28 py-2 snap-center bg-[#292929] flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 w-[500px] md:w-[400px] hover:opacity-100 md:opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        src="/images/amazon.jpeg"
        alt="title"
        className="h-24 w-24 rounded-full  object-cover object-center "
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-2xl md:text-4xl font-light">CEO of Amazon</h4>
        <p className="font-bold text-1xl md:text-2xl mt-1">Amazon</p>
        <div className="flex space-x-2 my-2">
          {/* tech used */}
          <Image
            src=""
            height={10}
            width={10}
            alt={"technology"}
            className="rounded-full"
          />
          {/* tech used */}
          {/* tech used */}
          {/* tech used */}
        </div>
        <p className="uppercase py-5 text-gray-300 text-sm ">
          Started work... - Ended work...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg h-[70%] overflow-scroll">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExpCard;
