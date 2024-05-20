"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

const AdminLink = ({ name, location }: { name: string; location: string }) => {
  const path = usePathname();

  return (
    <li className={"mx-4"}>
      <Link href={`/admin/${location}`} className={"px-2 hover:underline"}>
        {name}
      </Link>
      {path.split("/")[2] === location && (
        <motion.div
          layoutId={"admin-underline"}
          className={"bg-violet-500 h-2 rounded-2xl"}
        />
      )}
    </li>
  );
};

export default AdminLink;
