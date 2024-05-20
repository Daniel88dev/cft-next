import Link from "next/link";

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <Link href={"/"}>
      <div className={"flex items-center"}>
        <svg
          width="24"
          height="100%"
          viewBox="0 0 50 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-none ml-2 fill-neutral-50 content-center"
        >
          <path
            d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
            stopColor="#000000"
          ></path>
          <path
            d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
            stopColor="#000000"
          ></path>
        </svg>
        <h1 className="text-white text-md">CFT Problem lists</h1>
      </div>
    </Link>
  );
};

export default Logo;
