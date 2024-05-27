"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import SplashButton from "@/components/WelcomePage/components/SplashButton";
import GhostButton from "@/components/WelcomePage/components/GhostButton";
import GlowingChip from "@/components/WelcomePage/components/GlowingChip";

const WelcomeContent = () => {
  return (
    <div className="relative z-20 mx-auto flex flex-col items-center justify-center px-80 pt-24 md:px-8 md:pb-80 min-h-screen">
      <motion.div
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <GlowingChip>Exciting announcement 🎉</GlowingChip>
      </motion.div>
      <motion.h1
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          delay: 0.25,
          ease: "easeInOut",
        }}
        className="mb-3 text-center text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-7xl lg:leading-tight"
      >
        CFT Problem Lists
      </motion.h1>
      <motion.p
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          delay: 0.5,
          ease: "easeInOut",
        }}
        className="mb-9 max-w-2xl text-center text-base leading-relaxed text-zinc-400 sm:text-lg md:text-lg md:leading-relaxed"
      >
        Welcome on a CFT Problem List management web application. Manage, and
        register new problems on pre-production vehicles.
      </motion.p>
      <motion.div
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          delay: 0.75,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center gap-6 sm:flex-row"
      >
        <Link href={"/register-user"}>
          <SplashButton className="flex items-center gap-2">
            Register
            <FiArrowRight />
          </SplashButton>
        </Link>
        <Link href={"/login"}>
          <GhostButton className="rounded-md px-4 py-2 text-zinc-100">
            Login
          </GhostButton>
        </Link>
      </motion.div>
    </div>
  );
};

export default WelcomeContent;
