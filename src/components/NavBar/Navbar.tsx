"use client";
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo";
import { ThemeSwitch } from "@/components/NavBar/theme-switch";
import { UserIcon } from "@heroicons/react/20/solid";

export default function NavbarHome() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Especialidades",
    "Dashboard",
    "Log Out",
  ];

  return (
    <div className="bg-[#ffffff] flex justify-center lg:py-6">
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#F3F3F3] text-[#000000] w-full lg:w-11/12 lg:rounded-full">
      <NavbarContent>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <Link href="#" className="text-[#000000] lg:hover:text-[#8529be] transition-all">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">NOMBRE APP</p>
        </NavbarBrand>
        </Link>

      </NavbarContent>


      <NavbarContent className="hidden sm:flex gap-4 space-x-8 transition-all" justify="center">

        <NavbarItem>
          <Link className="text-[#000000] hover:text-[#8529be] transition-all text-base" href="#">
            Home 
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-[#000000] hover:text-[#8529be] transition-all text-base">
            Especialidades
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-[#000000] hover:text-[#8529be] transition-all text-base" href="#">
            Dashboard
          </Link>
        </NavbarItem>

        <NavbarItem className="hidden sm:flex gap-2">
					<ThemeSwitch className="hidden"/>
				</NavbarItem>

      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="space-x-5">
          <Button as={Link} href="#" variant="flat" className="text-[#000000] bg-[#F3F3F3] border-solid border-1 border-[#000000] font-semibold hover:bg-[#8529be] hover:text-[#ffffff] h-9">
            Register
          </Button>

          <Button as={Link} href="#" variant="flat" className="text-[#ffffff] bg-[#352CE8] font-semibold hover:bg-[#8529be] h-9">
            <UserIcon className="h-3 w-3"/> Log in
          </Button>

        </NavbarItem>
      </NavbarContent>


      <NavbarMenu className="bg-[#ffffff]">

        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-[#000000]"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}

      </NavbarMenu>

    </Navbar>
    </div>
  );
}
