"use client";

import { ReactNode, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import CloseButton from "@/components/UI/Button/CloseButton";

type ModalProps = {
  title: string;
  children: ReactNode;
  pathName: string;
  optionalPath?: string | undefined;
};

const Modal = ({
  children,
  title,
  pathName,
  optionalPath = undefined,
}: ModalProps) => {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const path = usePathname();
  const currentPath = path.split("/");

  const onModalClose = () => {
    dialogRef.current?.close();
    router.back();
  };

  useEffect(() => {
    if (optionalPath) {
      if (pathName === currentPath[currentPath.length - 2]) {
        dialogRef.current?.showModal();
      } else {
        dialogRef.current?.close();
      }
    } else {
      if (pathName === currentPath[currentPath.length - 1]) {
        dialogRef.current?.showModal();
      } else {
        dialogRef.current?.close();
      }
    }
  }, [pathName, currentPath, optionalPath]);

  const checkDisplayModal = () => {
    if (optionalPath) {
      return pathName === currentPath[currentPath.length - 2];
    } else {
      return pathName === currentPath[currentPath.length - 1];
    }
  };

  return (
    <>
      {checkDisplayModal() && (
        <div
          onClick={onModalClose}
          className={
            "z-30 fixed top-0 left-0 w-full h-screen flex justify-center items-center backdrop-blur-md"
          }
        >
          <motion.dialog
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            ref={dialogRef}
            onClick={(e) => {
              if (e.target !== e.currentTarget) e.stopPropagation();
            }}
            className={
              "z-40 bg-violet-200 dark:bg-gray-700 text-black dark:text-white p-4 border-2 rounded-2xl border-black dark:border-white overflow-hidden flex flex-col shadow-2xl border-r-2 w-[30rem]"
            }
          >
            <div className={"flex justify-between"}>
              <h2 className={"text-2xl"}>{title}</h2>
              <CloseButton onClick={onModalClose} />
            </div>
            <div className={"overflow-y-auto w-full h-[95%]"}>
              <div className={"flex overflow-visible"}>{children}</div>
            </div>
          </motion.dialog>
        </div>
      )}
    </>
  );
};

export default Modal;
