import { motion } from "framer-motion";
import React from "react";

type Props = {};

const About = ({}: Props) => {
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
      className="flex flex-col md:flex-row relative h-screen text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
        About
      </h3>
      <div className="flex flex-col justify-center items-center md:flex-row gap-5 mt-40 md:mt-0">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          viewport={{ once: true }}
          className=" flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:h-[600px] xl:w-[500px]"
          src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
        />
        <div className="space-y-5 px-0 md:px-10">
          <h3 className="text-4x font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little </span>
            background
          </h3>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            molestiae optio eligendi fugit facilis minus maiores ad sed
            voluptatibus laborum quam incidunt unde nemo iure temporibus commodi
            magnam quos delectus?Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Exercitationem cum culpa aliquam hic, ab modi
            repellat iure. Eius sunt repellat quam aperiam harum molestiae
            voluptates, enim, tempora nulla voluptas numquam.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
