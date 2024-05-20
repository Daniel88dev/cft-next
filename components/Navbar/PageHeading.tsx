import DesktopNavigation from "@/components/Navbar/Desktop/DesktopNavigation";

export type PageHeadingType = {
  id: number;
  name: string;
  link: string;
  menu: string;
};

const Heading = () => {
  const HeadingObjects: PageHeadingType[] = [
    {
      id: 1,
      name: "Problem-lists",
      link: "/problem-lists",
      menu: "problem-lists",
    },
    {
      id: 2,
      name: "Vehicle-lists",
      link: "/vehicle-lists",
      menu: "vehicle-lists",
    },
    {
      id: 3,
      name: "Vehicle-issues",
      link: "/vehicle-issues",
      menu: "vehicle-issues",
    },
    {
      id: 4,
      name: "Problem-search",
      link: "/problem-search/",
      menu: "problem-search",
    },
    {
      id: 5,
      name: "Vehicle-search",
      link: "/vehicle-search",
      menu: "vehicle-search",
    },
    { id: 6, name: "Charts", link: "/charts", menu: "charts" },
    {
      id: 7,
      name: "Admin",
      link: "/admin",
      menu: "admin",
    },
  ];

  return (
    <header
      className={
        "absolute bg-white dark:bg-gray-800 z-10 inset-x-0 top-0 h-24 w-full"
      }
    >
      <DesktopNavigation data={HeadingObjects} />
    </header>
  );
};

export default Heading;
