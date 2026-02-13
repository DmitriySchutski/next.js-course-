"use client";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import Image from "next/image";

export const Logo = () => {
  
  return <Image src="/logo.png"
alt="Белорусская кухня"
width={50}
height={50}
priority
/>;
  
};

export default function Header() {

  const navItems = [
    {href: "/", label: "Рецепты"},
    {href: "/ingridients", label: "Ингридиенты"},
    {href: "/about", label: "О нас"}
  ];

  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" className="flex gap-1">
          <Logo />
          <p className="font-bold text-inherit">Белорусская кухня</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item) =>{
          return ( <NavbarItem key={item.href}>
          <Link color="foreground" href={item.href}>
            {item.label}
          </Link>
        </NavbarItem>)
        })}
       
      
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Войти</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Регистрация
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
