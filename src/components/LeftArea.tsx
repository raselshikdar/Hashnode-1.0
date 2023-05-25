import Link from "next/link";
import Hamburger from "./../svgs/Hamburger";
import Logo from "./../svgs/Logo";

const LeftArea = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        aria-label="menu icon"
        role="button"
        className="btn-icon flex h-10 w-10 lg:hidden"
      >
        <Hamburger className="h-5 w-5 fill-black dark:fill-white" />
      </button>
      <Link aria-label="Go to Home Page" href={"/"}>
        <Logo className="h-6 fill-black dark:fill-white" />
      </Link>
    </div>
  );
};

export default LeftArea;
