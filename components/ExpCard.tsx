import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

const ExpCard = ({}: Props) => {
  return (
    <article>
      <motion.img
        src="/images/amazon.jpeg"
        alt="title"
        className="h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center "
      />
    </article>
  );
};

export default ExpCard;
