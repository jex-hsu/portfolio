"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  const { ref } = useSectionInView({ section: "Home", thresholdValue: 0.5 });

  return (
    <section
      id="home"
      ref={ref}
      className="mb-28 max-w-[50rem] scroll-mt-36 text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/portrait.png"
              alt="JexHsu portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="size-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
<<<<<<< HEAD
<<<<<<< HEAD
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
=======
        className="mb-10 mt-4 px-4 text-left text-2xl font-medium !leading-[1.5] sm:text-4xl"
>>>>>>> 7844006 (wip-1)
=======
        className="mb-10 mt-4 px-4 text-left text-2xl font-medium !leading-[1.5] sm:text-4xl"
>>>>>>> b65b4e9 (wip-1)
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m JexHsu.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
        >
          Contact me here
          <BsArrowRight className="rotate-90 opacity-75 transition group-hover:translate-y-2 sm:rotate-0 sm:group-hover:translate-x-2 sm:group-hover:translate-y-0" />
        </Link>
        <a
          href="/CV.pdf"
          target="_blank"
          download
          className="text-dark group flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105"
        >
          Download CV
          <HiDownload className="opacity-75 transition group-hover:translate-y-2" />
        </a>
        <div className="flex items-center justify-center sm:w-auto">
          <a
            href="https://www.linkedin.com/in/jex-hsu-7971312b5/"
            className="text-dark m-2 flex size-12 items-center justify-center rounded-full border border-black/10 bg-white hover:scale-110 focus:scale-110 active:scale-105"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/jex-hsu"
            className="text-dark m-2 flex size-12 items-center justify-center rounded-full border border-black/10 bg-white hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
