'use client';
import Link from "next/link";
import Image from "next/image";
import NavLink from "./ui/navlink";
import Button from "./ui/button";
import { X, List } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/public/logo.svg";

export default function Header() {
  const menus = [
    {
      href: "/",
      text: "Inicio"
    },
    {
      href: "/about",
      text: "Sobre"
    },
    {
      href: "/services",
      text: "Serviços"
    },
    {
      href: "/blog",
      text: "Blog"
    },
  ];

  const pathName = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="
      flex
      items-center
      justify-center
      my-0
      mx-auto
    ">
      <nav className="
          flex
          items-center
          flex-1
          max-w-7xl
          gap-8
          m-5
          px-5
          justify-between
        ">

        {/* LOGO */}
        <Link href={"/"}>
          <Image src={Logo} 
            width={140} 
            height={50} 
            alt="Logo da In-Palco" />
        </Link>

        {/* NAVBAR-LINKS */}
        <div 
          className={`
            bg-slate-50
            items-center
            justify-between
            gap-4
            flex-col
            absolute
            top-14
            left-0
            w-full
            p-8
            shadow-xl
            md:flex
            md:flex-row
            md:p-0
            md:static
            md:shadow-none
            ${openMenu ? "flex" : "hidden"}`}>

          {/* LINKS */}
          <ul className="
            flex
            items-center
            gap-8
            flex-col
            mb-8
            md:gap-2
            md:flex-row
            md:mb-0
          ">
            {menus.map((menu, index) => (
              <NavLink 
                key={index} 
                href={menu.href}
                onClick={() => setOpenMenu(false)}
                text={menu.text} 
                isActive={pathName == menu.href} />
            ))}
          </ul>

          {/* CTA */}
          <Link className="text-white font-medium text-lg bg-purple-500 text-center py-4 px-8 rounded-full w-full transition mt-2 hover:bg-orange-500 md:w-max hover:scale-105 hover:drop-shadow-lg" href="/contact">Entre em contato</Link>
        </div>
        
        {/* OPEN MOBILE MENU BUTTON */}
        <button 
          className="
            text-purple-500
            block
            md:hidden
          " 
          onClick={() => setOpenMenu(!openMenu)}>
          {openMenu 
            ? <X width={32} height={32} /> 
            : <List width={32} height={32} />}
        </button>
      </nav>
    </header>
  );
}