import { FC, ReactNode, useState } from "react";
import FilterIcon from "./FilterIcon";
import { motion, AnimatePresence } from "framer-motion";

interface FilterMenuProps {
  pageName: string;
  children: ReactNode;
}
const FilterMenu: FC<FilterMenuProps> = ({ pageName, children }) => {
  const [filters, setFilters] = useState(true);

  const motionConfig = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  };
  return (
    <>
      <div className={"flex justify-between px-4 md:px-0"}>
        <h1 className="text-left ml-2 text-xl underline">{pageName}</h1>
        <FilterIcon
          className={
            "block w-8 text-white dark:fill-white fill-black cursor-pointer"
          }
          onClick={() => setFilters((prevState) => !prevState)}
        />
      </div>
      <AnimatePresence>
        {filters && (
          <motion.div
            className={`flex flex-wrap my-2 h-22 border-black dark:border-white border-2 rounded-2xl items-end h-auto overflow-visible flex-shrink-0 mx-4 md:mx-0`}
            initial={motionConfig.initial}
            animate={motionConfig.animate}
            exit={motionConfig.exit}
            transition={motionConfig.transition}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FilterMenu;
