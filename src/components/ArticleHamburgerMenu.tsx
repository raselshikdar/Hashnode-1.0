import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import { Facebook, Github, Linkedin, Times, Twitter } from "~/svgs";
import { type User } from "./ArticleHeader";

const ArticleHamburgerMenu: FC<{
  user: User;
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ user, menu, setMenu }) => {
  return (
    <>
      <div
        onClick={() => setMenu(false)}
        className={`fixed inset-0 z-20 bg-gray-400 bg-opacity-40 ${
          menu ? "block" : "hidden"
        }`}
      />
      <section
        className={`hamburger_menu ${
          menu ? "active" : "inactive"
        } fixed left-0 top-0 z-50 h-screen w-full max-w-[16rem] overflow-auto md:max-w-[18rem]`}
      >
        <div className="flex min-h-screen w-full flex-col">
          <header className="flex items-center justify-between border-b border-border border-border-light bg-light-bg p-6 shadow-md dark:border-border dark:bg-primary">
            <Link className="flex items-center gap-2" href="/">
              <Image
                src={user.profile}
                alt={user.name}
                className="h-9 w-9 rounded-full object-cover"
                width={40}
                height={40}
              />
              <h1 className="text-lg font-medium text-gray-700 dark:text-text-secondary">
                {user.name}&rsquo;s Blog
              </h1>
            </Link>

            <button
              aria-label="Close Hambuger Menu"
              onClick={() => setMenu(false)}
              className="btn-icon-large flex"
            >
              <Times className="h-5 w-5 fill-gray-700 dark:fill-text-secondary" />
            </button>
          </header>

          <section className="flex flex-1 flex-col bg-light-bg shadow-md dark:bg-primary">
            <div className="flex flex-1 flex-col py-4">
              <h1 className="mb-4 px-6 py-2 text-sm font-medium tracking-wide text-gray-700 dark:text-text-secondary">
                BLOG MENU
              </h1>

              <ul className="mb-4 border-b border-border-light px-4 pb-4 dark:border-border">
                {["Home", "Badges"].map((item, index) => (
                  <li key={index}>
                    <Link href={`/${item.toLowerCase()}`}>
                      <div className="rounded-md px-6 py-3 text-base font-medium tracking-wide text-gray-700 hover:bg-gray-200 dark:text-text-secondary dark:hover:bg-primary-light">
                        {item}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>

              <h1 className="mb-4 px-6 py-2 text-base font-medium tracking-wide text-gray-700 dark:text-text-secondary">
                BLOG SOCIALS
              </h1>

              <ul className="mb-4 flex flex-wrap gap-2 border-b border-border-light px-4 pb-4 dark:border-primary-light">
                {[
                  {
                    name: "Twitter",
                    icon: (
                      <Twitter className="h-5 w-5 fill-gray-700 dark:fill-text-secondary" />
                    ),
                    link: "https://twitter.com/ujen_basi/",
                  },
                  {
                    name: "Facebook",
                    icon: (
                      <Facebook className="h-5 w-5 fill-gray-700 dark:fill-text-secondary" />
                    ),
                    link: "https://twitter.com/ujen_basi/",
                  },
                  {
                    name: "Github",
                    icon: (
                      <Github className="h-5 w-5 fill-gray-700 dark:fill-text-secondary" />
                    ),
                    link: "https://twitter.com/ujen_basi/",
                  },
                  {
                    name: "Linkedin",
                    icon: (
                      <Linkedin className="h-5 w-5 fill-gray-700 dark:fill-text-secondary" />
                    ),
                    link: "https://twitter.com/ujen_basi/",
                  },
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      target="_blank"
                      className="btn-icon-large flex"
                      href={`/${item.link}`}
                    >
                      {item.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ArticleHamburgerMenu;
