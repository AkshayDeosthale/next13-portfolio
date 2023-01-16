import { motion } from "framer-motion";
import React from "react";
import ExpCard from "./ExpCard";

type Props = {};

const Experience = ({}: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen items-center relative flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="">
        <ExpCard />
        <ExpCard />
        <ExpCard />
      </div>
    </motion.div>
  );
};

export default Experience;
