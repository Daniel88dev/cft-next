"use client";
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

type NavLinkProps = {
  children: ReactNode;
  link: string;
  menu: string;
};
const NavLink = ({ children, link, menu }: NavLinkProps) => {
  const path = usePathname();

  return (
    <Link
      href={link}
      rel={"nofollow"}
      className={
        "block overflow-hidden text-nowrap pr-4" +
        (path.startsWith(link) ? " underline dark:text-white" : "")
      }
    >
      <motion.div
        whileHover={{ y: -20 }}
        transition={{ ease: "backInOut", duration: 0.5 }}
        className={"h-[20px]"}
      >
        <span className={"flex h-[20px] items-center"}>{children}</span>
        <span className={"flex h-[20px] items-center text-neutral-50"}>
          {children}
        </span>
      </motion.div>
    </Link>
  );
};

export default NavLink;
