"use client";

import { motion } from "motion/react";
import { MotionIcon } from "./motion";

import {
  SiRadixui,
  SiTypescript,
  SiGithub,
  SiTailwindcss,
} from "react-icons/si";
import {
  FaReact,
} from "react-icons/fa"


export const Hero = () => {
  return (
    <div className="items-center my-40">
      <div className="flex-1 flex flex-col items-center text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="font-bold flex flex-col text-5xl capitalize tracking-tight leading-[1.3]"
        >
          <span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-b dark:from-zinc-50 from-zinc-950 dark:via-white via-zinc-800 dark:to-zinc-950 to-zinc-600">
              Breathe
            </span>{" "}
            <span className="bg-gradient-to-r from-orange-500 to-rose-600 bg-clip-text text-transparent">
              Motion
            </span>
          </span>
          <span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-b dark:from-zinc-50 from-zinc-950 dark:via-white via-zinc-800 dark:to-zinc-950 to-zinc-600">
              into your
            </span>{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-violet-600 to-blue-600 bg-clip-text text-transparent">
              Components
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
          className="text-base md:text-xl font-medium text-zinc-600 dark:text-zinc-400 mt-4 max-w-[32ch]"
        >
          Motion-first components for React, built with Tailwind CSS and Motion.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 w-full"
        >
          <motion.a
            href="https://github.com/astrod333"
            target="_blank"
            rel="noopener noreferrer"
            className="w-auto md:w-fit cursor-pointer flex items-center justify-center gap-1 h-9 px-2 py-1 text-xs md:h-12 md:px-8 md:py-3 md:text-base rounded-full border-2 border-zinc-950 dark:text-zinc-50 font-medium dark:border-zinc-50 text-zinc-900"
          >
            <SiGithub className="size-4 fill-zinc-950 dark:fill-zinc-50" />
            Follow
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
          className="mt-12 flex flex-col gap-2"
        >
          <span className="text-base font-medium text-zinc-500 dark:text-zinc-300">
            Built with
          </span>

          <div className="flex items-center gap-3">
            <FaReact className="fill-zinc-500 dark:fill-zinc-300 size-8" />
            <SiTypescript className="fill-zinc-500 dark:fill-zinc-300 size-8" />
            <SiTailwindcss className="fill-zinc-500 dark:fill-zinc-300 size-8" />
            <MotionIcon className="fill-zinc-500 dark:fill-zinc-300 size-12" />
            <SiRadixui className="stroke-zinc-500 dark:stroke-zinc-300 size-8" />
          </div>
        </motion.div>
      </div>
      {/* <div className="flex-1">TODO: image</div> */}
    </div>
  );
};
