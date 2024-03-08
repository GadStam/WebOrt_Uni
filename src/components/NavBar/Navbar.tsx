"use client";
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo";
import { ThemeSwitch } from "@/components/NavBar/theme-switch";

export default function NavbarHome() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Especialidades",
    "Dashboard",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-zinc-800 text-stone-50 sm:border-none">
      <NavbarContent>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <Link href="#" className="text-stone-50 hover:text-amber-400 transition-all">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">NOMBRE APP</p>
        </NavbarBrand>
        </Link>

      </NavbarContent>


      <NavbarContent className="hidden sm:flex gap-4 space-x-8 transition-all" justify="center">

        <NavbarItem>
          <Link className="text-stone-50 hover:text-amber-400 transition-all text-base" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-stone-50 hover:text-amber-400 transition-all text-base">
            Especialidades
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-stone-50 hover:text-amber-400 transition-all text-base" href="#">
            Dashboard
          </Link>
        </NavbarItem>

        <NavbarItem className="hidden sm:flex gap-2">
					<ThemeSwitch className="hidden"/>
				</NavbarItem>

      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} href="#" variant="flat" className="text-stone-50 bg-zinc-800 hover:bg-amber-400">
            Log Out
          </Button>
        </NavbarItem>
      </NavbarContent>


      <NavbarMenu className="bg-zinc-800">

        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-stone-50"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}

      </NavbarMenu>

    </Navbar>
  );
}