"use client";
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo";
import { ThemeSwitch } from "@/components/NavBar/theme-switch";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/16/solid";

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

        <Link href="#" className="text-[#000000] lg:hover:text-[#352CE8] transition-all">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">NOMBRE APP</p>
        </NavbarBrand>
        </Link>

      </NavbarContent>


      <NavbarContent className="hidden sm:flex gap-4 space-x-8 transition-all" justify="center">

        <NavbarItem>
          <Link className="text-[#000000] hover:text-[#352CE8] transition-all text-base" href="#">
            Home 
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-[#000000] hover:text-[#352CE8] transition-all text-base">
            Especialidades
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-[#000000] hover:text-[#352CE8] transition-all text-base" href="#">
            Dashboard
          </Link>
        </NavbarItem>

        <NavbarItem className="hidden sm:flex gap-2">
					<ThemeSwitch className="hidden"/>
				</NavbarItem>

      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} href="#" variant="flat" className="text-[#ffffff] bg-[#352CE8] font-semibold hover:bg-[#F8E5FF] hover:text-[#000000]">
          <ArrowRightEndOnRectangleIcon className="h-6 w-6"/> Log Out 
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
