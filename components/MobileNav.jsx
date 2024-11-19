"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "início",
    path: "/",
  },
  {
    name: "serviços",
    path: "/services",
  },
  {
    name: "currículo",
    path: "/resume",
  },
  {
    name: "projetos",
    path: "/work",
  },
  {
    name: "contato",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center ">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col ">
        <SheetTitle></SheetTitle>{"Menu Principal"}
        {/* Logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Matheus<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* Menu */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } capitalize font-medium hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
