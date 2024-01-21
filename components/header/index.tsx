import { usePathname, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

const Header = () => {
  return (
    <div className="fixed z-10 top-0 left-1/2 -translate-x-1/2 h-20 w-full md:max-w-[880px] px-5 sm:px-10 flex items-center justify-between backdrop-blur-sm">
      <HeaderItem route="/" text="home" />
      <div className="flex items-center gap-x-5 sm:gap-x-8">
        <HeaderItem route="life" />
        <HeaderItem route="work" />
        <HeaderItem route="love" />
        <HeaderItem route="health" />
      </div>
    </div>
  );
};

export default Header;

const HeaderItem: React.FC<{ route: string; text?: string }> = ({
  route,
  text,
}) => {
  const router = useRouter();
  const currentPathname = usePathname();
  const isActive = route === currentPathname || `/${route}` === currentPathname;

  return (
    <div
      className="relative font-bold font-ubuntu cursor-pointer group pl-2 select-none"
      onClick={() => router.push(`/${route}`)}
    >
      <i
        className={twMerge(
          "after:content-[''] after:w-1 after:h-1 after:bg-dark-100/60 after:absolute group-hover:after:bg-dark-100 duration-300",
          isActive
            ? "after:bg-dark-200 after:left-0 after:w-full after:bottom-0"
            : "after:left-0 after:bottom-1.5"
        )}
      />
      <span
        className={twMerge(
          "text-dark-100/60 group-hover:text-dark-100",
          isActive && "text-dark-200"
        )}
      >
        {text || route}
      </span>
    </div>
  );
};
