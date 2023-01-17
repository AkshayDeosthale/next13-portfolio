import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Skills = ({}: Props) => {
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
      className="h-screen  items-center text-center md:text-left relative flex overflow-hidden flex-col  md:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto  "
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
        skills
      </h3>
    </motion.div>
  );
};

export default Skills;
