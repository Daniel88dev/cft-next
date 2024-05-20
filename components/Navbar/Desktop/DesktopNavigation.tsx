import { PageHeadingType } from "@/components/Navbar/PageHeading";
import Logo from "@/components/Navbar/Logo";
import NavLink from "@/components/Navbar/Desktop/NavLink";
import ThemeSwitcher from "@/components/Navbar/ThemeSwitcher";
import ProfileButton from "@/components/Navbar/Desktop/ProfileButton";
import LogoutButton from "@/components/Navbar/Desktop/LogoutButton";

const DesktopNavigation = ({ data }: { data: PageHeadingType[] }) => {
  return (
    <nav
      className={
        "fixed left-[50%] top-4 hidden md:flex -translate-x-[50%] items-center gap-4 rounded-lg border-[1px] border-neutral-700 bg-violet-500 dark:bg-neutral-900 p-2 text-sm text-white dark:text-neutral-500"
      }
    >
      <Logo />

      {data.map((dat) => (
        <NavLink key={`menu${dat.id}`} link={dat.link} menu={dat.menu}>
          {dat.name}
        </NavLink>
      ))}

      <ThemeSwitcher />
      <ProfileButton />
      <LogoutButton />
    </nav>
  );
};

export default DesktopNavigation;
