import React from "react";

const Button = ({
  children,
  ...rest
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      {...rest}
      className="flex justify-items-center whitespace-nowrap group relative px-4 py-2 m-2 font-medium text-neutral-50 rounded-2xl dark:text-slate-100 bg-violet-400 dark:bg-neutral-900 transition-colors duration-[400ms] hover:text-indigo-300"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-cyan-400 dark:bg-indigo-300  transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-cyan-400 dark:bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-cyan-400 dark:bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-cyan-400 dark:bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default Button;
